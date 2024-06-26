import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { TourServiceService } from '../Service/tour-service.service';
import { ITour } from '../Models/tours';

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
  constructor(private ts:TourServiceService){}

  ngOnInit(): void {
   this.tours= this.ts.getTours()
  }

  deleteTour(ID:number){
    this.ts.deleteTour(ID)
  }
}
