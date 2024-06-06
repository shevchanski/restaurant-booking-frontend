'use server';

import { API_URI } from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import axios from 'axios';
import path from 'path';
import ErrorLogger from './ErrorLogger';

async function getUserFavorites(userId: string): Promise<IRestaurant[]> {
  try {
    const response = await axios.get(path.join(API_URI, 'favorites', userId));

    if (response.data && response.data.restaurants) {
      return response.data.restaurants ?? [];
    }
  } catch (error) {
    ErrorLogger(error);
  }
  return [];
}

export default getUserFavorites;
