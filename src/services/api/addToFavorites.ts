import { ApiRoutes } from '@/constants/config';
import { FavoriteApiPayload } from '@/types/global.type';
import ErrorLogger from '@/utils/ErrorLogger';
import path from 'path';
import { api_instance } from './axios_instance';

export async function addToFavorites(
  data: FavoriteApiPayload,
): Promise<boolean> {
  try {
    const { userId, restaurantId } = data;

    await api_instance.post(path.join(ApiRoutes.FAVORITES, userId), {
      restaurantId,
    });

    return true;
  } catch (error) {
    ErrorLogger(error);
  }
  return false;
}
