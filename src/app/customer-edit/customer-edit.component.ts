import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Countries } from '../services/countries';
import { customerService } from '../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ICustomer } from '../interfaces/customer.interface';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent implements OnInit, OnDestroy {

  customerForm: FormGroup;
  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  emailFormControl: FormControl;
  zipcodeFormControl: FormControl;
  phoneFormControl: FormControl;
  birthDateFormControl: FormControl;
  cityFormControl: FormControl;
  stateFormControl: FormControl;
  gender: FormControl;
  //countryFormControl: FormControl;

  subscription: Subscription;
  invalidData: boolean = false;

  countries = Countries;
  default: string = 'India';
  cust: ICustomer;


  constructor(private fb: FormBuilder,
    private service: customerService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
    this.customerForm = new FormGroup({
      country: new FormControl(null),
      gender: new FormControl('', Validators.required)
    });
    // this.customerForm.controls['country'].setValue(this.default, { onlySelf: true });
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log('edit id is :' + id);

    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required]
    });


    this.subscription = this.service.getCustomerById(Number(id)).pipe(first()).subscribe((res: any) => {
      // this.customerForm.patchValue(res);
      // this.customerForm.controls['firstName'].setValue(res.firstName, { onlySelf: true });
      // this.customerForm = this.fb.group({
      //   firstName: res.firstName
      // })
      this.firstNameFormControl = res.firstName;
      console.log('Customer detail is :');
      console.log(res);
    }, err => {
      this.toastr.error('Customer', 'Error by Id');
    });


    //this.customerForm = this.cust;

    //this.customerForm.controls['firstName'].setValue(id, { onlySelf: true });
    this.toastr.info('Id', id);
  }

  onSubmitForm() {
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.subscription = this.service.customerUpdate(this.customerForm.value).subscribe(res => {
        console.log('Updated successfully');
        this.toastr.success('Customer', 'Updated successfully');
        this.backtoList();
      }, err => {
        this.toastr.error('Error', err);
      })
    } else {
      console.log('Error');
      this.toastr.error('Customer', 'Error');
      this.invalidData = true;
    }

  }

  backtoList() {
    this.router.navigate(['customerlist']);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

}
