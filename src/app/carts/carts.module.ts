// Carts Module

// All packages used in the carts components [cart]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';

// Module
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartsModule { }
