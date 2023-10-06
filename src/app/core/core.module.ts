import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer } from './models/api/customer.model';
import { CustomersService } from './services/rest/customers/customers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CustomersService
  ]
})
export class CoreModule { }

export { Customer, CustomersService };