import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost/PB-Certification-Server/Products/';
  // baseUrl = 'http://localhost:8888/PB-Certification-Server/Products/';

  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: '87deb8b451ca5b9a3004c29a6b12730cf495add81a68cb5943b5ef42d9f0f8cb'
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  viewProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}viewProducts`, this.httpOptions);
  }

  viewWorkflowProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}viewWorkflowProducts`, this.httpOptions);
  }

  viewFacilityProduct(facilityId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}viewFacilityProducts/${facilityId}`, this.httpOptions);
  }

  viewPLProducts(plId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}viewPLProducts/${plId}`, this.httpOptions);
  }

  viewCompanyProducts(companyId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}viewCompanyProducts/${companyId}`, this.httpOptions);
  }

  viewProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}viewProduct/${productId}`, this.httpOptions);
  }

 editProductStatus(productId: number, productEvalStatus: string, productEvalDate: any, productNote: string): Observable<Product[]> {
    const body = `product_eval_status=${productEvalStatus}&product_eval_date=${productEvalDate}&product_note=${productNote}`;

    return this.http.post<Product[]>(`${this.baseUrl}editProductStatus/${productId}`, body, this.httpOptions);
  }

  editProductNote(productId: number, productNote: string): Observable<Product[]> {
    const body = `product_note=${productNote}`;

    return this.http.post<Product[]>(`${this.baseUrl}editProductNote/${productId}`, body, this.httpOptions);
  }

  editProduct(productId: number, productName: string, productBrand: string) {
    const body = `product_name=${productName}&product_brand=${productBrand}`;
    return this.http.post<Product[]>(`${this.baseUrl}editProduct/${productId}`, body, this.httpOptions)

  }

  findProduct(productName: string): Observable<Product[]> {
    const body = `product_name=${productName}`;
    return this.http.post<Product[]>(`${this.baseUrl}findProduct`, body, this.httpOptions);
  }

  findProductById(productId: number): Observable<Product[]> {
    const body = `product_id=${productId}`;
    return this.http.post<Product[]>(`${this.baseUrl}findProductById`, body, this.httpOptions);
  }

  findCompanyProduct(companyId: number, productName: string): Observable<Product[]> {
    const body = `product_name=${productName}`;
    return this.http.post<Product[]>(`${this.baseUrl}findCompanyProduct/${companyId}`, body, this.httpOptions);
  }

  addProduct(companyId: number, productName: string, productBrand: string, plId: number, facilityId: number) : Observable<Product> {
    const body = `product_name=${productName}&product_brand=${productBrand}&pl_id=${plId}&facility_id=${facilityId}`;
    return this.http.post<Product>(`${this.baseUrl}createProduct/${companyId}`, body, this.httpOptions);
  }

  addIngredientsToProduct(productId: number, ingredientId: number)  : Observable<Product[]> {
    const body = `ingredient_id=${ingredientId}`;
    return this.http.post<Product[]>(`${this.baseUrl}addIngredientsToProduct/${productId}`, body, this.httpOptions);
  }


}
