import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerService } from '../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ICustomer } from '../interfaces/customer.interface';
import { Countries } from '../services/countries';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-customer-td',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './customer-td.component.html',
  styleUrl: './customer-td.component.scss'
})
export class CustomerTDComponent implements OnInit {

  customer: ICustomer;

  // @ViewChild('customerForm') form: any;

  // firstName: string;
  // lastName: string;
  // email: string;
  // zipcode: string;
  // phone: string;
  // birthDate: Date;
  // city: string;
  // state: string;
  // country: string;
  // gender: string;

  subscription: Subscription;
  invalidData: boolean = false;

  countries = Countries;
  default: string = 'India';
  message:string;

  constructor(private service: customerService,
    private router: Router,
    private toastr: ToastrService,
    private notification:NotificationService) { this.customer = {} as ICustomer; }

  ngOnInit(): void {
    this.message = 'C-Count : ';
    this.notification.notificationSubject.subscribe(d=>{
      this.message = 'C-Count : ' + d;
    });

    console.log(this.message);
  }

  onSubmitForm(form: NgForm) {

    if (form.valid) {
      this.subscription = this.service.customerCreation(form.value).subscribe(res => { 
        //this.resetForm(form);
        this.toastr.success('Customer', 'Created successfully');
        this.router.navigate(['customerlist']);
        //this.resetForm(); 
      }, err => {
        this.toastr.success('Customer', err);
      })
    } else {
      console.log('Error');
      this.toastr.error('Customer', 'Error');
      this.invalidData = true;
    }


  }

  resetForm(form: NgForm) { form.reset(); }
}
