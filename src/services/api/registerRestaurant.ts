'use server';

import { ApiRoutes } from '@/constants/config';
import { IRestaurant, RestaurantFormData } from '@/types/restaurant.type';
import ErrorLogger from '@/utils/ErrorLogger';
import path from 'path';
import { api_instance } from './axios_instance';

export async function registerRestaurant(
  restData: Omit<RestaurantFormData, 'photos'>,
): Promise<IRestaurant | null> {
  try {
    const {
      data: { restaurant },
    } = await api_instance.post<{ restaurant: IRestaurant }>(
      path.join(ApiRoutes.RESTAURANTS),
      {
        ...restData,
        cuisine: restData.cuisine.split(', '),
      },
    );

    return restaurant;
  } catch (error) {
    ErrorLogger(error);
  }
  return null;
}
