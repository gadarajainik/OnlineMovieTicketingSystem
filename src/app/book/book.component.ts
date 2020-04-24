import { Component, OnInit, Output } from '@angular/core';
import { Theatre } from '../Theatre.model';
import { Movie } from '../movies/Movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  public theatre: Theatre;
  public movie: Movie;
  public timing: string;

  constructor(public router: Router) { }

  ngOnInit() {
    if (!(localStorage.getItem('movie') && localStorage.getItem('theatre') && localStorage.getItem('timing'))) {
      this.router.navigate(['../']);
    }
  }
}
