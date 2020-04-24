import { Injectable } from '@angular/core';
import { Movie } from './movies/Movie.model';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class MovieselectedService {
  public movie: Movie;
  public city: string;
  public msg = 'Hello world';
  constructor() { }

  movieselected(smovie: Movie, scity: string) {
    this.movie = smovie;
    this.city = scity;
  }
}
