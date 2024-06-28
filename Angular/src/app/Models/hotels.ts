export interface IHotel {
  ID: string;
  Hotelname: string;
  Hotelimage: string;
  Hlocation: string;
  TourId: string;
}
export interface HotelRequest {
  Hotelname: string;
  Hotelimage: string;
  Hlocation: string;
  TourId: string;
}
export interface HotelResponse{
  message:string
}
