import { Component, OnInit } from '@angular/core';
import { IBooking } from '../Models/bookings';
import { BookingService } from '../Service/booking.service';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-display-booking',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './display-booking.component.html',
  styleUrl: './display-booking.component.css'
})
export class DisplayBookingComponent implements OnInit{
bookings:IBooking[]=[]
role:string=''
constructor(private data:BookingService, private router:Router){}

ngOnInit(): void {
  const token= localStorage.getItem('token')
  if(token){
    const decode:any= jwtDecode(token)
    this.role=decode.UROLE
  }
  this.data.getBooking().subscribe((booking)=>{
    this.bookings=booking
  })
}
editBooking(Id:string){
this.router.navigate(['add-booking', Id])
}
deleteBooking(Id:string){
  this.data.deleteBooking(Id).subscribe(()=>{
    console.log('Booking deleted successfully')
    this.bookings= this.bookings.filter(b=>b.Id!==Id);
  })
}
}
