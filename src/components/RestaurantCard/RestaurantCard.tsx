import { IRestaurant } from '@/types/restaurant.type';
import Image from 'next/image';
import React from 'react';
import FavoriteButton from '../FavouriteButton/FavouriteButton';

type Props = {
  restaurant: IRestaurant;
  isFavorite: boolean;
};

export default function RestaurantCard({
  restaurant,
  isFavorite = false,
}: Props) {
  const { title, rating, cuisine, description, _id } = restaurant;

  return (
    <div className="relative h-[345px] w-[250px]  overflow-hidden rounded-xl border border-transparent bg-white text-black shadow-lg duration-150 hover:border-red-500">
      <a href={`/restaurants/${_id}`} className="flex h-full flex-col">
        <div className="absolute right-3 top-3">
          <FavoriteButton rest_id={_id} isFavorite={isFavorite} />
        </div>
        <Image
          className="max-h-[170px] w-full max-w-[250px] object-cover"
          src={'/img/example-resPhoto.jpg'}
          width={250}
          height={170}
          alt={`${title} restaurant photo`}
        />
        <div className=" h-full w-full flex-1  px-6 py-4">
          <h4 className={` mb-2 h-[48px] text-base font-semibold`}>{title}</h4>
          <CardItem itemName="Cuisine">{cuisine.join(', ')}</CardItem>
          <CardItem itemName="Rating">{rating} / 5</CardItem>
          <p className=" max-h-12 truncate text-sm italic text-gray-700">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}

function CardItem({
  children,
  itemName,
}: {
  children: React.ReactNode;
  itemName: string;
}) {
  return (
    <p className="mb-1 overflow-hidden text-ellipsis text-sm text-gray-700">
      <span className="mr-1 font-semibold">{itemName}:</span> {children}
    </p>
  );
}
