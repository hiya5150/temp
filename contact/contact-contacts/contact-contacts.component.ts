import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../../models/services/contact.service';
import {Contact} from '../../../models/contact';
import {RegisterService} from "../../../models/services/register.service";

// import {ExcelService} from '../../../models/services/excel.service';


@Component({
  selector: 'app-contact-contacts',
  templateUrl: './contact-contacts.component.html',
  styleUrls: ['./contact-contacts.component.scss']
})
export class ContactContactsComponent implements OnInit {
  contacts: Contact[];

  createForm = { display: 'none' };


// Fields that go into contacts table
  contactTitle: string;
  contactFirstName: string;
  contactLastName: string;
  contactPhone: string;
  contactEmail: string;
  contactUsername: string;
  contactPassword: string;
  errorMessage1: string;

  displayContactColumns: string[] = ['contactFirstName', 'contactLastName', 'contactTitle', 'contactPhone', 'contactEmail', 'viewMore'];


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.viewCompanyContacts();
  }

  viewCompanyContacts(): void {
    this.contactService.viewCompanyContacts(0).subscribe(
    (res) => {
      if (res[0]) {
        this.contacts = [];
        res.forEach((item) => {
          item = new Contact(item);
          this.contacts.push(item);
        });
      console.log(this.contacts);
    } else {
    console.warn(res);
  }
  }
);
}
  openContactForm() {
    this.createForm.display = 'block';
  }

  // addContact() {
  //   if(this.contactUsername) {
  //     this.errorMessage1 = null;
  //     this.contactService.addContact(this.contactFirstName, this.contactLastName, this.contactTitle, this.contactEmail, this.contactPhone, this.contactUsername, this.contactPassword)
  //       .subscribe((res) => {
  //         console.log(res)
  //         if (res.success) {
  //           this.viewCompanyContacts();
  //           this.errorMessage1 = null;
  //           this.createForm.display = 'none';
  //         } else {
  //           console.warn(res);
  //           this.errorMessage1 = 'This username already exists';
  //         }
  //       });
  //   } else {
  //     this.errorMessage1 = "Please make sure all fields are completed"
  //   }
  // }


  // exportAsXLSX(): void {
  //   this.excelService.exportAsExcelFile(this.contacts, 'All Contacts');
  // }

}
