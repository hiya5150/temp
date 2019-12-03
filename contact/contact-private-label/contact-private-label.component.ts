import { Component, OnInit } from '@angular/core';
import {PrivateLabelService} from "../../../models/services/private-label.service";
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateLabel} from "../../../models/privateLabel";
import {Product} from "../../../models/product";
import {ProductService} from "../../../models/services/product.service";
import {Location} from "@angular/common";
import {EditPrivateLabelComponent} from "./edit-private-label/edit-private-label.component";
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-contact-private-label',
  templateUrl: './contact-private-label.component.html',
  styleUrls: ['./contact-private-label.component.sass']
})
export class ContactPrivateLabelComponent implements OnInit {

  privateLabel: PrivateLabel;
  plId: number;
  companyName: string;
  products: Product[];
  productName: string;
  productBrand: string;
  productEvalStatus: boolean;

  displayProductsColumns: string[] = ['productName', 'productBrand', 'productEvalStatus', 'viewMore'];



  constructor(
    private productService: ProductService,
    private privateLabelService: PrivateLabelService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location) {
    this.plId = +this.activatedRoute.snapshot.paramMap.get('plId');

   }

  ngOnInit() {
    this.viewPrivateLabel();
    this.viewPrivateLabelProducts();
  }

  backClicked() {
    this.location.back();
  }

  viewPrivateLabel(): void {
    this.privateLabelService.viewPrivateLabel(this.plId).subscribe
    ((res) => {
      this.privateLabel = new PrivateLabel(res);
      console.log(this.privateLabel);
    });
  }

  openEditPrivateLabel() : void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = this.plId;

    this.dialog.open(EditPrivateLabelComponent, dialogConfig);

  }

  viewPrivateLabelProducts() : void {
    this.productService.viewPLProducts(this.plId).subscribe(
      (res) => {
        if (res[0]) {
          this.products = [];
          res.forEach((item) => {
            item = new Product(item);
            this.products.push(item);
          });
          console.log(this.products);
        } else {
          console.warn(res);
        }
      }
    );
  }

}
