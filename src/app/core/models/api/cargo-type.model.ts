export enum CargoType {
  GENERAL = 0,
  PERISHABLE = 1,
  HAZARDOUS = 2,
  FRAGILE = 3,
}

export function keyAsCargoType(key: number): CargoType | undefined {
  const values = Object.values(CargoType).filter(
    (value) => typeof value === 'number'
  ) as number[];

  if (values.includes(key)) {
    return key as CargoType;
  }

  return undefined;
}
