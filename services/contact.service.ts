import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = 'http://localhost/PB-Certification-Server/Contacts/';
  // baseUrl = 'http://localhost:8888/PB-Certification-Server/Contacts/';

  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: '3d17bf4ab04eaa36617ffbcadbf05f66acc97f308bca17ddf3f880461888ae3f'
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  viewCompanyContacts(companyId: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}viewCompanyContacts/${companyId}`, this.httpOptions);
  }

  viewAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}viewAllContacts`, this.httpOptions);
  }

  viewContact(contactId: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}viewContact/${contactId}`, this.httpOptions);
  }

  // addContact(contactFirstName: string, contactLastName: string, contactTitle: string, contactPhone: string, contactEmail: string, contactUsername: string, contactPassword: string) : Observable<Contact> {
  // const body = `contact_first_name=${contactFirstName}&contact_last_name=${contactLastName}&contact_title=${contactTitle}&contact_phone=${contactPhone}&contact_email=${contactEmail}&contact_username=${contactUsername}&contact_password=${contactPassword}`;
  // return this.http.post<Contact>(`${this.baseUrl}createContact`, body, this.httpOptions);
  // }

  editContact(contactId: number, firstName: string, lastName: string, username: string, title: string, phone: string, email: string, password: string) : Observable<Contact[]> {
  const body = `contact_first_name=${firstName}&contact_last_name=${lastName}&contact_title=${title}&contact_phone=${phone}&contact_email=${email}&contact_username=${username}&contact_password=${password}`;
  return this.http.post<Contact[]>(`${this.baseUrl}editContact/${contactId}`, body, this.httpOptions);
  }


}
