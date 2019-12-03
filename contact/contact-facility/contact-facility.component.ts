import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../../models/services/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Facility} from "../../../models/facility";
import {Product} from "../../../models/product";
import {ProductService} from '../../../models/services/product.service';
import {Location} from '@angular/common';
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {MatDialog, MatDialogConfig} from '@angular/material';



@Component({
  selector: 'app-contact-facility',
  templateUrl: './contact-facility.component.html',
  styleUrls: ['./contact-facility.component.scss']
})
export class ContactFacilityComponent implements OnInit {
  facility: Facility;
  // editForm = {display : 'none'};
  deleteForm = {display : 'none'};
  facilityId: number;
  companyName: string;
  products: Product[];
  productName: string;
  productBrand: string;
  productEvalStatus: boolean;
  plName: string;

  displayProductsColumns: string[] = ['productName', 'plName', 'productBrand', 'productEvalStatus', 'viewMore'];

  constructor(
    private productService: ProductService,
    private facilityService: FacilityService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location) {
    this.facilityId = +this.activatedRoute.snapshot.paramMap.get('facilityId');

    console.log(this.facilityId);
  }

  ngOnInit() {
    this.viewFacility();
    this.viewFacilityProducts();
  }

  backClicked() {
    this.location.back();
  }

  viewFacility(): void {
    this.facilityService.viewFacility(this.facilityId).subscribe(
      (res) => {
        this.facility = new Facility(res);
        console.log(this.facility);
      }
    );
  }

  openEditFacility(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = this.facilityId;

    this.dialog.open(EditFacilityComponent, dialogConfig);

  }



  viewFacilityProducts(): void {
    this.productService.viewFacilityProduct(this.facilityId).subscribe(
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

    // deleteFacility() {
  //   this.facilityService.deleteFacility(this.facilityId).subscribe((res) => {
  //     if (res.success === true) {
  //
  //     } else {
  //
  //     }
  //     this.deleteForm.display = 'none';
  //
  //
  //   });
  // }

  // showEditForm() {
  //       this.editForm.display = 'block';
  //
  // }
  //
  // showDeleteForm() {
  //   this.editForm.display = 'block';
  //
  // }





}
