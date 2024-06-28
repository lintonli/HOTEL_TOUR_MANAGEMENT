import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingRequest, BookingResponse, IBooking } from '../Models/bookings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly Base_Url = 'http://localhost:4001/booking';
  constructor( private http: HttpClient) {}

  addBooking(newBooking:BookingRequest):Observable<BookingResponse>{
    return this.http.post<BookingResponse>(this.Base_Url, newBooking)
  }
  deleteBooking(Id:string):Observable<BookingResponse>{
    return this.http.delete<BookingResponse>(this.Base_Url + Id)
  }
  getBooking():Observable<IBooking[]>{
    return this.http.get<IBooking[]>(this.Base_Url)
  }
  updateBooking(Id:string,updatedBooking:BookingRequest):Observable<BookingResponse>{
    return this.http.patch<BookingResponse>(this.Base_Url + Id, updatedBooking)
  }
}
