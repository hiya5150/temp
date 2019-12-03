import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../../../models/services/ingredient.service";
import {Ingredient} from "../../../models/ingredient";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-ingredient',
  templateUrl: './contact-ingredient.component.html',
  styleUrls: ['./contact-ingredient.component.scss']
})
export class ContactIngredientComponent implements OnInit {
  ingredient: Ingredient;
  companyId: number;
  ingredientId: number;
  status: boolean;

  editForm = {display: 'none'};
  showFormButton = {display: 'inline-block'};

  constructor(
    private ingredientService: IngredientService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {

    this.companyId = +this.activatedRoute.snapshot.paramMap.get('companyId');
    this.ingredientId = +this.activatedRoute.snapshot.paramMap.get('ingredientId');

  }

  ngOnInit() {
    this.viewIngredient();
  }

  backClicked() {
    this.location.back();
  }

  viewIngredient(): void {
    this.ingredientService.viewIngredient(this.ingredientId).subscribe(
      (res) => {
        this.ingredient = new Ingredient(res);
        console.log(this.ingredient);
        if (this.ingredient.ingredientEvalStatus == 1) {
          this.status = true;
        } else {
          this.status = false;
        }
      }

      );
  }

  showEditForm() {
    this.editForm.display = 'block';
    this.showFormButton.display = 'none';
  }
  closeEditForm() {
    this.editForm.display = 'none';
    this.showFormButton.display = 'inline-block';
    this.viewIngredient();
  }

  editIngredient(ingredientId, ingredientName, vendorName) {
    this.ingredientService.editIngredient(ingredientId, ingredientName, vendorName).subscribe(
      () => {
        this.viewIngredient();
        this.editForm.display = 'none';
        this.showFormButton.display = 'inline-block';
      }
    );

  }




}
