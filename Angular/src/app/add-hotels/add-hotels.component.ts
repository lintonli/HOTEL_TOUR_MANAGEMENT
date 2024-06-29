import { Component, OnInit } from '@angular/core';
import { IHotel } from '../Models/hotels';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../Service/hotels.service';

@Component({
  selector: 'app-add-hotels',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-hotels.component.html',
  styleUrl: './add-hotels.component.css'
})
export class AddHotelsComponent implements OnInit {
hotels:IHotel[]=[]
form!:FormGroup
ID!:string
constructor(private data:HotelsService, private route:ActivatedRoute, private router:Router){}

onSubmit(){
if(this.form.valid){
  const hotelData: IHotel= this.form.value; 
  if(this.ID){
    this.data.addHotel(hotelData).subscribe(()=>{
      console.log('Hotel added successfully')
      this.router.navigate(['hotels'])
    })
  }else{
    this.data.updateHotel(this.ID,hotelData).subscribe(()=>{
      console.log('Hotel updated successfully')
      this.router.navigate(['hotels']);
    })
  }
}
}
ngOnInit(): void {
  this.ID=this.route.snapshot.paramMap.get('ID')!
  this.form = new FormGroup({
    name: new FormControl(null, Validators.required),
    image: new FormControl(null,Validators.required),
    location: new FormControl(null, Validators.required)
  })
  if(this.ID)(
    this.data.getHotel(this.ID).subscribe((hotel:IHotel)=>{
this.form.patchValue({
  name:hotel.Hotelname,
  image:hotel.Hotelimage,
  location:hotel.Hlocation
})
    })
  )
}
}
