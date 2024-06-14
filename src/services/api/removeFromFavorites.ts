import { ApiRoutes } from '@/constants/config';
import { FavoriteApiPayload } from '@/types/global.type';
import ErrorLogger from '@/utils/ErrorLogger';
import { api_instance } from './axios_instance';

export async function removeFromFavorites(
  data: FavoriteApiPayload,
): Promise<boolean> {
  try {
    await api_instance.delete(ApiRoutes.FAVORITES, {
      data: data,
    });

    return true;
  } catch (error) {
    ErrorLogger(error);
  }
  return false;
}
