import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../models/services/product.service";
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {Ingredient} from "../../../models/ingredient";
import {IngredientService} from "../../../models/services/ingredient.service";
import {Location} from "@angular/common";
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {ExcelService} from '../../../models/services/excel.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {PdfService} from '../../../models/services/pdf.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-contact-product',
  templateUrl: './contact-product.component.html',
  styleUrls: ['./contact-product.component.scss']
})
export class ContactProductComponent implements OnInit {

  product: Product;
  productId: number;
  editForm = {display: 'none'};
  showformButton = {display: 'inline-block'};
  showPrintButton = {display: 'inline-block'};
  ingredients: Ingredient[];
  status: boolean;
  createForm = {display: 'none'};

  // Fields that go into ingredients table
  ingredientName: string;
  ingredientEvalStatus: boolean;
  ingredientEvalDate: any;
  vendorName: string;
  ingredientNote: string;

  //field used in AddProductstoIngredient form
  ingredientId: number;

  displayIngredientColumns: string[] = ['ingredientName', 'ingredientEvalStatus', 'ingredientEvalDate', 'vendorName', 'viewMore'];


  // // Date info
  // model: NgbDateStruct = { year: null, month: null, day: null };
  // tempDate: any;
  // date: {year: number, month: number};
  // placement = 'right';
  // evalDate: string;

  constructor(private productService: ProductService,
              private ingredientService: IngredientService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private excelService: ExcelService,
              private pdfService: PdfService) {
      this.productId = +this.activatedRoute.snapshot.paramMap.get('productId');
      console.log(this.productId);
  }

  ngOnInit() {
    this.viewProduct();
    this.viewProductIngredients();

  }

  backClicked() {
    this.location.back();
  }
  viewProduct(): void {
    this.productService.viewProduct(this.productId).subscribe(
      (res) => {
        this.product = new Product(res);
        console.log(this.product);
        // @ts-ignore
        if (this.product.productEvalStatus == 1) {
          this.status = true;
        } else {
          this.status = false;
        }
      }
        );
  }

        viewProductIngredients(): void {
          this.ingredientService.viewProductIngredient(this.productId).subscribe(
            (res) => {
              if (res[0]) {
                this.ingredients = [];
                res.forEach((item) => {
                  item = new Ingredient(item);
                  this.ingredients.push(item);
                });
              } else {
                console.warn(res);
              }
              console.log(this.ingredients);
            }
          );
      }


        showEditForm() {
          this.editForm.display = 'block';
          this.showformButton.display = 'none';
          this.showPrintButton.display = 'none';
        }
        closeEditForm() {
          this.editForm.display = 'none';
          this.showformButton.display = 'inline-block';
          this.showPrintButton.display = 'inline-block';
          this.viewProduct();
        }

        editProduct(productId, productName, productBrand) {
          this.productService.editProduct(productId, productName, productBrand).subscribe(
            () => {
              this.viewProduct();
              this.editForm.display = 'none';
              this.showformButton.display = 'inline-block';
            }
          );


        }

  exportAsXLSX(): void {
    this.ingredients.forEach((item) => {
      // @ts-ignore
      if (item.ingredientEvalStatus == 1) {
        item.ingredientEvalStatus = 'Vegan';
      } else { // @ts-ignore
        // @ts-ignore
        if (item.ingredientEvalStatus == 0) {
          item.ingredientEvalStatus = 'X';
        }
      }
    });
    this.excelService.exportAsExcelFile(this.ingredients, this.product.productName + this.product.productBrand);
  }

  downloadPdf(id, name): void {
    const documentDefinition = this.pdfService.getDocumentDefinition(id, name);
    pdfMake.createPdf(documentDefinition).download();
  }

  openIngredientForm() {
    this.createForm.display = 'block';
  }


  addIngredientsToProduct(productId, ingredientId) {
    this.productService.addIngredientsToProduct(this.productId, this.ingredientId).subscribe((res) => {
      console.log(res);
              this.viewProductIngredients();
          })
  }


}

