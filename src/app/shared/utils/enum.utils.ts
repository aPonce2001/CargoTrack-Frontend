export function enumToList<T extends Record<string, string | number>>(
  enumType: T
): Array<T[keyof T]> {
  const values = Object.values(enumType);
  return values.filter((value) => typeof value === 'number') as T[keyof T][];
}
