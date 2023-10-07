import { CargoType } from './models/api/cargo-type.model';
import { Shipping } from './models/api/shipping.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer } from './models/api/customer.model';
import { CustomersService } from './services/rest/customers/customers.service';
import { ShippingsService } from './services/rest/shipping/shippings.service';
import { CargoTypePipe } from './pipes/cargo-type.pipe';

@NgModule({
  declarations: [
    CargoTypePipe
  ],
  imports: [CommonModule],
  providers: [CustomersService, ShippingsService],
  exports: [
    CargoTypePipe
  ],
})
export class CoreModule {}

export { Customer, CustomersService, Shipping, ShippingsService, CargoType };
