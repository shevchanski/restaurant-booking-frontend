import { ApiRoutes } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import ErrorLogger from '@/utils/ErrorLogger';
import path from 'path';
import { api_instance } from './axios_instance';

export async function getRestaurantById(
  restId: string,
): Promise<IRestaurant | null> {
  try {
    const { data } = await api_instance.get<{ restaurant: IRestaurant }>(
      path.join(ApiRoutes.RESTAURANTS, restId),
    );

    return data.restaurant;
  } catch (error) {
    ErrorLogger(error);
  }
  return null;
}
