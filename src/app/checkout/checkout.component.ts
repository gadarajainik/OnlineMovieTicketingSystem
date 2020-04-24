import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theatre } from '../Theatre.model';
import { Movie } from '../movies/Movie.model';
import { DataService } from '../seatselected.service';
import { BookService } from '../book.service';
import { Shows } from '../movies/shows/Shows.Model';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  theatre: Theatre;
  movie: Movie;
  show: Shows;
  isvaliduserdetails = false;
  public usermobile ;
  public useremail = '';
  seats: string;
  total: number;
  gst: number;
  numberoftickets: number;
  convinencefees: number;
  internethandlingfees: number;
  grandtotal: number;
  constructor(private router: Router, private data: DataService, private goahead: BookService) { }

  ngOnInit() {
    // Start from fetching user details like email and number
    if (history.state.data) {
      $(document).ready(() => {

        $('#paymentdetailbtn').click(($event) => {
          const self = $event.target;
          $(self).toggleClass('checkout_details_divs');
          $('#paymentdetaildiv').slideToggle();
        });
      });
      this.movie = JSON.parse(localStorage.getItem('movie'));
      this.theatre = JSON.parse(localStorage.getItem('theatre'));
      this.show = JSON.parse(localStorage.getItem('show'));
      this.data.currentseats.subscribe(message => this.seats = message);
      this.data.currenttotal.subscribe(total => this.total = parseInt(total, 10));
      this.numberoftickets = this.seats.split(',').length;
      this.gst = this.total * 0.18;
      this.convinencefees = this.total * 0.1;
      this.internethandlingfees = this.gst + this.convinencefees;
      this.grandtotal = (this.total + this.gst + this.convinencefees);
      // if (history.state.data) {
      //   this.theatre = history.state.data[0];
      //   this.movie = history.state.data[1];
      //   this.timing = history.state.data[2];
      //   this.seats = history.state.data[3];
      // } else {
      //   this.router.navigate(['../Book']);
      // }
    } else {
      window.location.href = '../Book';
    }
  }
  payment_option($event) {
    const d = '#' + $event.target.id + 'section';
    // alert( d );
    $('#payment_options button').css('background-color', '#CAC8C8');
    const I = '#' + $event.target.id;
    // alert( I );
    $(I).css('background-color', 'white');
    $('#paymentsections > div').css('display', 'none');
    $(d).css('display', 'inline');
  }

  onContinue() {
    this.isvaliduserdetails = true;
    $('#paymentdetailbtn').toggleClass('checkout_details_divs');
    $('#paymentdetaildiv').slideToggle();
  }

  cardpayment() {
  }

  book() {
    if (localStorage.getItem('username')) {
      // alert(localStorage.getItem('username'));
      this.goahead.book(localStorage.getItem('username'), this.show.showid,
      this.theatre.theatrename, this.movie.name, this.seats, this.grandtotal).subscribe
        (msg => {
          if (msg.status) {
            localStorage.removeItem('show');
            localStorage.removeItem('theatre');
            this.router.navigate(['../Confirmation'], { state: { data: [ msg.bookingdetails]}});
          } else {
            alert('Booking Failed');
            window.location.href = '../Book';
          }
        });
    } else {
      alert('Please Login...');
    }
  }
}
