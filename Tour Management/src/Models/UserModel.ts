export interface IUser {
  ID: string;
  UNAME: string;
  EMAIL: string;
  UPASSWORD: string;
  isDeleted: number;
  UROLE:string,
  isEmailSent: number;
}

export interface Payload {
  SUB: string;
  UNAME: string;
  UROLE:string;
}
