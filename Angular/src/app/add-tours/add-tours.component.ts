
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TourServiceService } from '../Service/tour-service.service';
import { ITour } from '../Models/tours';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css'
})
export class AddToursComponent {
name=''
image=''
description=''
destination=''
price=''

@Output() onAdd:EventEmitter<{Name:string, Image:string,Description:string,Destination:string,Price:number}>= new EventEmitter()

// add(){
//   this.onAdd.emit({
//     Name:this.name,
//     Image:this.image,
//     Description:this.description,
//     Destination:this.destination,
//     Price:+this.price
//   })
// }
constructor(private ts:TourServiceService){}
//models
    Name=''
    Image=''
    Description=''
    Destination=''
    Price=''


  addTour(){
    let tour:ITour={
      ID:this.ts.getTours().length +1,
      Name:this.name,
      Image:this.image,
      Description:this.description,
      Destination:this.destination,
      Price:+this.price
    }
    this.ts.addTour(tour)
  }
}
