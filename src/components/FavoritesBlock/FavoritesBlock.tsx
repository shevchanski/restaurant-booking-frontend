'use client';

import { IRestaurant } from '@/types/restaurant.type';
import getRestaurantsIds from '@/utils/getRestaurantsIds';
import getUserFavorites from '@/utils/getUserFavorites';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Attention from '../Attention/Attention';
import CardsGrid from '../CardsGrid/CardsGrid';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function FavoritesBlock() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<IRestaurant[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<string[]>([]);
  const { userId } = useAuth();

  if (!userId) {
    return (
      <Attention>
        List of favoured restaurants cannot be loaded if user is not signed in!{' '}
      </Attention>
    );
  }

  const getFavorites = async () => {
    setLoading(true);
    const response = await getUserFavorites(userId);
    setFavorites(response);
    setFavoritesIds(getRestaurantsIds(response));
    setLoading(false);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner className="mt-10" />
      ) : favorites.length ? (
        <CardsGrid
          restaurants={favorites as IRestaurant[]}
          favorites={favoritesIds}
        />
      ) : (
        <h2> At first add to favorites any restaurant</h2>
      )}
    </>
  );
}
