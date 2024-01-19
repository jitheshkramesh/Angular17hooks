import { Vehicle } from "./vehicle.interface";

export interface Cart {
    cartItems: CartItem[]
  }
  
  export interface CartItem {
    vehicle: Vehicle;
    quantity: number;
  }