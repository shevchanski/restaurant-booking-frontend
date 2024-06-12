'use server';

import { ApiRoutes, InstanceParam } from '@/constants/config';
import ErrorLogger from '@/utils/ErrorLogger';
import { api_instance } from './axios_instance';

export async function getRestaurantPhotos(restId: string): Promise<string[]> {
  try {
    const { data } = await api_instance.get<{ photos: string[] }>(
      ApiRoutes.GET_REST_PHOTOS.replace(InstanceParam.REST_ID, restId),
    );

    return data.photos;
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}
