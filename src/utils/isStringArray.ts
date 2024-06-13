export function isStringArray(array: any[]): array is string[] {
  if (array.length && typeof array[0] === 'string') {
    return true;
  }
  return false;
}
