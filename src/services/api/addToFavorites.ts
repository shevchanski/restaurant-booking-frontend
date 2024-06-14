import { ApiRoutes } from '@/constants/config';
import { FavoriteApiPayload } from '@/types/global.type';
import ErrorLogger from '@/utils/ErrorLogger';
import { api_instance } from './axios_instance';

export async function addToFavorites(
  data: FavoriteApiPayload,
): Promise<boolean> {
  try {
    await api_instance.post(ApiRoutes.FAVORITES, data);
    return true;
  } catch (error) {
    ErrorLogger(error);
  }
  return false;
}
