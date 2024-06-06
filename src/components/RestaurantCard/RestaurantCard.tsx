import { IRestaurant } from '@/types/restaurant.type';
import Image from 'next/image';
import React from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import RatingNumber from '../RatingNumber/RatingNumber';

type Props = {
  restaurant: IRestaurant;
  isFavorite: boolean;
};

export default function RestaurantCard({
  restaurant,
  isFavorite = false,
}: Props) {
  const {
    title,
    rating,
    cuisine,
    address: { city, country },
    _id,
    phoneNumber,
    description,
  } = restaurant;

  return (
    <div className="relative max-h-[390px] w-[250px]  overflow-hidden rounded-xl border border-transparent bg-white text-black shadow-lg duration-150 hover:border-red-500">
      <a href={`/restaurants/${_id}`} className="flex h-full flex-col">
        <div className="absolute right-3 top-3">
          <FavoriteButton rest_id={_id} isFavorite={isFavorite} />
        </div>
        <RatingNumber
          rating={rating}
          className="text-md absolute right-3 top-[125px] rounded-md bg-zinc-100/80 p-1"
        />
        <Image
          className="max-h-[170px] w-full max-w-[250px] object-cover"
          src={'/img/example-resPhoto.jpg'}
          width={250}
          height={170}
          alt={`${title} restaurant photo`}
        />
        <div className=" h-full w-full flex-1 px-6 py-4">
          <h4 className={`truncate text-base font-semibold`}>{title}</h4>
          <hr className="my-2 border-t-[1px]" />
          <CardItem itemName="Cuisine">{cuisine.join(', ')}</CardItem>
          <CardItem itemName="Location">{`${city}, ${country}`}</CardItem>
          {/* <a
            href={`tel:${phoneNumber}`}
            className="text-sm text-zinc-600 duration-200 hover:text-zinc-700 hover:underline"
          >
            <PhoneIcon className="mr-2 inline h-4 w-4 text-zinc-500" />
            {phoneNumber}
          </a> */}
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
    <p className="mb-1 overflow-hidden truncate text-ellipsis text-sm text-gray-700">
      <span className="mr-1 font-semibold">{itemName}:</span> {children}
    </p>
  );
}
