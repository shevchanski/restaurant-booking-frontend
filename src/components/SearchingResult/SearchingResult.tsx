import { SearchParams } from '@/types/search.type';
import findRestaurants from '@/utils/findRestaurants';
import getRestaurantsIds from '@/utils/getRestaurantsIds';
import getUserFavorites from '@/utils/getUserFavorites';
import { auth } from '@clerk/nextjs/server';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import CardsGrid from '../CardsGrid/CardsGrid';
import H2 from '../H2/H2';
import PaginationBar from '../PaginationBar/PaginationBar';
import SortSelector from '../SortSelector/SortSelector';

interface Props {
  searchParams: SearchParams;
}

export default async function SearchingResult({ searchParams }: Props) {
  const { userId } = auth();

  const [searchResponse, userFavorites] = await Promise.all([
    findRestaurants(searchParams),
    userId ? getRestaurantsIds(await getUserFavorites(userId)) : [],
  ]);

  return (
    <div className="w-fit">
      <H2>Searching Results</H2>
      <div className="mt-5 grid grid-cols-[200px_1fr] gap-y-2">
        <SortSelector className="col-start-2 justify-self-end" />
        <div className="col-span-2 flex flex-col items-center">
          {searchResponse && searchResponse.restaurants.length ? (
            <>
              <CardsGrid
                restaurants={searchResponse.restaurants}
                favorites={userFavorites}
              />
              <PaginationBar
                className="mt-10"
                totalAmount={searchResponse.totalAmount}
              />
            </>
          ) : (
            <NoResultMessage />
          )}
        </div>
      </div>
    </div>
  );
}

function NoResultMessage() {
  return (
    <div className="flex flex-col items-center justify-center pt-[100px] ">
      <ExclamationCircleIcon className="m-0 h-[60px] w-[60px] text-blue-500" />
      <h2 className=" text-center text-[36px] text-gray-600 ">
        Sorry :(
        <br /> But nothing found on your request
        <br />
        Try one more time <FaceSmileIcon className=" inline-block h-12 w-12" />
      </h2>
    </div>
  );
}
