import { Component, OnInit } from '@angular/core';
import { Booking } from '../Booking.model';
import { Movie } from '../movies/Movie.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  movie: Movie;
  constructor() { }
  confirm: Booking;
  ngOnInit() {
    if (history.state.data) {
      this.confirm = history.state.data[0];
      this.movie = JSON.parse(localStorage.getItem('movie'));
    } else {
      window.location.href = '../Movie';
    }
  }

  ngOnDestory() {
    localStorage.removeItem('movie');
  }

}
