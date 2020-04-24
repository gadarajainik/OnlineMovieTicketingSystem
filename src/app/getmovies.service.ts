import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {
  constructor(private http: HttpClient) {
  }

  getmovielist(mcity: string): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/movielist', {
      observe: 'response',
      city: mcity
    });
  }
  getallmovielist(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/allmovielist', {
      observe: 'response'
    });
  }
}
