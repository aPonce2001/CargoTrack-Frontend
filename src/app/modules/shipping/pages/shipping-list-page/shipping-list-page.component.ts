import { Component, OnInit } from '@angular/core';
import {
  Shipping,
  ShippingsService,
  CustomersService,
} from 'src/app/core/core.module';

@Component({
  templateUrl: './shipping-list-page.component.html',
  styleUrls: ['./shipping-list-page.component.css'],
})
export class ShippingListPage implements OnInit {
  shippingList: Shipping[] = [];

  constructor(
    private shippingsService: ShippingsService,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.shippingsService
      .getShippings()
      .subscribe((shippingList: Shipping[]) => {
        this.shippingList = shippingList;
        for (const shipping of this.shippingList) {
          this.customersService.getCustomer(shipping.customerId).subscribe(
            customer => (shipping.customer = customer)
          )
        }
      });
  }
}
