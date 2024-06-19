
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

add(){
  this.onAdd.emit({
    Name:this.name,
    Image:this.image,
    Description:this.description,
    Destination:this.destination,
    Price:+this.price
  })
}
}
