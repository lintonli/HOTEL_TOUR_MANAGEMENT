import { Injectable } from '@angular/core';
import { IHotel } from '../Models/hotels';
import { IUser } from '../Models/users';
import { IBooking } from '../Models/bookings';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private hotels: IHotel[] = [];
  // private users: IUser[] = [
  //   {
  //     ID: '1',
  //     UNAME: 'ADMIN',
  //     UPASSWORD: 'ADMIN',
  //     EMAIL: 'lintonli162@gmail.com',
  //     ROLE: 'ADMIN',
  //   },
  // ];
  private users:IUser[]=[]
  private bookings: IBooking[] = [];
  private isLoggedin: boolean = false;
  constructor(private router:Router) {}

  //hotels
  getHotels(): IHotel[] {
    return this.hotels;
  }
  addHotel(newHotel: IHotel) {
    this.hotels.push(newHotel);
  }
  getHotel(id: string) {
    return this.hotels.find((x) => x.ID === id);
  }
  updateHotel(id: string, updatedHotel: IHotel) {
    const index = this.hotels.findIndex((x) => x.ID === id);
    if (index > 0) {
      this.hotels[index] = updatedHotel;
    }
  }
  deleteHotel(id: string) {
    const index = this.hotels.findIndex((x) => x.ID === id);
    if (index > 0) {
      this.hotels.splice(index, 1);
    }
  }

  //bookings
  getBooking(): IBooking[] {
    return this.bookings;
  }
  addBooking(newbooking: IBooking) {
    this.bookings.push(newbooking);
  }
  deleteBooking(id: string) {
    const index = this.bookings.findIndex((x) => x.Id === id);
    if (index > 0) {
      this.bookings.splice(index, 1);
    }
  }
  
}
