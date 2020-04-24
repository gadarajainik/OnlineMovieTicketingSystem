import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from 'src/app/getmovies.service';
import { Movie } from 'src/app/movies/Movie.model';
import { ManagemovieService } from '../managemovie.service';

@Component({
  selector: 'app-managemovies',
  templateUrl: './managemovies.component.html',
  styleUrls: ['./managemovies.component.css']
})
export class ManagemoviesComponent implements OnInit {
  public cities = ['Ahmedabad', 'Anand', 'Nadiad', 'Rajkot'];
  constructor(private movielist: GetmoviesService, private managemovie: ManagemovieService) { }
  movies: Movie[];
  public mid = 0;
  public name = '';
  public imgurl = '';
  public description = '';
  public duration = '';
  public released = '';
  public mov = new Movie();
  public city: string;
  ngOnInit() {
    this.movielist.getallmovielist().subscribe(data => {
      this.movies = data;
    });
  }

  addmovie() {
    this.mov.mid = this.mid;
    alert(this.mov.mid);
    this.mov.name = this.name;
    this.mov.imgurl = this.imgurl;
    this.mov.description = this.description;
    this.mov.duration = this.duration;
    this.mov.released = this.released;
    this.managemovie.addmovie(this.mov).subscribe(data => {
      if (data.message) {
        alert('Movie Added Successfully');
        window.location.reload();
      } else {
        alert('Somethings wrong');
      }
    });
  }


  deletemovie(m: Movie) {
    // alert(this.city);
    // this.delmovie.deletemovie(m.mid).subscribe(data =>  {

    // });
  }

  updatemovie(m: Movie) {
    // alert(this.city);
    this.mov = m;
  }

}
