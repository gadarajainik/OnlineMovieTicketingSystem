import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/seatselected.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-seat-matrix',
  templateUrl: './seat-matrix.component.html',
  styleUrls: ['./seat-matrix.component.css']
})
export class SeatMatrixComponent implements OnInit {
  private total: number;
  public matrix: string[][];
  seats: string[];
  ticketprice: number;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.matrix = JSON.parse(localStorage.getItem('show')).seats;
    this.ticketprice = JSON.parse(localStorage.getItem('show')).price;
    this.seats = [];
    this.total = 0;
  }
  seatselected($event, seat: string): void {
    // alert(seat);
    if (this.seats.length <= 5 || this.seats.includes(seat)) {
      if (this.seats.includes(seat)) {
        this.total = this.total - this.ticketprice;
        // tslint:disable-next-line: only-arrow-functions
        this.seats = this.seats.filter(function(value, index, arr) {

          return value !== seat;

        });
      } else {
        this.seats.push(seat);
        this.total = this.total + this.ticketprice;
      }

      // this.seats.push('a1');
      // this.total = this.total + price;
      this.data.changetotal(this.total.toString());
      this.data.changeseats(this.seats.toString());
      const s = $event.target;
      $(s).toggleClass('seatcolortoggle');
      // $(s).attr('disabled', true);
    }
  }


}
