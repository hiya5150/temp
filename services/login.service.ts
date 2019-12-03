import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private baseUrl = 'http://localhost/PB-Certification-Server/';
  private baseUrl = 'http://localhost:8888/PB-Certification-Server/';
  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }
  // login function sends username and password and validates it
  // this function also returns token for session verification
  login(username: string, password: string, type: string): Observable<any> {
    const body = `username=${username}&password=${password}`;
    return this.http.post(`${this.baseUrl}login/${type}Login`, body, this.httpOptions);
  }

  register(name: string, username: string, password: string, type: string): Observable<any> {
    const body = `name=${name}&username=${username}&password=${password}`;
    return this.http.post(`${this.baseUrl}register/${type}Register`, body, this.httpOptions);
  }
}
