import { API_URI } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import axios from 'axios';
import path from 'path';
import logFetchError from './logFetchError';

async function getUserFavorites(userId: string) {
  try {
    const response = await axios.get(path.join(API_URI, 'favorites', userId));

    if (response.data && response.data.restaurants) {
      const restaurants: IRestaurant[] = response.data.restaurants;
      return restaurants.map((rest) => rest._id);
    }

    return [];
  } catch (error) {
    logFetchError(error);
  }
}

export default getUserFavorites;
