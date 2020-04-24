import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { BookComponent } from './book/book.component';
import { OffersComponent } from './offers/offers.component';
import { ShowsComponent } from './movies/shows/shows.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EditaccountComponent } from './myaccount/editaccount/editaccount.component';
import { AdminComponent } from './admin/admin.component';
import { ManageshowsComponent } from './admin/manageshows/manageshows.component';
import { ManagemoviesComponent } from './admin/managemovies/managemovies.component';
import { ManagetheatresComponent } from './admin/managetheatres/managetheatres.component';


const routes: Routes = [
  { path: 'Movie', component: MoviesComponent},
  { path: 'Checkout', component: CheckoutComponent},
  { path: 'Book', component: BookComponent},
  { path: 'Offers', component: OffersComponent},
  { path: 'Mybookings', component: MybookingsComponent},
  { path: 'Myaccount', component: MyaccountComponent},
  { path: 'Admin', component: AdminComponent},
  { path: 'Admin/ManageShows', component: ManageshowsComponent},
  { path: 'Admin/ManageMovies', component: ManagemoviesComponent},
  { path: 'Admin/ManageTheatres', component: ManagetheatresComponent},
  { path: 'Myaccount/edit', component: EditaccountComponent},
  { path: 'Movie/shows', component: ShowsComponent},
  { path: 'Confirmation', component: ConfirmationComponent},
  { path: '', redirectTo: '/Movie', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
