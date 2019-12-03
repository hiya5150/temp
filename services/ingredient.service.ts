import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ingredient} from '../ingredient';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  baseUrl = 'http://localhost/PB-Certification-Server/Ingredients/';
  // baseUrl = 'http://localhost:8888/PB-Certification-Server/Ingredients/';

  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: '87deb8b451ca5b9a3004c29a6b12730cf495add81a68cb5943b5ef42d9f0f8cb'
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };


  constructor(private http: HttpClient) { }

  viewIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.baseUrl}viewIngredients`, this.httpOptions);
  }

  viewWorkflowIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.baseUrl}viewWorkflowIngredients`, this.httpOptions);
  }

  viewProductIngredient(productId: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.baseUrl}viewProductIngredients/${productId}`, this.httpOptions);
  }

  viewIngredient(ingredientId: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.baseUrl}viewIngredient/${ingredientId}`, this.httpOptions);
  }

  viewCompanyIngredients(companyId: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.baseUrl}viewCompanyIngredients/${companyId}`, this.httpOptions);
  }

  // tslint:disable-next-line:max-line-length
  editIngredientStatus(ingredientId: number, ingredientEvalStatus: boolean, ingredientEvalDate: any, ingredientNote: string): Observable<Ingredient[]> {
    // tslint:disable-next-line:max-line-length
    const body = `ingredient_eval_status=${ingredientEvalStatus}&ingredient_eval_date=${ingredientEvalDate}&ingredient_note=${ingredientNote}`;
    return this.http.post<Ingredient[]>(`${this.baseUrl}editIngredientStatus/${ingredientId}`, body, this.httpOptions);
  }

  editIngredient(ingedientId: number, ingredientName: string, vendorName: string) : Observable <Ingredient[]> {
    const body = `ingredient_name=${ingredientName}&vendor_name=${vendorName}`;
    return this.http.post<Ingredient[]>(`${this.baseUrl}editIngredientInfo/${ingedientId}`, body, this.httpOptions);
  }

  editIngredientNote(ingredientId: number, ingredientNote: string): Observable<Ingredient[]> {
    const body = `ingredient_note=${ingredientNote}`;

    return this.http.post<Ingredient[]>(`${this.baseUrl}editIngredientNote/${ingredientId}`, body, this.httpOptions);
  }

  findIngredient(ingredientName: string): Observable<Ingredient[]> {
    const body = `ingredient_name=${ingredientName}`;
    return this.http.post<Ingredient[]>(`${this.baseUrl}findIngredient`, body, this.httpOptions);
  }
  findIngredientById(ingredientId: number): Observable<Ingredient[]> {
    const body = `ingredient_id=${ingredientId}`;
    return this.http.post<Ingredient[]>(`${this.baseUrl}findIngredientById`, body, this.httpOptions);
  }

  findCompanyIngredient(companyId: number, ingredientName: string): Observable<Ingredient[]> {
    const body = `ingredient_name=${ingredientName}`;
    return this.http.post<Ingredient[]>(`${this.baseUrl}findCompanyIngredient/${companyId}`, body, this.httpOptions);
  }

  addIngredient(ingredientName: string, vendorName: string) : Observable<Ingredient> {
    const body = `ingredient_name=${ingredientName}&vendor_name=${vendorName}`;
    return this.http.post<Ingredient>(`${this.baseUrl}createIngredient`, body, this.httpOptions);

  }

 }
