'use client';

import { IRestaurant } from '@/types/restaurant.type';
import getRestaurantsIds from '@/utils/getRestaurantsIds';
import getUserFavorites from '@/utils/getUserFavorites';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Attention from '../../components/Attention/Attention';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import CardsGrid from '../CardsGrid/CardsGrid';

export default function FavoritesBlock() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<IRestaurant[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<string[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
    getFavorites();
  }, []);

  if (!userId) {
    return (
      <Attention>
        List of favoured restaurants cannot be loaded if user is not signed in!{' '}
      </Attention>
    );
  }

  const getFavorites = async () => {
    setLoading(true);

    const response = (await getUserFavorites(userId, false)).reduce(
      (acc: IRestaurant[], rest) => {
        if (typeof rest !== 'string') {
          acc.push(rest);
        }
        return acc;
      },
      [],
    );

    setFavorites(response);
    setFavoritesIds(getRestaurantsIds(response));

    setLoading(false);
  };

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
