import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/core/core.module';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
})
export class CustomerProfileComponent {
  @Input() customer: Customer = {} as Customer;
}
