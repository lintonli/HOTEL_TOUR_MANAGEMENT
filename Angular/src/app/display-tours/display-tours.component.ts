import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { TourServiceService } from '../Service/tour-service.service';
import { ITour } from '../Models/tours';
import { DataService } from '../services/data.service';
import { IBooking } from '../Models/bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-tours.component.html',
  styleUrl: './display-tours.component.css',
})
export class DisplayToursComponent implements OnInit {
//   @Input() tour: {
//     Name: string;
//     Image: string;
//     Description: string;
//     Destination: string;
//     Price: number;
//   }[] = [];

//   @Output() onDelete:EventEmitter<{id:number}>= new EventEmitter()
//   deleteTour(i:number){
// this.onDelete.emit({id:i})
// console.log("deleted");

  // }
  tours!:ITour[]
  booking!:IBooking[]
  constructor(private ts:TourServiceService, private bs:DataService, private router:Router){}

  ngOnInit(): void {
   this.tours= this.ts.getTours()
  }

  book(ID:string){
    this.router.navigate(['hotels'])
  }
}
