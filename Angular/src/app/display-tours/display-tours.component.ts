import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { TourServiceService } from '../Service/tour-service.service';
import { ITour } from '../Models/tours';
import { DataService } from '../services/data.service';
import { IBooking } from '../Models/bookings';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-display-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-tours.component.html',
  styleUrl: './display-tours.component.css',
})
export class DisplayToursComponent implements OnInit {

  tours!:ITour[]
  booking!:IBooking[]
  role:string=''
  constructor(private ts:TourServiceService, private bs:DataService, private router:Router){}

  ngOnInit(): void {
  //  this.tours= this.ts.getTours()
  const token = localStorage.getItem('token')
  if(token){
    const decode:any = jwtDecode(token)
    this.role=decode.UROLE
  }
  this.ts.getTours().subscribe(tours=>{
    this.tours= tours
  })
  }

  book(ID:string){
    this.router.navigate(['hotels', ID])
  }
  editTour(Id:string){
    this.router.navigate(['add-tour', Id])
  }
  deleteTour(Id:string){
    this.ts.deleteTour(Id).subscribe(()=>{
      console.log('Tour deleted successfully')
      this.tours= this.tours.filter(t=>t.Id!==Id)
    })
  }
}
