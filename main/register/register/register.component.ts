import { Component, OnInit} from '@angular/core';
import {RegisterService} from '../../../../models/services/register.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import {Contact} from '../../../../models/contact';
import {LoginComponent} from '../../login/login.component';

@Component({
  selector: 'app-register-contact',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

// properties to register new contact
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  companyCode: number;

  // MatDialogRef refers to dialog box used for login. router is for using the router to redirect page
  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
              private dialog: MatDialog,
              private router: Router,
              private registerService: RegisterService,
              ) {}

  ngOnInit() {
  }

onSubmit() {
    this.registerService.findContact(this.username, this.companyCode).subscribe(
      (result) => {
        if (result) {
          console.log (result[0].company_id);
          this.registerService.register(this.firstName, this.lastName, this.title,
            this.phone, this.email, this.username, this.password, result[0].company_id)
            .subscribe((res) => {
                if (res.success === true) {
                  this.dialogRef.close();
                  this.openLogin();
                }
            });
        }
      }
    );

}

openLogin(): void {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '600px';

  this.dialog.open(LoginComponent, dialogConfig);
}

}






