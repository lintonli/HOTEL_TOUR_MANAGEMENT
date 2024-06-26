import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IHotel } from '../Models/hotels';

@Component({
  selector: 'app-display-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-hotels.component.html',
  styleUrl: './display-hotels.component.css'
})
export class DisplayHotelsComponent implements OnInit{
  hotels:IHotel[]=[]
constructor(private data:DataService){}
deleteHotel(ID:string){
  this.data.deleteHotel(ID)
}
ngOnInit(): void {
this.hotels=this.data.getHotels()
}
}
