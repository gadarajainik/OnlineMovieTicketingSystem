import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie.model';
import { GetmoviesService } from 'src/app/getmovies.service';
import { MovieselectedService } from 'src/app/movieselected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[];
  public smovie: Movie;

  constructor(private router: Router, private movielist: GetmoviesService , private selectedmovie: MovieselectedService) { }

  ngOnInit() {
    this.selectedmovie.city = localStorage.getItem('city');
    this.movielist.getmovielist(localStorage.getItem('city')).subscribe(mlist => {
      this.movies = mlist ;
      // alert(mlist[0].name);
    } );
    // alert( this.movies);
  }
  OnSelectedMovie(movie: Movie) {
      localStorage.setItem('movie', JSON.stringify(movie) );
      this.router.navigate(['../Movie/shows'] /* {state: {data: [this.smovie, 'Nadiad' ]}}*/);
  }
 }
