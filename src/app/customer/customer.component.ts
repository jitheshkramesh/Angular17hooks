import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerInterface } from '../interfaces/customer.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { customerService } from '../services/customer.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})

export class CustomerComponent implements OnDestroy {

  customerForm: FormGroup;
  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  emailFormControl: FormControl;
  zipcodeFormControl: FormControl;
  phoneFormControl: FormControl;
  birthDateFormControl: FormControl;
  cityFormControl: FormControl;
  stateFormControl: FormControl;
  //countryFormControl: FormControl;

  subscription: Subscription;
  invalidData: boolean = false;

  countries: string[] = ['USA', 'UK', 'Canada', 'India'];
  default: string = 'India';

  constructor(private fb: FormBuilder, private service: customerService, private router: Router, private toastr: ToastrService) {
    //this.customerForm.controls['country'].setValue(this.default, {onlySelf: true});
    this.customerForm = new FormGroup({
      country: new FormControl(null)
    });
    this.customerForm.controls['country'].setValue(this.default, { onlySelf: true });
  }

  ngOnInit(): void {

    this.firstNameFormControl = new FormControl(null, [Validators.required]);
    this.lastNameFormControl = new FormControl(null, [Validators.required]);
    this.emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
    this.zipcodeFormControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);
    this.phoneFormControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);
    this.birthDateFormControl = new FormControl(null, [Validators.required]);
    this.cityFormControl = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    this.stateFormControl = new FormControl(null, [Validators.required, Validators.minLength(2)]);
    //this.countryFormControl = new FormControl(null, [Validators.required, Validators.minLength(2)]);

    this.customerForm = new FormGroup({
      'countryFormControl': new FormControl(null)
    });

    this.customerForm.patchValue({
      'countryFormControl': this.default
    });

    this.customerForm = this.fb.group({
      email: this.emailFormControl,
      firstName: this.firstNameFormControl,
      lastName: this.lastNameFormControl,
      city: this.cityFormControl,
      state: this.stateFormControl,
      zipcode: this.zipcodeFormControl,
      country: this.customerForm.controls['country'],
      phone: this.phoneFormControl,
      birthDate: this.birthDateFormControl
    })
  }

  onSubmitForm() {
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.subscription = this.service.customerCreation(this.customerForm.value).subscribe(res => {
        console.log('Created successfully');
        this.toastr.success('Customer', 'Created successfully');
        //this.resetForm(); 
      })
    } else {
      console.log('Error');
      this.toastr.error('Customer', 'Error');
      this.invalidData = true;
    }

  }

  resetForm() {
    this.customerForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

}
