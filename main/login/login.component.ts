import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {LoginService} from '../../../models/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // properties for username, password, and type(whether student or teacher)
  username: string;
  password: string;
  type: string;

  // MatDialog refers to the dialog box used for the login.component.html. router is for using router to redirect page


  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private logInService: LoginService,
  ) {

  }

  ngOnInit() {
  }

// on form submission checks type and verifies
  // if verified and token received it redirect to relative homepage
  onSubmit() {
    this.logInService.login(this.username, this.password, this.type).subscribe((res) => {
      if (res.token) {
        window.localStorage.setItem('token', res.token);
        this.dialogRef.close();
        this.router.navigateByUrl(`user/companies`).then();
      }
    });
  }
}

