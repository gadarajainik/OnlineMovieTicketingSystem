import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { OffersComponent } from './offers/offers.component';
import { SeatSelectionDataComponent } from './book/seat-selection-data/seat-selection-data.component';
import { SeatMatrixComponent } from './book/seat-matrix/seat-matrix.component';
import { CarouselComponent } from './movies/carousel/carousel.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ShowsComponent } from './movies/shows/shows.component';
import { SidebarComponent } from './movies/sidebar/sidebar.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DataService } from './seatselected.service';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EditaccountComponent } from './myaccount/editaccount/editaccount.component';
import { AdminComponent } from './admin/admin.component';
import { ManageshowsComponent } from './admin/manageshows/manageshows.component';
import { ManagemoviesComponent } from './admin/managemovies/managemovies.component';
import { ManagetheatresComponent } from './admin/managetheatres/managetheatres.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    MoviesComponent,
    OffersComponent,
    SeatSelectionDataComponent,
    SeatMatrixComponent,
    CarouselComponent,
    MovieListComponent,
    ShowsComponent,
    SidebarComponent,
    MyaccountComponent,
    MybookingsComponent,
    ConfirmationComponent,
    EditaccountComponent,
    AdminComponent,
    ManageshowsComponent,
    ManagemoviesComponent,
    ManagetheatresComponent
  ],
  imports: [
    NgbPopoverModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
