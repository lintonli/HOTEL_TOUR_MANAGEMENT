import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayBookingComponent } from './display-booking/display-booking.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { DisplayToursComponent } from './display-tours/display-tours.component';
import { authGuard } from './Guards/auth.guard';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddToursComponent } from './add-tours/add-tours.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'bookings', component: DisplayBookingComponent },
  { path: 'hotels', component: DisplayHotelsComponent },
  { path: 'add-hotel/:ID', component: AddHotelsComponent },
  {
    path: 'hotels/:TourId',
    component: DisplayHotelsComponent,
    canActivate: [authGuard],
  },
  { path: 'tours', component: DisplayToursComponent, canActivate: [authGuard] },
  {
    path: 'add-tour/:Id',
    component: AddToursComponent,
    canActivate: [authGuard],
  },
  {
    path: 'booking/:tourId/:hotelId',
    component: AddBookingComponent,
    canActivate: [authGuard],
  },
];
