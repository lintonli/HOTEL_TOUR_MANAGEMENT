import { Injectable } from '@angular/core';
import { ITour, TourRequest, TourResponse } from '../Models/tours';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourServiceService {
  private readonly Base_Url = 'http://localhost:4001/tours/';
  constructor(private http:HttpClient) {}
  

  addTour(newTour: TourRequest): Observable<TourResponse> {
  
    return this.http.post<TourResponse>(this.Base_Url,newTour)
  }

  getTours(): Observable<ITour[]> {
    return this.http.get<ITour[]>(this.Base_Url)
  }
  getTour(Id: string):Observable<ITour> {
    return this.http.get<ITour>(this.Base_Url + Id)
  }
  deleteTour(Id: string):Observable<TourResponse> {
    return this.http.delete<TourResponse>(this.Base_Url + Id);
  }
  updateTour(Id: string, updatedTour: TourRequest):Observable<TourResponse> {
    return this.http.patch<TourResponse>(this.Base_Url + Id, updatedTour)
}
}
