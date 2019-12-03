import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../models/services/product.service";
import {Product} from "../../../models/product";
import {ExcelService} from "../../../models/services/excel.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {PdfService} from '../../../models/services/pdf.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Facility} from "../../../models/facility";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-contact-products',
  templateUrl: './contact-products.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./contact-products.component.scss']
})
export class ContactProductsComponent implements OnInit {
  products: Product[];
  expandedElement: Product | null;
  errorMessage1: string;
  companyId: number;
  plId: number;
  facilityId: number;
  createForm = {display: 'none'};
  // facilityName: string;
  facilities: Facility[];


  // Fields that go into products table
  productId: string;
  productName: string;
  productBrand: string;
  productEvalStatus: string;
  productFacility: string;
  productPrivateLabel: string;
  // productNote: string;

  displayProductsColumns: string[] = ['productId', 'productName', 'productBrand', 'productEvalStatus', 'productFacility', 'productPrivateLabel', 'viewMore', 'download'];

  constructor(private productService: ProductService,
              private excelService: ExcelService,
              private pdfService: PdfService) { }

  ngOnInit() {
    this.viewProducts();
  }

  viewProducts(): void {
    this.productId = '';
    this.productService.viewCompanyProducts(0).subscribe(
      (res) => {
        if (res[0]) {
          this.products = [];
          res.forEach((item) => {
            item = new Product(item);
            this.products.push(item);
          });
        }
        console.log(this.products);
      }
    );
  }

  findProduct(companyId, productName): void {
    this.productService.findCompanyProduct(0, this.productName).subscribe(
      (res) => {
        if (res[0]) {
          this.products = [];
          res.forEach((item) => {
            item = new Product(item);
            this.products.push(item);
          });
        }
        console.log(this.products);
      }
    );
  }

  openProductForm() {
    this.createForm.display = 'block';
  }


  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.products, 'All Products');
  }

  downloadPdf(id, name): void {
    const documentDefinition = this.pdfService.getDocumentDefinition(id, name);
    pdfMake.createPdf(documentDefinition).download();
  }

  addProduct(companyId, productName, productBrand, plId, facilityId) {
    if(this.productName, this.productBrand) {
      this.errorMessage1 = null;
      this.productService.addProduct(0, this.productName, this.productBrand, this.facilityId, this.plId).subscribe((res) => {
        console.log(res)
        if(res.success) {
          this.viewProducts();
          this.errorMessage1 = null;
          this.createForm.display = 'none';
        } else {
          console.warn(res);
          this.errorMessage1 = 'This product already exists'
        }

      })
    }
  }


}
