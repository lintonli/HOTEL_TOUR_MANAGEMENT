import { Component, OnInit } from '@angular/core';
import { BookingRequest, IBooking } from '../Models/bookings';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { BookingService } from '../Service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HeaderComponent],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent implements OnInit {
booking:IBooking[]=[]
form!: FormGroup
tourId!:string
hotelId!:string
userId:string=''
Id!:string
constructor(private data:BookingService, private route:ActivatedRoute,private router:Router){}
onSubmit(){
  if(this.form.valid){
    const newBooking: BookingRequest = {
      tourId: this.tourId,
      hotelId: this.hotelId,
      userId: this.userId,
      bstartdate: this.form.get('bstartdate')?.value.toString(),
      benddate: this.form.get('benddate')?.value.toString(),
      bookingdate: this.form.get('bookingdate')?.value.toString(),
    };
    if(this.Id){
    
      this.data.updateBooking(this.Id, newBooking).subscribe(() => {
        console.log('Booking updated successfully');
        this.router.navigate(['']);
      });
    }else{
        this.data.addBooking(newBooking).subscribe(() => {
          console.log('Booking added successfully');
          this.router.navigate(['']);
        });

    }
  }
}
ngOnInit(): void {
  this.tourId=this.route.snapshot.paramMap.get('tourId')!;
this.hotelId=this.route.snapshot.paramMap.get('hotelId')!;
this.Id= this.route.snapshot.paramMap.get('Id')!;
const token = localStorage.getItem('token')
if(token){
  const decode:any= jwtDecode(token)
this.userId= decode.SUB
console.log(this.userId)
}
  this.form = new FormGroup({
    bstartdate: new FormControl(null, Validators.required),
    benddate: new FormControl(null, Validators.required),
    bookingdate: new FormControl(null, Validators.required)
  })
  if(this.Id){
    this.data.getBookingId(this.Id).subscribe(booking=>{
      this.form.patchValue({
        bstartdate:booking.bstartdate,
        benddate:booking.benddate,
        bookingdate:booking.bookingdate
      })
    })
  }
}
}
