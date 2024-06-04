'use client';

import { toggleFavoriteAction } from '@/actions/toggleFavoriteAction';
import { useAuth } from '@clerk/nextjs';
import { HeartIcon as OutlinedHearIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { MouseEventHandler, useState } from 'react';

interface Props {
  isFavorite?: boolean;
  rest_id: string;
}

export default function FavoriteButton({ isFavorite = false, rest_id }: Props) {
  const [isFavoured, setFavorite] = useState<boolean>(isFavorite);
  const { userId } = useAuth();

  const toggleFavorite: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (userId) {
      const response = await toggleFavoriteAction({
        userId,
        restaurantId: rest_id,
        isFavorite: isFavoured,
      });

      if (response.success) {
        setFavorite((prevState) => {
          return !prevState;
        });
      }
    }
  };

  return (
    <button
      className={clsx('h-9 w-9 rounded-md bg-zinc-100/60 p-1', {
        'text-red-500': isFavoured,
        'hover:text-red-500': !isFavoured,
      })}
      onClick={toggleFavorite}
    >
      {!isFavoured ? <OutlinedHearIcon /> : <SolidHeartIcon />}
    </button>
  );
}
