import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  book(username: string, showid: string, theatre: string , movie: string, seats: string, amount: number): Observable<any> {
    // alert(username);
    return this.http.post<HttpResponse<any>>('http://localhost:8000/book', {
      observe: 'response',
      bookuname: username,
      bookshowid: showid,
      booktheatrename: theatre,
      bookmoviename: movie,
      bookseats: seats,
      bookamount: amount
    });
  }
}
