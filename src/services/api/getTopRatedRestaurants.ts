'use server';

import { ApiRoutes, DEFAULT_TOP_RATED_LIMIT } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import path from 'path';
import ErrorLogger from '../../utils/ErrorLogger';
import { api_instance } from './axios_instance';

export async function getTopRatedRestaurants(
  limit: number = DEFAULT_TOP_RATED_LIMIT,
): Promise<IRestaurant[]> {
  try {
    const { data } = await api_instance.get<{ restaurants: IRestaurant[] }>(
      path.join(ApiRoutes.TOP_RATED, `?limit=${limit}`),
    );

    return data.restaurants;
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}
