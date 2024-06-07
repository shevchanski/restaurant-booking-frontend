'use client';

import {
  MIN_FAVORITES_FOR_RECOMMENDATIONS,
  SUPPORT_EMAIL,
} from '@/constants/config';
import { IRestaurant } from '@/types/restaurant.type';
import getUserRecommendations from '@/utils/getUserRecommendations';
import { useAuth } from '@clerk/nextjs';
import { ArrowPathIcon, SparklesIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import Attention from '../Attention/Attention';
import CardsGrid from '../CardsGrid/CardsGrid';
import H2 from '../H2/H2';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

type Props = {
  className?: string;
};

export default function RecommendationsBlock({ className }: Props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<IRestaurant[]>([]);
  const { userId } = useAuth();

  const getRecommendations = async () => {
    if (userId) {
      setLoading(true);
      setRecommendations(await getUserRecommendations(userId));
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, [userId]);

  return (
    <>
      {userId ? (
        <div
          className={clsx(
            className,
            'relative flex min-h-[400px] max-w-[1048px] flex-col items-center bg-white',
          )}
        >
          <H2>
            Personal Recommendations
            <sup>
              <SparklesIcon className="mr-3 inline-block h-7 w-7 text-violet-600" />
            </sup>
          </H2>

          <div className="relative mt-5 flex h-full w-full justify-center gap-8">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {recommendations.length ? (
                  <>
                    <button
                      className="absolute -top-[42px] right-1 h-8 w-8 rounded-md border border-slate-200 bg-slate-100 p-1"
                      onClick={getRecommendations}
                    >
                      <ArrowPathIcon className="duration-300 hover:rotate-180" />
                    </button>
                    <CardsGrid restaurants={recommendations} />
                  </>
                ) : (
                  <Attention className="flex flex-col items-center text-center">
                    <p>
                      Recommendations can be created if you{' '}
                      <span className="font-semibold">
                        more then {MIN_FAVORITES_FOR_RECOMMENDATIONS}
                      </span>{' '}
                      restaurants into you favorite list.
                      <br /> If you have but more then 2 and still doesn`t get
                      recommendations. In that case, please, connect us on{' '}
                      <Link href={`mailto:${SUPPORT_EMAIL}`}>
                        {SUPPORT_EMAIL}
                      </Link>
                    </p>
                  </Attention>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-dm flex max-w-[800px]  flex-col  items-center  gap-2 rounded-lg border border-green-300 bg-green-100 p-4 text-sm text-green-700">
          <h2 className="text-xl">
            <SparklesIcon className="mr-3 inline-block h-7 w-7 text-violet-600" />
            Personal recommendations
          </h2>
          <p className="text-center">
            Here could be you recommendations. <br /> To get them, you need to
            be logged in and have favoured restaurants!
            <br /> <Link href="/login">Log in</Link> or{' '}
            <Link href="/signup">Sing up</Link>
          </p>
        </div>
      )}
    </>
  );
}

function Link({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a href={href} className="font-semibold hover:underline">
      {children}
    </a>
  );
}
