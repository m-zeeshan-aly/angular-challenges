import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey',
  standalone: true
})
export class SortByKeyPipe implements PipeTransform {

  transform(array: any[], key: string, order: 'asc' | 'desc' = 'asc'): any[] {
  if (!array || !key) {
    return array; // Return the array as-is if it's null or key is missing
  }

  // Sort array based on the given key and order
  return [...array].sort((a, b) => {
    const comparison = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    return order === 'asc' ? comparison : -comparison; // Reverse for 'desc'
  });
}

}
