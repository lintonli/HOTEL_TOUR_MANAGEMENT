export interface IBooking {
  Id: string;
  userId: string;
  tourName:string
  tourId: string;
  hotelId: string;
  hotelName:string;
  bstartdate: string;
  benddate: string;
  bookingdate: string;
  bstatus: string;
}
export interface BookingRequest {
  userId: string;
  tourId: string;
  hotelId: string;
  bstartdate: string;
  benddate: string;
  bookingdate: string;
  
}
export interface BookingResponse{
  message:string
}