'use server';

import { API_URI } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import axios from 'axios';
import path from 'path';
import logFetchError from './logFetchError';

async function fetchRestaurantById(
  restaurantId: string,
): Promise<IRestaurant | null> {
  try {
    const getQuery = path.join(API_URI, 'restaurants', restaurantId);

    const { data } = await axios.get<{ restaurant: IRestaurant }>(getQuery);

    if (data && data.restaurant) {
      return data.restaurant;
    }
  } catch (error) {
    logFetchError;
  }

  return null;
}

export default fetchRestaurantById;
