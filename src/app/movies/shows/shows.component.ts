import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie.model';
import { MovieselectedService } from 'src/app/movieselected.service';
import { Router } from '@angular/router';
import { GetshowsService } from 'src/app/getshows.service';
import { Theatre } from 'src/app/Theatre.model';
import { Shows } from './Shows.Model';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  movie: Movie;
  theatres: Theatre[];
  movieshows = new Shows();
  constructor(private router: Router, private shows: GetshowsService) { }

  ngOnInit() {
    $('#dates a').click(function() {
      $('#dates div').removeClass(' bg-dark text-white');
      $('#dates div a').addClass('text-dark');
      $(this).removeClass('text-dark');
      $(this).addClass('text-white');
      $(this).parent('div').addClass('bg-dark text-white');
    });
    if (localStorage.getItem('movie')) {
      this.movie = JSON.parse(localStorage.getItem('movie'));
      this.shows.getshows(localStorage.getItem('city'), this.movie.mid).subscribe(data => {
        this.theatres = data.t;
        this.movieshows = data.s;
      });
    } else {
      this.router.navigate(['../']);
    }
  }

  selectedshow(stheatre: Theatre, sshow: Shows) {
    localStorage.setItem('theatre', JSON.stringify(stheatre));
    this.movie.imgurl = '../' + this.movie.imgurl;
    localStorage.setItem('movie', JSON.stringify(this.movie));
    localStorage.setItem('show', JSON.stringify(sshow));
    window.location.href = '../Book';
  }

}
