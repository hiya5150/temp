import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PrivateLabel} from '../privateLabel';


@Injectable({
  providedIn: 'root'
})
export class PrivateLabelService {

  baseUrl = 'http://localhost/PB-Certification-Server/PrivateLabels/';
  // baseUrl = 'http://localhost:8888/PB-Certification-Server/PrivateLabels/';

  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: '3d17bf4ab04eaa36617ffbcadbf05f66acc97f308bca17ddf3f880461888ae3f'
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  viewPrivateLabels(): Observable<PrivateLabel[]> {
    return this.http.get<PrivateLabel[]>(`${this.baseUrl}viewPrivateLabels`, this.httpOptions);
  }

  viewCompanyPrivateLabels(companyId: number): Observable<PrivateLabel[]> {
    return this.http.get<PrivateLabel[]>(`${this.baseUrl}viewCompanyPrivateLabels/${companyId}`, this.httpOptions);
  }

  viewPrivateLabel(plId: number): Observable<PrivateLabel> {
    return this.http.get<PrivateLabel>(`${this.baseUrl}viewPrivateLabel/${plId}`, this.httpOptions);
  }

  addPrivateLabel(plName: string, plAddress1: string, plAddress2: string,
                  plCity: string, plProvince: string, plPostalCode: string, plCountry: string, plPhone: string, plFax: string, plEmail: string, plWebsite: string, plBrand: string): Observable<PrivateLabel[]> {
    const body = `pl_name=${plName}&pl_address1=${plAddress1}&pl_address2=${plAddress2}&pl_city=${plCity}&pl_province=${plProvince}&pl_postal_code=${plPostalCode}&pl_country=${plCountry}&pl_phone=${plPhone}, &pl_fax=${plFax}, &pl_email=${plEmail},&pl_website=${plWebsite},&pl_brand=${plBrand}`;
    return this.http.post<PrivateLabel[]>(`${this.baseUrl}createPrivateLabel`, body, this.httpOptions);
  }

  editPrivateLabel(plId: number, plName: string, plAddress1: string, plAddress2: string,
               plCity: string, plProvince: string, plPostalCode: string, plCountry: string, plPhone: string, plFax: string, plEmail: string, plWebsite: string, plBrand: string): Observable<PrivateLabel[]>  {
    const body = `pl_name=${plName}&pl_address1=${plAddress1}&pl_address2=${plAddress2}&pl_city=${plCity}&pl_province=${plProvince}&pl_postal_code=${plPostalCode}&pl_country=${plCountry}&pl_phone=${plPhone}, &pl_fax=${plFax}, &pl_email=${plEmail},&pl_website=${plWebsite},&pl_brand=${plBrand}`;
    return this.http.post<PrivateLabel[]>(`${this.baseUrl}editPrivateLabel/${plId}`, body, this.httpOptions);

  }
}
