import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  form!:FormGroup
  constructor(private data:AuthenticationService,private router:Router){}
ngOnInit(): void {
  this.form = new FormGroup({
    NAME: new FormControl(null, Validators.required),
    EMAIL: new FormControl(null, Validators.required),
    PASSWORD: new FormControl(null, Validators.required)
  })
}
onSubmit(){
this.data.register(this.form.value).subscribe(res=>{
  console.log(res.message)
this.router.navigate(['login']);
})
}
}
