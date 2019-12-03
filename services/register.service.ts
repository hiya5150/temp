import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // private baseUrl = 'http://localhost/PB-Certification-Server/';
  private baseUrl = 'http://localhost:8888/PB-Certification-Server/';
  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }
  // register function is for contacts; sends register fields and stores the in database
  // tslint:disable-next-line:max-line-length
  register(firstName: string, lastName: string, title: string, phone: string, email: string, username: string, password: string, companyId: number): Observable<Contact> {
    // tslint:disable-next-line:max-line-length
    const body = `contact_first_name=${firstName}&contact_last_name=${lastName}&contact_title=${title}&contact_phone=${phone}&contact_email=${email}&contact_username=${username}&contact_password=${password}`;
    return this.http.post<Contact>(`${this.baseUrl}register/contactRegister/${companyId}`, body, this.httpOptions);
  }


  findContact(username: string, companyCode: number): Observable<any[]> {
    const body = `&contact_username=${username}&company_code=${companyCode}`;
    return this.http.post<any[]>(`${this.baseUrl}register/contactFind`, body, this.httpOptions);
  }

  registerUser(username: string, userPassword: string): Observable<User> {
    const body = `username=${username}&user_password=${userPassword}`;
    return this.http.post<User>(`${this.baseUrl}register/userRegister/`, body, this.httpOptions);
  }


}

