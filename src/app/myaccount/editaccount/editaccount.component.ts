import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent implements OnInit {
  errormsg: string;
  disabled = true;
  username: string;
  fullname: string;
  password: string;
  repassword: string;
  email: string;
  mobile: number;
  user = new User();
  constructor(private reg: RegisterService) {
    if (history.state.data) {
      this.errormsg = '';
      this.user = history.state.data[0];
      this.repassword = '';
      this.password = '';
    } else {
      window.location.href = '../Myaccount';
    }
  }

  ngOnInit() {

  }


  updateuser() {
    // alert('hiii');
    if (this.password === this.repassword) {
      this.user.password = this.password;
      this.reg.updateaccount(this.user).subscribe(data => {
        if (data.status) {
            window.location.href = '../Myaccount';
        } else {
          alert('Something went wrong while updating data....');
          window.location.href = '../Myaccount';
        }
      });
    } else {
      this.errormsg = 'Passwords doesnt match.';
    }

  }

}
