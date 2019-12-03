import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Contact} from "../../../../models/contact";
import {ContactService} from "../../../../models/services/contact.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contact: Contact;
  contactEdited: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditContactComponent>,
    private dialog: MatDialog,
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.viewContact();
  }

  viewContact() : void {
    this.contactService.viewContact(this.data).subscribe(
      (res) => {
        this.contact = new Contact(res);
        console.log(this.contact);
      }
    );
  }

  editContact() {
    if(this.contact.firstName, this.contact.lastName, this.contact.title, this.contact.username, this.contact.password, this.contact.phone, this.contact.email) {
      this.contactService.editContact(this.data, this.contact.firstName, this.contact.lastName, this.contact.title, this.contact.phone, this.contact.email, this.contact.username, this.contact.password)
        .subscribe(() => {
          if(true) {
            this.contactEdited = 'Contact ' + this.contact.firstName + ' ' + this.contact.lastName + ' has ben successfully edited';
            this.closeDialog();
          } else {
            this.contactEdited = 'Contact could not be edited. Please try again';
          }
          this.viewContact();
        });
    }
  }

  closeDialog(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);

  }




}
