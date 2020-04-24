import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movies/Movie.model';
import { Theatre } from 'src/app/Theatre.model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/seatselected.service';
import { Shows } from 'src/app/movies/shows/Shows.Model';

@Component({
  selector: 'app-seat-selection-data',
  templateUrl: './seat-selection-data.component.html',
  styleUrls: ['./seat-selection-data.component.css']
})
export class SeatSelectionDataComponent implements OnInit {
  public movie: Movie;
  public theatre: Theatre;
  public show: Shows;
  public seats: string;
  public total: string;
  constructor(public router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.currentseats.subscribe(message => this.seats = message);
    this.data.currenttotal.subscribe(total => this.total = total);
    if (localStorage.getItem('movie') && localStorage.getItem('theatre') && localStorage.getItem('timing')) {
      this.movie = JSON.parse(localStorage.getItem('movie'));
      this.theatre = JSON.parse(localStorage.getItem('theatre'));
      this.show = JSON.parse(localStorage.getItem('show'));
    } else {
      this.router.navigate(['../']);
    }
  }

  checkout() {
    this.router.navigate(['../Checkout'], { state: { data: [true] } });
  }
}
