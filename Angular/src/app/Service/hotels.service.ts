import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelRequest, HotelResponse, IHotel } from '../Models/hotels';
import { Observable } from 'rxjs';
import { TourRequest } from '../Models/tours';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  private readonly Base_Url = ' http://localhost:4001/hotels/';
  constructor(private http: HttpClient) {}

addHotel(newHotel:HotelRequest):Observable<HotelResponse>{
  return this.http.post<HotelResponse>(this.Base_Url, newHotel)
}
getHotels():Observable<IHotel[]>{
  return this.http.get<IHotel[]>(this.Base_Url)
}
getHotel(ID:string):Observable<IHotel>{
  return this.http.get<IHotel>(this.Base_Url + ID)
}
getHotelbyTour(TourId:string):Observable<IHotel[]>{
  return this.http.get<IHotel[]>(`${this.Base_Url}?TourId=${TourId}`)
}
deleteHotel(ID:string):Observable<HotelResponse>{
  return this.http.delete<HotelResponse>(this.Base_Url + ID)
}
updateHotel(ID:string, updatedHotel:HotelRequest):Observable<HotelResponse>{
  return this.http.patch<HotelResponse>(this.Base_Url + ID, updatedHotel)
}

}

