'use server';

import ApiService from '@/services/api';
import { FavoriteApiPayload } from '@/types/global.type';

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
  const requestPayload: FavoriteApiPayload = {
    userId,
    restaurantId,
  };

  let isSuccessful: boolean = false;

  if (!isFavorite) {
    isSuccessful = await ApiService.addToFavorites(requestPayload);
  } else {
    isSuccessful = await ApiService.removeFromFavorites(requestPayload);
  }
  if (isSuccessful) {
    return {
      success: true,
      message: isFavorite
        ? 'Removed from favorite list'
        : 'Added to favorite list',
    };
  }

  return {
    success: false,
    message: 'Problem appeared',
  };
}
