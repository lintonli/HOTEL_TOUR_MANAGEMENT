import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IHotel } from '../Models/hotels';
import { HotelsService } from '../Service/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-display-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-hotels.component.html',
  styleUrl: './display-hotels.component.css'
})
export class DisplayHotelsComponent implements OnInit{
  hotels:IHotel[]=[]
  TourId:string=""
  role:string=''
constructor(private data:HotelsService, private route:ActivatedRoute, private router:Router){}
BOOK(ID:string){
  this.router.navigate(['booking', this.TourId,ID])
}
ngOnInit(): void {
const token = localStorage.getItem('token')
if(token){
  const decode:any = jwtDecode(token)
  this.role=decode.UROLE
}

this.TourId= this.route.snapshot.paramMap.get('TourId')!;
this.data.getHotelbyTour(this.TourId).subscribe(hotel=>{
  this.hotels=hotel
})
}
editHotel(ID:string){
  return this.router.navigate(['add-hotel',ID])
}
deleteHotel(ID:string){
this.data.deleteHotel(ID).subscribe(()=>{
  console.log('Hotel deleted successfully')
  this.hotels=this.hotels.filter(h=>h.ID !==ID);
})
}
}
