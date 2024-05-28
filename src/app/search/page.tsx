'use server';

import CardsGrid from '@/components/CardsGrid/CardsGrid';
import Footer from '@/components/Footer/Footer';
import H2 from '@/components/H2/H2';
import Header from '@/components/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import Wrapper from '@/components/Wrapper/Wrapper';
import { SearchParams } from '@/types/search.type';
import findRestaurants from '@/utils/findRestaurants';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  searchParams: SearchParams;
}

export default async function SearchResultPage({ searchParams }: Props) {
  let errorMessage: string | undefined;

  const response = await findRestaurants(searchParams);

  const cuisines: string[] = [];

  if (response && response.restaurants.length) {
    response.restaurants.map((rest) => cuisines.push(...rest.cuisine));
  }

  return (
    <div className="max-w-screen flex min-h-screen flex-col">
      <div className=" box-border w-full border border-transparent bg-[url('/img/mainPage-bg.jpg')] bg-cover">
        <Header />
        <Wrapper>
          <div className="my-[60px] flex justify-center">
            <SearchBar searchedValue={searchParams.searchTerm} />
          </div>
        </Wrapper>
      </div>

      <main className=" w-full flex-1 bg-white pb-10 pt-8">
        <Wrapper>
          <H2>Searching Results</H2>
          <div className="mt-10 flex justify-center">
            {response && response.restaurants.length ? (
              <CardsGrid restaurants={response.restaurants} />
            ) : (
              <NoResultMessage />
            )}
          </div>
        </Wrapper>
      </main>

      <Footer />
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
