import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/core/core.module';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {
  @Input() customer: Customer = {} as Customer;
}
