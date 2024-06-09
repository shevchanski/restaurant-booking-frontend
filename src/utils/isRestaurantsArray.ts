import { IRestaurant } from '@/types/restaurant.type';

const restaurantKeys: (keyof IRestaurant)[] = [
  '_id',
  'address',
  'createdAt',
  'cuisine',
  'description',
  'phoneNumber',
  'rating',
  'title',
  'website',
];

export function isRestaurantsArray(array: any[]): array is IRestaurant[] {
  if (!Array.isArray(array)) return false;
  if (array.length === 0) return true;

  return array.some((item) => {
    if (typeof item !== 'object' || typeof item === null) return false;

    return restaurantKeys.every((key) => key in item);
  });
}
