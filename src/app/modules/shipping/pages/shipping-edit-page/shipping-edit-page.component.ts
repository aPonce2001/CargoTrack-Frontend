import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shipping, ShippingsService } from 'src/app/core/core.module';

@Component({
  templateUrl: './shipping-edit-page.component.html',
  styleUrls: ['./shipping-edit-page.component.css']
})
export class ShippingEditPage implements OnInit {
  newShipping: Shipping = {} as Shipping;

  constructor(private shippingsService: ShippingsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.shippingsService
      .getShippingById(this.route.snapshot.params['shippingId'] as number)
      .subscribe((shipping: Shipping) => {
        this.newShipping = shipping;
      });
  }
}
