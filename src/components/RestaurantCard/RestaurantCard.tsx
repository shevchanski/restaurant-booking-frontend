import { IRestaurant } from '@/types/restaurant.type';
import Image from 'next/image';

type Props = {
  restaurant: IRestaurant;
};

export default function RestaurantCard({ restaurant }: Props) {
  const { imageUrl, title, rating, cuisine, description, _res_id } = restaurant;

  return (
    <div className="max-h-[420px] max-w-[370px]  overflow-hidden rounded-xl bg-white text-black shadow-lg duration-[400ms] hover:scale-105">
      <a href={`/restaurants/${_res_id}`}>
        <Image
          className="max-h-[247px] w-full object-cover"
          src={imageUrl}
          width={150}
          height={150}
          alt={`${title} restaurant photo`}
        />
        <div className="px-6 py-4">
          <h4 className={` mb-2 text-xl font-semibold`}>{title}</h4>
          <p className="mb-1 text-base text-gray-700">
            <span className="font-semibold">Cuisine:</span> {cuisine}
          </p>
          <p className="mb-1 text-base text-gray-700">
            <span className="font-semibold">Rating:</span> {rating} / 5
          </p>
          <p className=" max-h-12 truncate text-[14px] text-base text-gray-700">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}
