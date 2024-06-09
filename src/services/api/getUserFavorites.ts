'use server';

import { ApiRoutes } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import ErrorLogger from '@/utils/ErrorLogger';
import path from 'path';
import { api_instance } from './axios_instance';

export async function getUserFavorites(
  userId: string,
  onlyIds: boolean,
): Promise<(string | IRestaurant)[]> {
  try {
    const { data } = await api_instance.get<{
      favorites: (string | IRestaurant)[];
    }>(path.join(ApiRoutes.FAVORITES, `${userId}?onlyIds=${onlyIds}`));

    return data.favorites;
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}
