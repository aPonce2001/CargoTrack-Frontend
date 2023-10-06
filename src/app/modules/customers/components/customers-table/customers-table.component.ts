import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/core/core.module';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css'],
})
export class CustomersTableComponent {
  @Input() customers: Customer[] = [];
}
