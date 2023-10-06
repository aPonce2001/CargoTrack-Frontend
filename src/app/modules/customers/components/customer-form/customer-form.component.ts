import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer, CustomersService } from 'src/app/core/core.module';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {
  customer: Customer = {} as Customer;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  customerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    this.customersService
      .createCustomer(this.customer)
      .subscribe((customer) => {
        this.customer = customer;
        this.customerForm.reset();
        this.router.navigate(['../']);
      });
  }

  get firstName(): FormControl {
    return this.customerForm.controls['firstName'];
  }

  get lastName(): FormControl {
    return this.customerForm.controls['lastName'];
  }

  get phone(): FormControl {
    return this.customerForm.controls['phone'];
  }

  get email(): FormControl {
    return this.customerForm.controls['email'];
  }

  get address(): FormControl {
    return this.customerForm.controls['address'];
  }
}
