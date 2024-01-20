import { Component } from '@angular/core';
import { ICustomer } from '../interfaces/customer.interface';
import { Subscription } from 'rxjs';
import { customerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {

  subscription: Subscription;
  customers: ICustomer[] = [];
  errorMessage: string;

  constructor(private customerService: customerService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.customerService.getCustomers().subscribe((cust: ICustomer[]) => {
      this.customers = cust;
      console.log(this.customers);
    },
      (err) => {
        this.errorMessage = err.message + "Internal server issue";
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  AddCustomer() {
    console.log('customer add');
    this.router.navigate(['/customer']);
  }
}
