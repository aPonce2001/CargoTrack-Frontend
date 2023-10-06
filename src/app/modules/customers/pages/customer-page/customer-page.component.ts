import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomersService } from 'src/app/core/core.module';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPage implements OnInit{

  customerId: number = -1;
  customer: Customer = {} as Customer;

  constructor(private route: ActivatedRoute, private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];
    this.customersService.getCustomer(this.customerId).subscribe(customer => {
      this.customer = customer
    })
  }
}
