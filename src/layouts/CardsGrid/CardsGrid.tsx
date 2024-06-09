import { IRestaurant } from '@/types/restaurant.type';
import clsx from 'clsx';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

interface Props {
  restaurants: IRestaurant[];
  favorites?: string[];
}

export default function CardsGrid({ restaurants, favorites = [] }: Props) {
  return (
    <div
      className={clsx(
        `grid w-fit grid-cols-2 gap-4 md:grid-cols-3 min-[1200px]:grid-cols-4`,
      )}
    >
      {...restaurants.map((rest, i) => {
        return (
          <RestaurantCard
            key={i}
            restaurant={rest}
            isFavorite={favorites.includes(rest._id)}
          />
        );
      })}
    </div>
  );
}
