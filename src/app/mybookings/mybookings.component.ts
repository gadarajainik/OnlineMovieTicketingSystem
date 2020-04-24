import { Component, OnInit } from '@angular/core';
import { GetbookingsService } from '../getbookings.service';
import { Booking } from '../Booking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  public bookings: Booking[] = [];
  constructor(private mybookings: GetbookingsService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.mybookings.getbookings(localStorage.getItem('username')).subscribe(data => {
        this.bookings = data;
        console.log(this.bookings);
      });
    } else {
      this.router.navigate(['../Movie']);
    }
  }

}
