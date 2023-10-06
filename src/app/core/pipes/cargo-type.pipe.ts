import { Pipe, PipeTransform } from '@angular/core';
import { CargoType } from '../core.module';

@Pipe({
  name: 'cargoType',
})
export class CargoTypePipe implements PipeTransform {
  private readonly cargoTypeLabels: { [key in CargoType]: string } = {
    [CargoType.GENERAL]: 'General',
    [CargoType.PERISHABLE]: 'Perecible',
    [CargoType.HAZARDOUS]: 'Peligroso',
    [CargoType.FRAGILE]: 'Frágil',
  };

  transform(cargoType: CargoType): string {
    return this.cargoTypeLabels[cargoType] || 'Desconocido';
  }
}
