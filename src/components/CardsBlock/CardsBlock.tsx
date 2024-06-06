import { IRestaurant } from '@/types/restaurant.type';
import clsx from 'clsx';
import CardsGrid from '../CardsGrid/CardsGrid';
import H2 from '../H2/H2';

type Props = {
  titleOfBlock: string;
  restaurants: IRestaurant[];
  className?: string;
};

export default function CardsBlock({
  titleOfBlock,
  restaurants,
  className,
}: Props) {
  return (
    <div className={clsx(className, 'flex flex-col items-center bg-white')}>
      <H2>{titleOfBlock}</H2>
      <div className="mx-auto mt-5 flex w-fit flex-wrap gap-8 px-[60px]">
        <CardsGrid restaurants={restaurants} />
      </div>
    </div>
  );
}
