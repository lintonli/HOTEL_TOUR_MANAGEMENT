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

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css',
})
export class AddToursComponent implements OnInit {
  form!: FormGroup;
  tours: ITour[] = [];
  Id!: string;
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

        // this.ts.addTour(this.form.value).subscribe((res) => {
        //   console.log(res);
        //   this.router.navigate(['tours'])
        // });
      } else {
        // this.ts.updateTour(this.Id, tourData).subscribe(()=>{
        //   console.log("Tour updated succcessfully")
        //   this.router.navigate(['tours']);
        // })
        this.ts.addTour(this.form.value).subscribe((res) => {
          console.log(res);
          this.router.navigate(['tours']);
        });
      }
    }
  }
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('Id')!;
    this.form = this.fb.group({
      NAME: this.fb.control(null, Validators.required),
      IMAGE: this.fb.control(null, Validators.required),
      DESCRIPTION: this.fb.control(null, Validators.required),
      DESTINATION: this.fb.control(null, Validators.required),
      PRICE: this.fb.control(null, Validators.required),
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
