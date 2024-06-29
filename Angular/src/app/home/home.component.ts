import { Component, } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DisplayToursComponent } from '../display-tours/display-tours.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DisplayToursComponent,HeaderComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  }


