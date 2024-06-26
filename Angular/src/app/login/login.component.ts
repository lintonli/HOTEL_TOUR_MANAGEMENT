import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { IUser } from '../Models/users';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
// username=''
// password=''
users:IUser[]=[]
form!:FormGroup
errorMessage:string=''
constructor(private data:DataService){}

onSubmit(){
if(this.form.valid){
  const{UNAME,UPASSWORD}= this.form.value
  if(this.data.login(UNAME,UPASSWORD)){
    console.log('user logged in success')
  }
  this.errorMessage='invalid user credentials'
}
}
ngOnInit(): void {
  this.form= new FormGroup({
    UNAME: new FormControl(null, Validators.required),
    UPASSWORD: new FormControl(null, [Validators.required])
  })
}
}
