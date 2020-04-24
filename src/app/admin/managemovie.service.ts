import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Movie } from '../movies/Movie.model';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ManagemovieService {
  constructor(private http: HttpClient) {
  }

  deletemovie(movieid: number): Observable<any> {
    return this.http.delete<HttpResponse<any>>('http://localhost:8000/deletemovie/' + movieid);
  }

  addmovie(movie: Movie): Observable<any> {
    alert(movie.mid);
    return this.http.post<HttpResponse<any>>('http://localhost:8000/addmovie', movie, httpOptions);
  }
}
