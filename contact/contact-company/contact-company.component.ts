import { Component, OnInit } from '@angular/core';
import { CompanyService} from "../../../models/services/company.service";
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../models/company';
import {ExcelService} from '../../../models/services/excel.service';
import {PdfService} from '../../../models/services/pdf.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {MatDialog, MatDialogConfig } from "@angular/material";
import {MAT_DIALOG_DATA} from "@angular/material";
// import {Location} from '@angular/common';
import {EditCompanyComponent} from "./edit-company/edit-company.component";


pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-contact-company',
  templateUrl: './contact-company.component.html',
  styleUrls: ['./contact-company.component.scss']
})
export class ContactCompanyComponent implements OnInit {
  company: Company;
  // companyId: number;

  editForm = {display : 'none'};


  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private excelService: ExcelService,
    private pdfService: PdfService,
    // private location: Location,
    private dialog: MatDialog)
  {

  }

  ngOnInit() {
    this.viewCompany();

  }

  // backClicked() {
  //   this.location.back();
  // }

  viewCompany(): void {
    this.companyService.viewCompany(0).subscribe(
      (res) => {
        this.company = new Company(res[0]);
        console.log(this.company);
      }
    );
  }

  showEditForm() {
    this.editForm.display = 'block';
  }

  openEditCompany(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(EditCompanyComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(
      () => {
        this.viewCompany();
      }
    );

  }


}
