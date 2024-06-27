import { Injectable } from '@angular/core';
import { IUser, LoginRequest, LoginResponse, RegisterRequest, Registerresponse } from '../Models/users';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLoggedin: boolean = false;
  // private users: IUser[] = [{

  //     ID: '1',
  //     UNAME: 'ADMIN',
  //     UPASSWORD: 'ADMIN',
  //     EMAIL: 'lintonli162@gmail.com',
  //     ROLE: 'ADMIN',

  // }];
  private readonly Base_Url = 'http://localhost:4001/users/';
  constructor(private router: Router, private http: HttpClient) {}

  login(user:LoginRequest):Observable<LoginResponse>{

    return this.http.post<LoginResponse>(this.Base_Url + "login",user)
  
  }
  register(newUser:RegisterRequest):Observable<Registerresponse>{
    return this.http.post<Registerresponse>(this.Base_Url + "register", newUser)
  }
  showLogin(){
    const token= localStorage.getItem('token') as string
    if(token){
      this.isLoggedin=true
return true;
    }
    this.isLoggedin=false
    return false;
  }
  logout(){
    localStorage.removeItem;
  }
}
