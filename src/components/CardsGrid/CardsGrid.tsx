import { IRestaurant } from '@/types/restaurant.type';
import clsx from 'clsx';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

interface Props {
  restaurants: IRestaurant[];
}

export default function CardsGrid({ restaurants }: Props) {
  return (
    <div
      className={clsx(`grid w-fit grid-cols-3 gap-4 min-[1200px]:grid-cols-4`)}
    >
      {...restaurants.map((rest, i) => (
        <RestaurantCard key={i} restaurant={rest} />
      ))}
    </div>
  );
}
