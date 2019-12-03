import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Company} from "../../../../models/company";
import {CompanyService} from "../../../../models/services/company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  company: Company;
  companyEdited: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditCompanyComponent>,
    private dialog: MatDialog,
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    console.log(this.data);
    this.viewCompany();
  }

  viewCompany(): void {
  this.companyService.viewCompany(0).subscribe(
    (res) => {
      this.company = new Company(res[0]);
      console.log(this.company);
    }
  );
}

  editCompanyInfo()  {
    if(this.company.companyName, this.company.companyAddress1, this.company.companyAddress2, this.company.companyCity, this.company.companyProvince, this.company.companyPostalCode, this.company.companyCountry, this.company.companyPhone, this.company.companyFax, this.company.companyEmail, this.company.companyWebsite) {
      this.companyService.editCompanyInfo(this.company.companyName, this.company.companyAddress1, this.company.companyAddress2, this.company.companyCity, this.company.companyProvince, this.company.companyPostalCode, this.company.companyCountry, this.company.companyPhone, this.company.companyFax, this.company.companyEmail, this.company.companyWebsite)
        .subscribe(() => {
          if (true) {
            this.companyEdited = this.company.companyName + ' has been successfully edited';
            this.closeDialog();
          } else {
            this.companyEdited = 'Company could not be edited. Please try again';
          }
          this.viewCompany();
        });
    }

  }
  closeDialog(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);

  }





}
