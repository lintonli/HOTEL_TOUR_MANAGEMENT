import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IHotel } from '../Models/hotels';
import { HotelsService } from '../Service/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';

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
constructor(private data:HotelsService, private route:ActivatedRoute, private router:Router){}
BOOK(ID:string){
  this.router.navigate(['booking', this.TourId,ID])
}
ngOnInit(): void {
this.TourId= this.route.snapshot.paramMap.get('TourId')!;
this.data.getHotelbyTour(this.TourId).subscribe(hotel=>{
  this.hotels=hotel
})
}
}
