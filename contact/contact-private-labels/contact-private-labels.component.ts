import { Component, OnInit } from '@angular/core';
import {PrivateLabelService} from '../../../models/services/private-label.service';
import {PrivateLabel} from '../../../models/privateLabel';
import {Facility} from '../../../models/facility';

@Component({
  selector: 'app-contact-private-labels',
  templateUrl: './contact-private-labels.component.html',
  styleUrls: ['./contact-private-labels.component.scss']
})
export class ContactPrivateLabelsComponent implements OnInit {

privateLabels: PrivateLabel[];
createForm = { display: 'none' };

  plName: string;
  companyName: string;
  plAddress1: string;
  plAddress2: string;
  plCity: string;
  plProvince: string;
  plPhone: string;
  plPostalCode: string;
  plCountry: string;
  plFax: string;
  plEmail: string;
  plWebsite: string;
  plBrand: string;
  errorMessage2: string;

  displayPlColumns: string[] = ['plName', 'companyName', 'plAddress1', 'plCity', 'plPhone', 'viewMore'];


  constructor(private privateLabelService: PrivateLabelService) { }

  ngOnInit() {
    this.viewCompanyPrivateLabels();
  }

  viewCompanyPrivateLabels(): void {
    this.privateLabelService.viewCompanyPrivateLabels(0).subscribe(
      (res) => {
        if (res[0]) {
          this.privateLabels = [];
          res.forEach((item) => {
            item = new PrivateLabel(item);
            this.privateLabels.push(item);
          });
          console.log(this.privateLabels);
        } else {
          console.warn(res);
        }
      }
    );
  }

  addPrivateLabel() {
    // if (this.plAddress2 === null,this.plPhone === null, this.plFax === null, this.plEmail === null, this.plWebsite === null) {
    // tslint:disable-next-line:max-line-length
      if (this.plName, this.plAddress1, this.plAddress2, this.plCity, this.plProvince, this.plPostalCode, this.plCountry, this.plFax, this.plEmail, this.plPhone, this.plWebsite, this.plBrand) {

        this.errorMessage2 = null;
        // this.plAddress2=null; }

        this.privateLabelService.addPrivateLabel(this.plName, this.plAddress1, this.plAddress2,
          this.plCity, this.plProvince, this.plPostalCode, this.plCountry, this.plFax, this.plEmail, this.plPhone,
          this.plWebsite, this.plBrand)
          .subscribe(() => {
              this.viewCompanyPrivateLabels();
            }
          );
      } else {
        this.errorMessage2 = 'Please make sure all required fields are completed.';
      }
      this.createForm.display = 'none';


    //   this.plAddress2 = '';
    // }


  }



  openPrivateLabelForm() {
    this.createForm.display = 'block';
  }

}




