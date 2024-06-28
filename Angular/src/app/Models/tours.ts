export interface ITour {
  Id: string;
  Tourname: string;
  Tourimage: string;
  TDescription: string;
  TDestination: string;
  TPrice: number;
}
export interface TourRequest {
  Tourname: string;
  Tourimage: string;
  TDescription: string;
  TDestination: string;
  TPrice: number;
}
export interface TourResponse {
  message: string;
}
