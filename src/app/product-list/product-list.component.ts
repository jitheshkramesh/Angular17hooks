import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces/product.interface';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products: ProductInterface[] = [];
  errorMessage: string;

  constructor(private ProductService: ProductService, private ref: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.subscription = this.ProductService.getProducts().subscribe((products: ProductInterface[]) => {
      this.products = products; 
      this.ref.detectChanges();
    },
      (err) => {
        this.errorMessage = err.message + "Internal server issue";
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }


}
