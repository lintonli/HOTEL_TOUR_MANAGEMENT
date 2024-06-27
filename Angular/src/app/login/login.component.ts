import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { IUser } from '../Models/users';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';

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
constructor(private data:AuthenticationService, private router:Router){}

onSubmit(){
if(this.form.valid){
 this.data.login(this.form.value).subscribe(res=>{
  localStorage.setItem('token',res.token)
  this.errorMessage = res.message
  if(res.token){
this.router.navigate([""])
  }
 },
 err=>{
console.log(err)
this.errorMessage=err.console.error.message;

  }
)
}
}
ngOnInit(): void {
  this.form= new FormGroup({
    EMAIL: new FormControl(null, Validators.required),
    PASSWORD: new FormControl(null, [Validators.required])
  })
}
}
