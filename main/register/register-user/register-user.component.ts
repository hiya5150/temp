import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../../../models/services/register.service";
import {LoginComponent} from "../../login/login.component";
import {MatDialog, MatDialogRef, MatDialogConfig} from "@angular/material";
import {Router} from "@angular/router";
import {Contact} from "../../../../models/contact";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass']
})
export class RegisterUserComponent implements OnInit {

  //properties to register a new user
  userId: number;
  username: string;
  userPassword: string;

  // MatDialogRef refers to dialog box used for login. router is for using the router to redirect page
  constructor(public dialogRef: MatDialogRef<RegisterUserComponent>,
              private dialog: MatDialog,
              private router: Router,
              private registerService: RegisterService,
  ) {}
  ngOnInit() {
  }
  // onSubmit() {
  //   this.registerService.registerUser(this.username, this.userPassword)
  //     .subscribe((res) => {
  //       res => {
  //         res.foreach((item) => {
  //           item = new Contact(item);
  //
  //         })
  //         this.dialogRef.close();
  //         this.openLogin();
  //       }
  //     })
  // }

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(LoginComponent, dialogConfig);
  }

}
