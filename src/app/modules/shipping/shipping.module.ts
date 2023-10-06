import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShippingRegisterPage } from './pages/shipping-register/shipping-register-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingTableComponent } from './components/shipping-table/shipping-table.component';
import { ShippingListPage } from './pages/shipping-list-page/shipping-list-page.component';
import { ShippingEditPage } from './pages/shipping-edit-page/shipping-edit-page.component';


@NgModule({
  declarations: [
    ShippingFormComponent,
    ShippingRegisterPage,
    ShippingTableComponent,
    ShippingListPage,
    ShippingEditPage
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShippingModule { }
