import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToursComponent } from './add-tours/add-tours.component';
import { DisplayToursComponent } from './display-tours/display-tours.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddToursComponent,DisplayToursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KIKWETU TOURS';
  tours:{Name:string, Image:string,Description:string,Destination:string,Price:number}[]=[]
  addTours(eventData:{Name:string, Image:string,Description:string,Destination:string,Price:number}){
this.tours.push(eventData)
  }
deleteTour(eventData:{id:number}){
this.tours.splice(eventData.id, 1)
}
}
