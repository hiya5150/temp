import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../../models/services/facility.service';
import {Facility} from '../../../models/facility';

@Component({
  selector: 'app-contact-facilities',
  templateUrl: './contact-facilities.component.html',
  styleUrls: ['./contact-facilities.component.scss']
})
export class ContactFacilitiesComponent implements OnInit {
  facilities: Facility[];

  createForm = { display: 'none' };

  facilityName: string;
  companyName: string;
  facilityAddress1: string;
  facilityAddress2: string;
  facilityCity: string;
  facilityProvince: string;
  facilityPhone: string;
  facilityPostalCode: string;
  facilityCountry: string;
  errorMessage1: string;


  displayFacilityColumns: string[] = ['facilityName', 'companyName', 'facilityAddress1', 'facilityCity', 'facilityPhone', 'viewMore'];


  constructor(private facilityService: FacilityService) { }

  ngOnInit() {
    this.viewCompanyFacilities();
  }

  viewCompanyFacilities(): void {
    this.facilityService.viewCompanyFacilities(0).subscribe(
      (res) => {
        if (res[0]) {
          this.facilities = [];
          res.forEach((item) => {
            item = new Facility(item);
            this.facilities.push(item);
          });
          console.log(this.facilities);
        } else {
          console.warn(res);
        }
      }
    );
  }
  addFacility() {
    if (this.facilityName, this.facilityAddress1, this.facilityCity, this.facilityProvince, this.facilityPostalCode, this.facilityCountry) {
      this.errorMessage1 = null;
      this.facilityService.addFacility(this.facilityName, this.facilityAddress1, this.facilityAddress2, this.facilityCity, this.facilityProvince, this.facilityPostalCode, this.facilityCountry, this.facilityPhone)
        .subscribe((res) => {
          console.log(res)
            if (res.success) {
              this.viewCompanyFacilities();
              this.errorMessage1 = null;
              this.createForm.display = 'none';
            } else {
              console.warn(res);
              this.errorMessage1 = 'This facility already exists.';
            }
          }
        );
    } else {
      this.errorMessage1 = 'Please make sure all fields are completed.';
    }

  }

  openFacilityForm() {
    this.createForm.display = 'block';
}

}
