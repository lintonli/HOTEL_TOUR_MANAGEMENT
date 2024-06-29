import { Component, OnInit } from '@angular/core';
import { HotelRequest, IHotel } from '../Models/hotels';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../Service/hotels.service';
import { jwtDecode } from 'jwt-decode';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-hotels',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './add-hotels.component.html',
  styleUrl: './add-hotels.component.css',
})

export class AddHotelsComponent implements OnInit {
  hotels: IHotel[] = [];
  form!: FormGroup;
  TourId!: string; 
  hotelId!: string; 
  userId: string = '';

  constructor(
    private data: HotelsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decode: any = jwtDecode(token); 
      this.userId = decode.SUB;
    }

    this.TourId = this.route.snapshot.paramMap.get('TourId')!;
    this.hotelId = this.route.snapshot.paramMap.get('ID')!; 

    this.form = new FormGroup({
      Hotelname: new FormControl(null, Validators.required),
      Hotelimage: new FormControl(null, Validators.required),
      Hlocation: new FormControl(null, Validators.required),
    });

    if (this.hotelId) {
      
      this.data.getHotel(this.hotelId).subscribe((hotel: IHotel) => {
        this.form.patchValue({
          Hotelname: hotel.Hotelname,
          Hotelimage: hotel.Hotelimage,
          Hlocation: hotel.Hlocation,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const hotelData: IHotel = {
        ...this.form.value,
        TourId: this.TourId, 
      };

      if (this.hotelId) {
      
        this.data.updateHotel(this.hotelId, hotelData).subscribe(() => {
          console.log('Hotel updated successfully');
          this.router.navigate(['hotels', this.TourId]); 
        });
      } else {
       
        this.data.addHotel(hotelData).subscribe(() => {
          console.log('Hotel added successfully');
          this.router.navigate(['hotels', this.TourId]); 
        });
      }
    }
  }
}