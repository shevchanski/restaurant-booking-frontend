'use server';

import {
  API_URI,
  ApiRoutes,
  DEFAULT_LIMIT_RECOMMENDATIONS,
} from '@/constants/config';
import ApiService from '@/services/api';
import { IRestaurant } from '@/types/restaurant.type';
import axios from 'axios';
import path from 'path';
import ErrorLogger from './ErrorLogger';

async function getUserRecommendations(
  userId: string,
  limit: number = DEFAULT_LIMIT_RECOMMENDATIONS,
): Promise<IRestaurant[]> {
  try {
    const { data } = await axios.get(
      path.join(API_URI, ApiRoutes.RECOMMENDATIONS, userId, `?limit=${limit}`),
    );

    if (data && data.recommendations) {
      const { recommendations } = data;
      if (Array.isArray(recommendations) && recommendations.length) {
        const promisesArray = recommendations.map((restId) =>
          ApiService.getRestaurantById(restId),
        );

        const [...responses] = await Promise.allSettled(promisesArray);

        return responses.reduce((acc: IRestaurant[], response) => {
          if (response.status === 'fulfilled' && response.value)
            acc.push(response.value);
          return acc;
        }, []);
      }
    }
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}

export default getUserRecommendations;
