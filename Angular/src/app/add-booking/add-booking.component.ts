import { Component, OnInit } from '@angular/core';
import { IBooking } from '../Models/bookings';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent implements OnInit {
booking:IBooking[]=[]
form!: FormGroup
constructor(private data:DataService){}
onSubmit(){
  if(this.form.valid){
    const newBooking:IBooking={
      Id:(this.booking.length).toString(),
      ...this.form.value
    }
    this.data.addBooking(newBooking)
  }
}
ngOnInit(): void {
  this.form = new FormGroup({
    sdate: new FormControl(null, Validators.required),
    edate: new FormControl(null, Validators.required),
    bdate: new FormControl(null, Validators.required)
  })
}
}
