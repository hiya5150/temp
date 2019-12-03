import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog,  MatDialogRef} from '@angular/material';
import {PrivateLabel} from "../../../../models/privateLabel";
import {PrivateLabelService} from "../../../../models/services/private-label.service";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-private-label',
  templateUrl: './edit-private-label.component.html',
  styleUrls: ['./edit-private-label.component.scss']
})
export class EditPrivateLabelComponent implements OnInit {

  privateLabel: PrivateLabel
  privateLabelEdited: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditPrivateLabelComponent>,
    private dialog: MatDialog,
    private privateLabelService: PrivateLabelService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    console.log(this.data);
    this.viewPrivateLabel();
  }

  editPrivateLabel() {
    if (this.privateLabel.plName, this.privateLabel.plAddress1, this.privateLabel.plAddress2, this.privateLabel.plCity, this.privateLabel.plProvince, this.privateLabel.plPostalCode, this.privateLabel.plCountry, this.privateLabel.plPhone, this.privateLabel.plFax, this.privateLabel.plEmail, this.privateLabel.plWebsite, this.privateLabel.plBrand) {
      this.privateLabelService.editPrivateLabel(this.data, this.privateLabel.plName, this.privateLabel.plAddress1, this.privateLabel.plAddress2, this.privateLabel.plCity, this.privateLabel.plProvince, this.privateLabel.plPostalCode, this.privateLabel.plCountry, this.privateLabel.plPhone, this.privateLabel.plFax, this.privateLabel.plEmail, this.privateLabel.plWebsite, this.privateLabel.plBrand)
        .subscribe(() => {
          if (true) {
            this.privateLabelEdited = this.privateLabel.plName + ' has been successfully edited';
            this.closeDialog();
          } else {
            this.privateLabelEdited = 'PL Company could not be edited. Please try again';
          }
          this.viewPrivateLabel();

        });
    }

  }

  closeDialog(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);

  }


  viewPrivateLabel(): void {
    this.privateLabelService.viewPrivateLabel(this.data).subscribe(
      (res) => {
        this.privateLabel = new PrivateLabel(res);
        console.log(this.privateLabel);
      }
    );
  }

}
