import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../models/services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../../../models/contact";
import {Location} from '@angular/common';
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-contact-contact',
  templateUrl: './contact-contact.component.html',
  styleUrls: ['./contact-contact.component.scss']
})
export class ContactContactComponent implements OnInit {
  contact: Contact;
  contactId: number;
  // companyName: string;
  // companyId: string;
  // contactFirstName: string;
  // contactLastName: string;
  // contactUsername: string;
  // contactPassword: string;
  // contactTitle: string;
  // contactEmail: string;
  // contactPhone: string;



  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog) {
    this.contactId = +this.activatedRoute.snapshot.paramMap.get('contactId');

    console.log(this.contactId);
  }

  ngOnInit() {
    this.viewContact();
  }

  backClicked() {
    this.location.back();
  }

  viewContact(): void {
  this.contactService.viewContact(this.contactId).subscribe(
    (res) => {
      this.contact = new Contact(res);
        console.log(this.contact);
    }
  );
  }

  openEditContact(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = this.contactId;

    this.dialog.open(EditContactComponent, dialogConfig);

  }


}
