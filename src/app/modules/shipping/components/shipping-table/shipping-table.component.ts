import { Component, Input } from '@angular/core';
import { Shipping, ShippingsService } from 'src/app/core/core.module';

@Component({
  selector: 'app-shipping-table',
  templateUrl: './shipping-table.component.html',
  styleUrls: ['./shipping-table.component.css']
})
export class ShippingTableComponent {
  @Input() shippings: Shipping[] = [];

  constructor(private shippingsService: ShippingsService) { }

  editShipping(shipping: Shipping): void {
    // TODO: Implementar el enlace para editar el envío
  }

  deleteShipping(shippingId: number): void {
    this.shippingsService.deleteShipping(shippingId).subscribe(
      () => this.shippings = this.shippings.filter(
        shipping => shipping.shippingId !== shippingId
      )
    )
  }
}
