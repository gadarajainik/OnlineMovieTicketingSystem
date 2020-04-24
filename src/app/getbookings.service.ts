import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetbookingsService {

  constructor(private http: HttpClient) { }

  getbookings(username: string): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getbookings', {observe: 'response',
      uname: username
    });
  }
}
