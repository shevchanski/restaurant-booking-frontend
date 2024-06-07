'use server';

import { API_URI } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import axios from 'axios';
import path from 'path';
import ErrorLogger from './ErrorLogger';

async function getUserFavorites(
  userId: string,
  onlyIds: boolean,
): Promise<(string | IRestaurant)[]> {
  try {
    const response = await axios.get(
      path.join(API_URI, `favorites/${userId}?onlyIds=${onlyIds}`),
    );

    if (response.data && response.data.favorites) {
      return response.data.favorites ?? [];
    }
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}

export default getUserFavorites;
