import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ITour } from './Models/tours';
import { AddToursComponent } from './add-tours/add-tours.component';
import { DisplayToursComponent } from './display-tours/display-tours.component';
import { TourServiceService } from './Service/tour-service.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { DisplayBookingComponent } from './display-booking/display-booking.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KIKWETU TOURS';
//   tours:{Name:string, Image:string,Description:string,Destination:string,Price:number}[]=[]
//   addTours(eventData:{Name:string, Image:string,Description:string,Destination:string,Price:number}){
// this.tours.push(eventData)
//   }
// deleteTour(eventData:{id:number}){
// this.tours.splice(eventData.id, 1)
// }
}
