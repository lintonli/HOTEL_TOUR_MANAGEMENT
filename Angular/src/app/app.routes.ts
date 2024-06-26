import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayBookingComponent } from './display-booking/display-booking.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { DisplayToursComponent } from './display-tours/display-tours.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:SignupComponent},
    {path: 'bookings', component:DisplayBookingComponent},
    {path:'hotels', component:DisplayHotelsComponent},
    {path:'tours', component:DisplayToursComponent, canActivate:[authGuard]}
];
