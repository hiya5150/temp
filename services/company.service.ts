import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'http://localhost/PB-Certification-Server/Companies/';
  // baseUrl = 'http://localhost:8888/PB-Certification-Server/Companies/';

  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace

      Authorization: '3d17bf4ab04eaa36617ffbcadbf05f66acc97f308bca17ddf3f880461888ae3f'

    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  viewCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}viewCompanies`, this.httpOptions);
  }

  viewCompany(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}viewCompany/${companyId}`, this.httpOptions);
  }

  createCompany(companyName: string, companyCode: string, companyNote: string): Observable<Company[]> {
    const body = `company_name=${companyName}&company_code=${companyCode}&company_note=${companyNote}`;
    return this.http.post<Company[]>(`${this.baseUrl}/createCompany`, body, this.httpOptions);
  }

  // tslint:disable-next-line:max-line-length
  editCompanyInfo(companyName: string, companyAddress1: string, companyAddress2: string, companyCity: string, companyProvince: string, companyPostalCode: string, companyCountry: string, companyPhone: string, companyFax: string, companyEmail: string, companyWebsite: string): Observable<Company[]>  {
    // tslint:disable-next-line:max-line-length
      const body = `company_name=${companyName}&company_address1=${companyAddress1}&company_address2=${companyAddress2}&company_city=${companyCity}&company_province=${companyProvince}&company_postal_code=${companyPostalCode}&company_country=${companyCountry}&company_phone=${companyPhone}&company_fax=${companyFax}&company_email=${companyEmail}&company_website=${companyWebsite}`;

      return this.http.post<Company[]>(`${this.baseUrl}editCompanyInfo`, body, this.httpOptions);
  }


  editCompanyComment(companyId: number, companyNote: string): Observable<Company[]> {
    const body = `company_note=${companyNote}`;

    return this.http.post<Company[]>(`${this.baseUrl}/editCompanyComment/${companyId}`, body, this.httpOptions);
  }


  findCompany(companyName: string): Observable<Company[]> {
    const body = `company_name=${companyName}`;

    return this.http.post<Company[]>(`${this.baseUrl}/findCompany`, body, this.httpOptions);
  }
}
