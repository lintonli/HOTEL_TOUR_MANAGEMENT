import { Injectable } from '@angular/core';
import { ITour } from '../Models/tours';

@Injectable({
  providedIn: 'root',
})
export class TourServiceService {
  constructor() {}
  private tours: ITour[] = [
    {
      ID: "1",
      Name: 'Bonfire Adventures',
      Image:
        'https://cdn.pixabay.com/photo/2023/06/21/17/09/savannah-8079856_640.jpg',
      Description: 'The best tour company',
      Destination: 'Maasai-Mara',
      Price: 33000,
    },
    {
      ID: "1",
      Name: 'Bonfire Adventures',
      Image:
        'https://cdn.pixabay.com/photo/2023/06/21/17/09/savannah-8079856_640.jpg',
      Description: 'The best tour company',
      Destination: 'Maasai-Mara',
      Price: 33000,
    },
    {
      ID: "1",
      Name: 'Bonfire Adventures',
      Image:
        'https://cdn.pixabay.com/photo/2023/06/21/17/09/savannah-8079856_640.jpg',
      Description: 'The best tour company',
      Destination: 'Maasai-Mara',
      Price: 33000,
    },
  ];


  addTour(newTour:ITour){
    this.tours.push(newTour)
  }

  getTours(){
    return this.tours;
  }
  getTour(id:string){
    return this.tours.find(x=>x.ID===id);
  }
  deleteTour(id:string){
    const index = this.tours.findIndex(x=>x.ID ===id)
    if(index>0){
      this.tours.splice(index,1)
    }
  }
  updateTour(id:string, updatedTour:ITour){
    const index = this.tours.findIndex((x) => x.ID === id);
    if (index > 0) {
      this.tours[index]=updatedTour
    }
  }
}
