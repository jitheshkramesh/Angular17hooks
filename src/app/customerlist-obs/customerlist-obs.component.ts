import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';
import { customerService } from '../services/customer.service';
import { ICustomer } from '../interfaces/customer.interface';
import { AsyncPipe } from '@angular/common';
import { filter, first, map } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customerlist-obs',
  standalone: true,
  imports: [AsyncPipe, RouterModule],
  templateUrl: './customerlist-obs.component.html',
  styleUrl: './customerlist-obs.component.scss'
})
export class CustomerlistObsComponent implements OnInit {

  customers$!: Observable<ICustomer[]>;
  custService = inject(customerService);
  router = inject(Router);

  ngOnInit(): void {
    this.customers$ = this.custService.getCustomers().pipe(
      map((reports: ICustomer[]) => reports.filter(p => p.firstName.startsWith('T')))
    ); 
  }

  EditClick(id: number) {
    this.router.navigate(['/customeredit/' + id]);
  }

}
