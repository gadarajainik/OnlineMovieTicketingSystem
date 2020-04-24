import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private seats = new BehaviorSubject('');
  private total = new BehaviorSubject('0');
  currentseats = this.seats.asObservable();
  currenttotal = this.total.asObservable();
  constructor() { }

  changeseats(message: string) {
    this.seats.next(message);
  }
  changetotal(total: string) {
    this.total.next(total);
  }

}
