import { IRestaurant } from '@/types/restaurant.type';
import H2 from '../H2/H2';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

type Props = {
  titleOfBlock: string;
  restaurants: IRestaurant[];
};

export default function CardsBlock({ titleOfBlock, restaurants }: Props) {
  return (
    <div className="bg-white pb-[60px] pt-[60px]">
      <H2>{titleOfBlock}</H2>
      <div className="mx-auto mt-16 flex w-10/12 flex-wrap gap-8">
        {...restaurants.map((restaurant, i) => (
          <RestaurantCard key={i} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
