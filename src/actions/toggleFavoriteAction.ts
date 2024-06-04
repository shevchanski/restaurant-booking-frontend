'use server';

import { API_URI } from '@/constants/config';
import logFetchError from '@/utils/logFetchError';
import axios, { AxiosError } from 'axios';
import path from 'path';

interface Props {
  userId: string;
  restaurantId: string;
  isFavorite: boolean;
}

export async function toggleFavoriteAction({
  userId,
  restaurantId,
  isFavorite,
}: Props) {
  const favoriteAPI_URL = path.join(API_URI, 'favorites');
  const requestPayload = {
    userId,
    restaurantId,
  };
  try {
    if (!isFavorite) {
      await axios.post(favoriteAPI_URL, requestPayload);
    } else {
      await axios.delete(favoriteAPI_URL, {
        data: requestPayload,
      });
    }
    return {
      success: true,
      message: isFavorite
        ? 'Removed from favorite list'
        : 'Added to favorite list',
    };
  } catch (error) {
    logFetchError(error);
    return {
      success: false,
      message:
        error instanceof AxiosError
          ? error.response?.data.errorMessage
          : 'Problem appeared',
    };
  }
}
