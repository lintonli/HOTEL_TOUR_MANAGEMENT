import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TourServiceService } from '../Service/tour-service.service';
import { ITour } from '../Models/tours';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css',
})
export class AddToursComponent implements OnInit {
  form!: FormGroup;
  tours:ITour[]=[]
  constructor(private ts: TourServiceService, private fb: FormBuilder) {}

  onSubmit() {
    this.ts.addTour(this.form.value).subscribe(res=>{
      console.log(res)
    })
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      NAME: this.fb.control(null, Validators.required),
      IMAGE: this.fb.control(null, Validators.required),
      DESCRIPTION: this.fb.control(null, Validators.required),
      DESTINATION: this.fb.control(null, Validators.required),
      PRICE: this.fb.control(null, Validators.required),
    });
    
  }
}
