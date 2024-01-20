import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Countries } from '../services/countries';
import { customerService } from '../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, formatDate } from '@angular/common';
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

 // customerForm: FormGroup;
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
    // this.customerForm = new FormGroup({
    //   country: new FormControl(null),
    //   gender: new FormControl('', Validators.required)
    // });
    // this.customerForm.controls['country'].setValue(this.default, { onlySelf: true });
  }

  editcustomerForm = new FormGroup({
    firstNameFormControl: new FormControl(''),
    lastNameFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
    cityFormControl: new FormControl(''),
    stateFormControl: new FormControl(''),
    countryFormControl: new FormControl(''),
    zipcodeFormControl: new FormControl(''),
    phoneFormControl: new FormControl(''),
    birthDateFormControl: new FormControl(''),
    genderFormControl: new FormControl('') 
  });

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log('edit id is :' + id);




    this.subscription = this.service.getCustomerById(Number(id)).pipe(first()).subscribe((res: any) => {
      console.log(res['firstName']);
      this.editcustomerForm = new FormGroup({
        firstNameFormControl: new FormControl(res['firstName']),
        lastNameFormControl:  new FormControl(res['lastName']),
        emailFormControl:  new FormControl(res['email']),
        cityFormControl:  new FormControl(res['city']),
        stateFormControl:  new FormControl(res['state']),
        countryFormControl:  new FormControl(res['country']),
        zipcodeFormControl:  new FormControl(res['zipcode']),
        phoneFormControl:  new FormControl(res['phone']),
        birthDateFormControl:  new FormControl(res['birthDate']),
        //new FormControl(res['birthDate']),
        genderFormControl:  new FormControl(res['gender']),
        
      });

      this.editcustomerForm.get('birthDateFormControl').patchValue(this.formatDate(new Date(res['birthDate'])));

      //this.customerForm.patchValue(res);
      // this.customerForm.controls['firstName'].setValue(res.firstName, { onlySelf: true });
      // this.customerForm = this.fb.group({
      //   firstName: res.firstName
      // })
      //this.customerForm.controls['firstName'].setValue(res.firstName);
      console.log('Customer detail is :');
      console.log( this.editcustomerForm.value );
    }, err => {
      this.toastr.error('Customer', 'Error by Id');
    });


    //this.customerForm = this.cust;

    //this.customerForm.controls['firstName'].setValue(id, { onlySelf: true });
   // this.toastr.info('Id', id);
  } 

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onSubmitForm() {
    console.log(this.editcustomerForm);

    var inputData = {
      id: this.route.snapshot.paramMap.get('id'),
      firstName: this.editcustomerForm.value.firstNameFormControl,
      lastName: this.editcustomerForm.value.lastNameFormControl,
      email: this.editcustomerForm.value.emailFormControl,
      city: this.editcustomerForm.value.cityFormControl,
      state: this.editcustomerForm.value.stateFormControl,
      country: this.editcustomerForm.value.countryFormControl,
      zipcode:this.editcustomerForm.value.zipcodeFormControl,
      phone: this.editcustomerForm.value.phoneFormControl,
      birthDate: this.editcustomerForm.value.birthDateFormControl,
      gender: this.editcustomerForm.value.genderFormControl,
    };

    if (this.editcustomerForm.valid) {
      this.subscription = this.service.customerUpdate(inputData).subscribe(res => {
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
