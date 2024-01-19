import { Component, computed, inject } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { CartService } from 'src/app/services/cart.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'] 
})
export class VehicleDetailComponent {
  errorMessage = '';
  cartService = inject(CartService);
  vehicleService = inject(VehicleService);

  // Signals used in the template
  vehicle = this.vehicleService.selectedVehicle;
  vehicleFilms = this.vehicleService.vehicleFilms;
  pageTitle = computed(() => this.vehicle() ? `Detail for: ${this.vehicle()?.name}` : '');

  addToCart(vehicle: Vehicle | undefined) {
    if (vehicle) {
      this.cartService.addToCart(vehicle);
    }
  }
}
