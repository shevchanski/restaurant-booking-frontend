import Attention from '@/components/Attention/Attention';
import InfoBox from '@/components/InfoBox/InfoBox';
import { SUPPORT_EMAIL } from '@/constants/config';
import ApiService from '@/services/api';
import { SearchParams } from '@/types/search.type';
import { auth } from '@clerk/nextjs/server';
import clsx from 'clsx';
import H2 from '../../components/H2/H2';
import PaginationBar from '../../components/PaginationBar/PaginationBar';
import SortSelector from '../../components/SortSelector/SortSelector';
import CardsGrid from '../CardsGrid/CardsGrid';

interface Props {
  searchParams: SearchParams;
}

export default async function SearchingResult({ searchParams }: Props) {
  const { userId } = auth();

  const [findPromise, userFavoritesPromise] = await Promise.allSettled([
    ApiService.searchRestaurants(searchParams),
    userId
      ? (await ApiService.getUserFavorites(userId, true)).reduce(
          (acc: string[], favorite) => {
            if (typeof favorite === 'string') acc.push(favorite);
            return acc;
          },
          [],
        )
      : [],
  ]);

  const searchResponse =
    findPromise.status === 'fulfilled' ? findPromise.value : null;

  const userFavorites =
    userFavoritesPromise.status === 'fulfilled'
      ? userFavoritesPromise.value
      : [];

  return (
    <>
      <H2>Searching Results</H2>
      <div
        className={clsx('mt-5   ', {
          'grid grid-cols-[200px_1fr] gap-y-2':
            searchResponse?.restaurants.length,
          'w-9/12': !searchResponse?.restaurants.length,
        })}
      >
        {searchResponse && !!searchResponse.restaurants.length ? (
          <>
            <SortSelector className="col-start-2 justify-self-end" />
            <div className="col-span-2 flex flex-col items-center">
              <CardsGrid
                restaurants={searchResponse.restaurants}
                favorites={userFavorites}
              />
              <PaginationBar
                className="mt-10"
                totalAmount={searchResponse.totalAmount}
              />
            </div>
          </>
        ) : searchResponse && !searchResponse.restaurants.length ? (
          <InfoBox className="flex flex-col items-center gap-1 text-base">
            <h2 className=" text-center text-[24px] leading-10">
              Nothing has matched your query.
            </h2>
            <p>
              We apologize that nothing has been found according your entered
              value.
            </p>
            <p>
              Try to change the searching parameter or check that value is
              correct.
            </p>
            <p>
              We are constantly expanding our database of restaurants, so soon
              here will be much more options for you to choose from.
            </p>
            <p>Thank you for understanding!</p>
          </InfoBox>
        ) : (
          <Attention className="flex flex-col items-center text-center">
            <h2 className="text-center text-[24px] leading-10">
              Couldn`t connect with server!
            </h2>
            <p>
              Try check your connection and reload that page few time.
              <br /> If it doesn`t help, contact our support:{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{' '}
            </p>
          </Attention>
        )}
      </div>
    </>
  );
}
