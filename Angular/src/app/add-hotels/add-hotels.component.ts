import { Component, OnInit } from '@angular/core';
import { IHotel } from '../Models/hotels';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
constructor(private data:DataService){}

onSubmit(){
if(this.form.valid){
  const newHotel:IHotel ={
    ID:(this.hotels.length + 1).toString(),
    ...this.form.value
  };
  this.data.addHotel(newHotel)
}
}
ngOnInit(): void {
  this.form = new FormGroup({
    name: new FormControl(null, Validators.required),
    image: new FormControl(null,Validators.required),
    location: new FormControl(null, Validators.required)
  })
}
}
