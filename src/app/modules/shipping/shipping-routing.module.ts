import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterTemplate } from 'src/app/shared/shared.module';
import { ShippingListPage } from './pages/shipping-list-page/shipping-list-page.component';
import { ShippingRegisterPage } from './pages/shipping-register/shipping-register-page.component';
import { ShippingEditPage } from './pages/shipping-edit-page/shipping-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterTemplate,
    children: [
      {
        path: '',
        component: ShippingListPage
      },
      {
        path: 'nuevo',
        component: ShippingRegisterPage
      },
      {
        path: 'editar/:shippingId',
        component: ShippingEditPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }
