'use server';

import {
  API_URI,
  ApiRoutes,
  DEFAULT_LIMIT_RECOMMENDATIONS,
} from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import axios from 'axios';
import path from 'path';
import ErrorLogger from '../../utils/ErrorLogger';

async function getUserRecommendations(
  userId: string,
  limit: number = DEFAULT_LIMIT_RECOMMENDATIONS,
): Promise<IRestaurant[]> {
  try {
    const { data } = await axios.get<{ recommendations: IRestaurant[] }>(
      path.join(API_URI, ApiRoutes.RECOMMENDATIONS, `${userId}?limit=${limit}`),
    );

    return data.recommendations;
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}

export default getUserRecommendations;
