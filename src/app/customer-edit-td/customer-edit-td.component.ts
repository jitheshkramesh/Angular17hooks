import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, first } from 'rxjs';
import { Countries } from '../services/countries';
import { customerService } from '../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICustomer } from '../interfaces/customer.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-edit-td',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './customer-edit-td.component.html',
  styleUrl: './customer-edit-td.component.scss'
})
export class CustomerEditTdComponent implements OnInit, OnDestroy {

  customer: ICustomer;

  subscription: Subscription;
  invalidData: boolean = false;

  countries = Countries;
  default: string = 'India';

  constructor(private service: customerService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) { this.customer = {} as ICustomer; }


  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id'); 

    this.subscription = this.service.getCustomerById(Number(id)).pipe(first()).subscribe((res: ICustomer) => {
      this.customer = res;
      // this.customer.birthDate =new Date(this.datePipe.transform(this.customer.birthDate, 'yyyy-MM-dd')); 
    }, err => {
      this.toastr.error('Customer', 'Error by Id');
    });
  }

  onSubmitForm() {

    var inputData = {
      id: this.route.snapshot.paramMap.get('id'),
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      email: this.customer.email,
      city: this.customer.city,
      state: this.customer.state,
      country: this.customer.country,
      zipcode: this.customer.zipcode,
      phone: this.customer.phone,
      birthDate: this.customer.birthDate,
      gender: this.customer.gender
    };

    if (inputData) {
      this.subscription = this.service.customerUpdate(inputData).subscribe(res => {
        console.log('Updated successfully');
        //this.resetForm(form);
        this.toastr.success('Customer', 'Updated successfully');
        this.router.navigate(['customerlist']);
        //this.resetForm(); 
      }, err => {
        this.toastr.success('Customer', err);
      })
    } else { 
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
