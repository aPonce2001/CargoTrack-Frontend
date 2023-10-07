import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CargoType,
  Shipping,
  ShippingsService
} from 'src/app/core/core.module';
import { enumToList } from 'src/app/shared/shared.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingFormComponent implements OnInit, AfterViewInit  {
  cargoTypeEnum = CargoType;
  cargoTypes = enumToList(CargoType);
  @Input() newShipping: Shipping = {
    shippingId: 0,
    description: '',
    customerId: 0,
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    sourceAddress: '',
    sourceCity: '',
    destinationAddress: '',
    destinationCity: '',
    registerDate: new Date().toISOString().split('T')[0],
    cargoType: CargoType.GENERAL,
  };

  constructor(
    private shippingsService: ShippingsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.convertToNumber(this.newShipping.cargoType);
  }

  shippingForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required, Validators.min(0)]),
    length: new FormControl('', [Validators.required, Validators.min(0)]),
    width: new FormControl('', [Validators.required, Validators.min(0)]),
    height: new FormControl('', [Validators.required, Validators.min(0)]),
    sourceAddress: new FormControl('', [Validators.required]),
    sourceCity: new FormControl('', [Validators.required]),
    destinationAddress: new FormControl('', [Validators.required]),
    destinationCity: new FormControl('', [Validators.required]),
    cargoType: new FormControl(CargoType.GENERAL, [Validators.required]),
  });

  onSubmit(): void {
    if (this.newShipping.shippingId == 0) {
      const customerId = this.route.snapshot.queryParams['customerId'];
      this.newShipping.customerId = customerId as number;
      this.shippingsService.createShipping(this.newShipping).subscribe(() => {
        this.shippingForm.reset();
        this.router.navigate(['/envios']);
      });
    } else {
      this.shippingsService
        .updateShipping(this.newShipping.shippingId, this.newShipping)
        .subscribe(() => {
          this.shippingForm.reset();
          this.router.navigate(['/envios']);
        });
    }
  }

  get description() {
    return this.shippingForm.controls['description'];
  }

  get weight() {
    return this.shippingForm.controls['weight'];
  }

  get length() {
    return this.shippingForm.controls['length'];
  }

  get width() {
    return this.shippingForm.controls['width'];
  }

  get height() {
    return this.shippingForm.controls['height'];
  }

  get sourceAddress() {
    return this.shippingForm.controls['sourceAddress'];
  }

  get sourceCity() {
    return this.shippingForm.controls['sourceCity'];
  }

  get destinationAddress() {
    return this.shippingForm.controls['destinationAddress'];
  }

  get destinationCity() {
    return this.shippingForm.controls['destinationCity'];
  }

  get cargoType() {
    return this.shippingForm.controls['cargoType'];
  }

  convertToNumber(value: any): void {
    this.newShipping.cargoType = +value;
  }
}
