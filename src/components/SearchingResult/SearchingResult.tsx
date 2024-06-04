import { SearchParams } from '@/types/search.type';
import findRestaurants from '@/utils/findRestaurants';
import getUserFavorites from '@/utils/getUserFavorites';
import { auth } from '@clerk/nextjs/server';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import CardsGrid from '../CardsGrid/CardsGrid';
import H2 from '../H2/H2';
import SortSelector from '../SortSelector/SortSelector';
import Wrapper from '../Wrapper/Wrapper';

interface Props {
  searchParams: SearchParams;
}

export default async function SearchingResult({ searchParams }: Props) {
  const response = await findRestaurants(searchParams);

  const { userId } = auth();

  let cuisines: string[] = [];

  let favorites: string[] = [];

  if (userId) {
    favorites = (await getUserFavorites(userId)) ?? [];
  }

  //   if (response && response.restaurants.length) {
  //     console.log(new Set(response.restaurants.flatMap((rest) => rest.cuisine)));
  //   }

  return (
    <main className=" w-full flex-1 bg-white px-10 pb-10 pt-8 xl:px-0">
      <Wrapper>
        <H2>Searching Results</H2>
        <div className="grid- mt-10 grid grid-cols-[200px_1fr] gap-y-2">
          <SortSelector className="col-start-2 justify-self-end" />
          <div className="col-start-2">
            {response && response.restaurants.length ? (
              <CardsGrid
                restaurants={response.restaurants}
                favorites={favorites}
              />
            ) : (
              <NoResultMessage />
            )}
          </div>
        </div>
      </Wrapper>
    </main>
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
