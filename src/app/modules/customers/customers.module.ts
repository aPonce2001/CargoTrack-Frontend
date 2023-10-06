import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListPage } from './pages/customer-list-page/customer-list-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { NewCustomerPage } from './pages/new-customer-page/new-customer-page.component';
import { CustomerPage } from './pages/customer-page/customer-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersTableComponent,
    CustomerProfileComponent,
    CustomerInfoComponent,
    CustomerFormComponent,
    CustomerListPage,
    NewCustomerPage,
    CustomerPage,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomersModule {}
