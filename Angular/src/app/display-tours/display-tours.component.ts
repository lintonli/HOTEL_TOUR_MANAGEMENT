import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-tours.component.html',
  styleUrl: './display-tours.component.css',
})
export class DisplayToursComponent {
  @Input() tour: {
    Name: string;
    Image: string;
    Description: string;
    Destination: string;
    Price: number;
  }[] = [];

  @Output() onDelete:EventEmitter<{id:number}>= new EventEmitter()
  deleteTour(i:number){
this.onDelete.emit({id:i})
console.log("deleted");

  }
}
