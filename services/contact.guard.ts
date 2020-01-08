import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanActivate{
  constructor(
    private auth: AuthService,
    private route: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // verifies if token valid and if contact and returns observable boolean
    return this.auth.verifyContact().pipe(switchMap((data) => {
      if (data === true) {
        return of(true);
      } else if (data === false) {
        return this.logout();
      }
    }));
  }
// deletes token on logout and redirects to home
  private logout(): Observable<boolean> {
    // if (AuthService.isLoggedIn()) {
    //   localStorage.removeItem('token');
    // }
    this.route.navigate(['main/homepage']);
    return of(false);
  }
}
