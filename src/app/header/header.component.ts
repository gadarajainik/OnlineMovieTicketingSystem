import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../User.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;
  public username: string;
  public password;
  public fullname: string;
  public mobile: number;
  public email: string;
  public repassword;
  // public error;
  public city;
  public errormsg;
  public loggedin;
  authenticate: LoginService;
  formdata;
  constructor(authenticate: LoginService, private router: Router, private register: RegisterService) {
    this.authenticate = authenticate;
  }
  public ngOnInit() {
   // localStorage.removeItem('city');
    this.loggedin = false;
    if (localStorage.getItem('city')) {
      this.city = localStorage.getItem('city');
    }
    if (localStorage.getItem('fullname')) {
      this.fullname = localStorage.getItem('fullname');
      this.loggedin = true;
    }
    this.errormsg = '';
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('')
      ])),
      password: new FormControl('')
    });
    /* JQUERY */

    $(document).ready(() => {
      $('#login').click(() => {
        // alert('Register');
        $('#registermodal').modal('hide');
        $('#loginmodal').modal('show');
      });
      $('#register').click(() => {
        // alert('Register');
        $('#loginmodal').modal('hide');
        $('#registermodal').modal('show');
      });

    });

    /*Google SignIn*/
    function onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      localStorage.setItem('username', profile.getName());
    }
  }
  /*Google SignOut*/
  signout() {
    // const auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(() => {
    // });
    localStorage.removeItem('fullname');
    localStorage.removeItem('username');
    window.location.href = '/Movie' ;
  }

  onClickSubmit(value: any) {
    // alert( 'hii' );
    this.username = value.username;
    this.password = value.password;
    this.authenticate.validate(this.username, this.password).subscribe(r => {
    this.user = r;
    console.log(this.user);
    if (this.user) {
      localStorage.setItem('fullname', this.user.fullname);
      localStorage.setItem('username', this.user.username);
      // this.error = false;
      window.location.reload() ;
     } else {
      // this.error = true;
      this.errormsg = 'Invalid Username/Password';
      }
    });
  }


  registeruser() {
    this.user = {
      username: this.username,
      password: this.password,
      fullname: this.fullname,
      email: this.email,
      mobile: this.mobile
    };
    if (this.user.password !== this.repassword) {
        this.errormsg = 'Password not matched';
    } else {
        // console.log(this.user);
        this.register.registerusers(this.user).subscribe(data => {
          if (data.message) {
              alert('Account created successfully');
              window.location.reload() ;
          } else {
            this.errormsg = 'Username exist.' ;
          }
        });
    }
  }


  cityselected(value: string) {
      localStorage.setItem('city' , value );
      window.location.href = '../Movie' ;
  }
}
