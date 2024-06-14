'use client';

import ApiService from '@/services/api';
import { IRestaurant } from '@/types/restaurant.type';
import { isStringArray } from '@/utils/isStringArray';
import { useAuth } from '@clerk/nextjs';
import { TrophyIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import H2 from '../../components/H2/H2';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import CardsGrid from '../CardsGrid/CardsGrid';

type Props = {
  className?: string;
};

export default function TopRated({ className }: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [topRated, setTopRated] = useState<IRestaurant[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
    const getTopRated = async () => {
      setLoading(true);
      const [res1, res2] = await Promise.allSettled([
        ApiService.getTopRatedRestaurants(),
        userId ? ApiService.getUserFavorites(userId, true) : [],
      ]);

      setTopRated((prevState) =>
        res1.status === 'fulfilled' ? res1.value : prevState,
      );
      setFavorites((prevState) =>
        res2.status === 'fulfilled' && isStringArray(res2.value)
          ? res2.value
          : prevState,
      );

      setLoading(false);
    };

    getTopRated();
  }, [userId]);

  return (
    <div
      className={clsx(
        className,
        'relative flex min-h-[400px] max-w-[1048px] flex-col items-center bg-white',
      )}
    >
      <H2>
        Top Rated
        <span>
          <TrophyIcon className="ml-2 inline-block h-10 w-10 text-amber-300" />
        </span>
      </H2>

      <div className="relative mt-5 flex h-full w-full justify-center gap-8">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <CardsGrid restaurants={topRated} favorites={favorites} />
        )}
      </div>
    </div>
  );
}
