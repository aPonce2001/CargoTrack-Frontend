import { CargoType } from "./cargo-type.model";
import { Customer } from "./customer.model";

export interface Shipping {
  shippingId: number;
  description: string;
  customerId: number;
  customer?: Customer;
  weight: number;
  length: number;
  width: number;
  height: number;
  sourceAddress: string;
  sourceCity: string;
  destinationAddress: string;
  destinationCity: string;
  registerDate: string;
  cargoType: CargoType;
}
