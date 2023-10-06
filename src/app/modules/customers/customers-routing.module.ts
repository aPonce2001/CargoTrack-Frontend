import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterTemplate } from 'src/app/shared/shared.module';
import { CustomerListPage } from './pages/customer-list-page/customer-list-page.component';
import { NewCustomerPage } from './pages/new-customer-page/new-customer-page.component';
import { CustomerPage } from './pages/customer-page/customer-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterTemplate,
    children: [
      {
        path: '',
        component: CustomerListPage
      },
      {
        path: 'nuevo',
        component: NewCustomerPage
      },
      {
        path: ':customerId',
        component: CustomerPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
