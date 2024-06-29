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
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,HeaderComponent],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css',
})
export class AddToursComponent implements OnInit {
  form!: FormGroup;
  tours: ITour[] = [];
  Id!: string;
  userId!:string
  constructor(
    private router: Router,
    private ts: TourServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    if (this.form.valid) {
      const tourData: ITour = this.form.value;
      if (this.Id) {
        this.ts.updateTour(this.Id, tourData).subscribe(() => {
          console.log('Tour updated succcessfully');
          this.router.navigate(['tours']);
        });

       
      } else {
       
        this.ts.addTour(this.form.value).subscribe((res) => {
          console.log(res);
          this.router.navigate(['tours']);
        });
      }
    }
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      const decode:any=jwtDecode(token)
      this.userId=decode.SUB
    }
    this.Id = this.route.snapshot.paramMap.get('Id')!;
    this.form = this.fb.group({
      Tourname: this.fb.control(null, Validators.required),
      Tourimage: this.fb.control(null, Validators.required),
      TDescription: this.fb.control(null, Validators.required),
      TDestination: this.fb.control(null, Validators.required),
      TPrice: this.fb.control(null, Validators.required),
    });

    if (this.Id) {
      this.ts.getTour(this.Id).subscribe((tour: ITour) => {
        this.form.patchValue({
          NAME: tour.Tourname,
          IMAGE: tour.Tourimage,
          DESCRIPTION: tour.TDescription,
          DESTINATION: tour.TDestination,
          PRICE: tour.TPrice,
        });
      });
    }
  }
}
