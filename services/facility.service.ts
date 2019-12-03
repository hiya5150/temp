import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  baseUrl = 'http://localhost/PB-Certification-Server/Facilities/';
  // baseUrl = 'http://localhost:8888/PB-Certification-Server/Facilities/';

  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: '3d17bf4ab04eaa36617ffbcadbf05f66acc97f308bca17ddf3f880461888ae3f'

    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) {
  }

  viewCompanyFacilities(companyId: number): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.baseUrl}viewCompanyFacilities/${companyId}`, this.httpOptions);
  }

  viewFacility(facilityId: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.baseUrl}viewFacility/${facilityId}`, this.httpOptions);
  }

  viewFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.baseUrl}viewFacilities`, this.httpOptions);
  }

  addFacility(facilityName: string, facilityAddress1: string, facilityAddress2: string,
  facilityCity: string, facilityProvince: string, facilityPostalCode: string, facilityCountry: string, facilityPhone: string) : Observable<Facility> {
    const body = `facility_name=${facilityName}&facility_address1=${facilityAddress1}&facility_address2=${facilityAddress2}&facility_city=${facilityCity}&facility_province=${facilityProvince}&facility_postal_code=${facilityPostalCode}&facility_country=${facilityCountry}&facility_phone=${facilityPhone}`;
    return this.http.post<Facility>(`${this.baseUrl}createFacility`, body, this.httpOptions);
  }

  editFacility(facilityId: number, facilityName: string, facilityAddress1: string, facilityAddress2: string,
               facilityCity: string, facilityProvince: string, facilityPostalCode: string, facilityCountry: string, facilityPhone: string) : Observable<Facility[]> {
    const body = `facility_name=${facilityName}&facility_address1=${facilityAddress1}&facility_address2=${facilityAddress2}&facility_city=${facilityCity}&facility_province=${facilityProvince}&facility_postal_code=${facilityPostalCode}&facility_country=${facilityCountry}&facility_phone=${facilityPhone}`;
    return this.http.post<Facility[]>(`${this.baseUrl}editFacility/${facilityId}`, body, this.httpOptions);

  }

  // deleteFacility(facilityId: number): Observable<Facility[]> {
  //   return this.http.delete<Facility[]>(`${this.baseUrl}deleteFacility/${facilityId}`, this.httpOptions)
  //
  // }
}
