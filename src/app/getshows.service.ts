import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry,   map, catchError, filter, scan } from 'rxjs/operators';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetshowsService {

  constructor(private http: HttpClient) {
  }

  getshows(mcity: string, mid: number): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getshows', {observe: 'response',
      city : mcity,
      movieid : mid
    });
  }
}
