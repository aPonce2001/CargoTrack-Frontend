import { Customer, CustomersService } from 'src/app/core/core.module';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.css']
})
export class CustomerListPage implements OnInit{

  customers: Customer[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(customers => {
      this.customers = customers
    })
  }
}
