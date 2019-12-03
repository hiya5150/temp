import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../../../models/services/ingredient.service";
import {Ingredient} from "../../../models/ingredient";
import {ExcelService} from "../../../models/services/excel.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-contact-ingredients',
  templateUrl: './contact-ingredients.component.html',
  styleUrls: ['./contact-ingredients.component.scss']
})
export class ContactIngredientsComponent implements OnInit {
  ingredients: Ingredient[];

  //fields that go into ingredients table
  ingredientId: string;
  ingredientName: string;
  ingredientEvalStatus: string;
  vendorName: string;
  errorMessage1: string;
  createForm = { display: 'none' };


  displayIngredientsColumns: string[] = ['ingredientId', 'ingredientName', 'ingredientEvalStatus', 'vendorName', 'viewMore'];


  constructor(private ingredientService: IngredientService,
              private  excelService: ExcelService) { }

  ngOnInit() {
    this.viewIngredients();
  }

  viewIngredients() : void {
    this.ingredientService.viewCompanyIngredients(0).subscribe(
      (res) => {
        if (res[0]) {
          this.ingredients = [];
          res.forEach((item) => {
            item = new Ingredient(item);
            this.ingredients.push(item);
          });

        console.log(this.ingredients);
      } else {
      console.warn(res);
    }
  }
);
}

  findCompanyIngredient(companyId, ingredientName) {
    this.ingredientService.findCompanyIngredient(0, this.ingredientName).subscribe(
      (res) => {
        if(res[0]) {
          this.ingredients = [];
          res.forEach((item) => {
            item = new Ingredient(item);
            this.ingredients.push(item);
          });
        }
        console.log(this.ingredients);
      }
    );
  }
  addIngredient() {
    if(this.ingredientName, this.vendorName) {
      this.errorMessage1 = null;
      this.ingredientService.addIngredient(this.ingredientName, this.vendorName).subscribe((res) => {
        console.log(res)
        if(res.success) {
          this.viewIngredients();
          this.errorMessage1 = null;
          this.createForm.display = 'none';
        } else {
          console.warn(res);
          this.errorMessage1 = 'This ingredient already exists'
        }

      })
    }
  }

  openIngredientForm() {
    this.createForm.display = 'block';
  }


  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.ingredients, 'All Ingredients');
  }

}


