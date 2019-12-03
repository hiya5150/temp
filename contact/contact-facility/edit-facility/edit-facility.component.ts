import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Facility} from '../../../../models/facility';
import {FacilityService} from '../../../../models/services/facility.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.scss']
})
export class EditFacilityComponent implements OnInit {

  facility: Facility;
  facilityEdited: string;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditFacilityComponent>,
    private dialog: MatDialog,
    private facilityService: FacilityService, private activatedRoute: ActivatedRoute  ) {
  }

  ngOnInit() {
    console.log(this.data);
    this.viewFacility();

  }

  viewFacility(): void {
    this.facilityService.viewFacility(this.data).subscribe(
      (res) => {
        this.facility = new Facility(res);
        console.log(this.facility);
      }
    );
  }

   editFacility() {
     // tslint:disable-next-line:max-line-length no-unused-expression
    if (this.facility.facilityName, this.facility.facilityAddress1, this.facility.facilityAddress2, this.facility.facilityCity, this.facility.facilityProvince, this.facility.facilityPostalCode, this.facility.facilityCountry, this.facility.facilityPhone) {
      // tslint:disable-next-line:max-line-length
      this.facilityService.editFacility(this.data, this.facility.facilityName, this.facility.facilityAddress1, this.facility.facilityAddress2, this.facility.facilityCity, this.facility.facilityProvince, this.facility.facilityPostalCode, this.facility.facilityCountry, this.facility.facilityPhone)
        .subscribe(() => {
          if (true) {
            this.facilityEdited = this.facility.facilityName + ' has been successfully edited';
            this.closeDialog();
          } else {
            this.facilityEdited = 'Facility could not be edited. Please try again';
          }
          this.viewFacility();

        });
    }

  }

  closeDialog(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);

  }




}
