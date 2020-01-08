import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
} )
export class AuthService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost/PB-Certification-Server/home/';
  // private baseUrl = 'http://localhost:8888/PB-Certification-Server/home/';
  private httpOptions = {
    headers: new HttpHeaders({
      // sending auth token in header
      Authorization: localStorage.getItem('token')
    })
  };
  // checks if there's a token available
  static isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  // checks if token available and return true if token valid as teacher
  verifyContact(): Observable<any> {
    if (AuthService.isLoggedIn()) {
      return this.http.get<any>(`${this.baseUrl}verifyContactToken`, this.httpOptions);
    } else {
      return of(false);
    }
  }
  // checks if token available and return true if token valid as student
  verifyUser(): Observable<any> {
    if (AuthService.isLoggedIn()) {
      return this.http.get<any>(`${this.baseUrl}verifyUserToken`, this.httpOptions);
    } else {
      return of(false);
    }
  }
}
