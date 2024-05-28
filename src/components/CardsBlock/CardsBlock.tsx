import { IRestaurant } from '@/types/restaurant.type';
import H2 from '../H2/H2';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Wrapper from '../Wrapper/Wrapper';

type Props = {
  titleOfBlock: string;
  restaurants: IRestaurant[];
};

export default function CardsBlock({ titleOfBlock, restaurants }: Props) {
  return (
    <div className="bg-white pb-[60px] pt-[60px]">
      <Wrapper>
        <H2>{titleOfBlock}</H2>
        <div className="mx-auto mt-16 flex w-fit flex-wrap gap-8  px-[60px]">
          {...restaurants.map((restaurant, i) => (
            <RestaurantCard key={i} restaurant={restaurant} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
