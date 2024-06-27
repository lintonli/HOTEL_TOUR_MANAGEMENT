 export interface IUser {
  ID: string;
  UNAME: string;
  EMAIL: string;
  UPASSWORD: string;
  ROLE: string;
}
export interface LoginRequest {
  EMAIL: string;
  UPASSWORD: string;
}
export interface LoginResponse{
message:string;
token:string
}
export interface RegisterRequest {
  UNAME: string;
  EMAIL: string;
  UPASSWORD: string;
}
export interface Registerresponse{
  message:string
}
