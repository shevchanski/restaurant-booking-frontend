'use server';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import RestPhotoCarousel from '@/components/RestPhotoCarousel/RestPhotoCarousel';
import Wrapper from '@/components/Wrapper/Wrapper';
import { atma } from '@/constants/fonts';
import fetchRestaurantById from '@/utils/fetchRestaurantById';
import {
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

interface Props {
  params: {
    restaurantId: string;
  };
}

// TODO create function generateStaticParams() to statically generate routes at build time

export default async function RestaurantPage({
  params: { restaurantId },
}: Props) {
  const restaurant = await fetchRestaurantById(restaurantId);

  return (
    <>
      <Header />

      <main className=" w-full flex-1 py-20 text-black">
        <Wrapper>
          {restaurant ? (
            <div className="grid-rows-[minmax(350px, 1fr)_1fr]  grid h-full w-full grid-cols-8 gap-3 gap-y-5">
              <RestPhotoCarousel
                className="col-span-6 col-start-2"
                restId={restaurantId}
              />
              <div className="col-span-4 col-start-2 min-h-[350px] rounded-l-md bg-gradient-to-r from-red-500 p-[1px] pr-0">
                <div className="h-full rounded-l-md bg-white p-5  ">
                  <div className="flex justify-between">
                    <h2 className={clsx(atma.className, 'ml-2 text-3xl')}>
                      {restaurant.title}
                    </h2>
                    <p className="text-xl tracking-[5px]">
                      <span className="mr-[5px] tracking-normal text-red-500">
                        {restaurant.rating}
                      </span>
                      /5
                    </p>
                  </div>
                  <hr className="mb-4 mt-2 h-[1px] w-6/12 border-0 bg-gradient-to-r from-red-500 " />
                  <p className="mb-2 ml-4">
                    <span className=" mr-1 font-semibold ">
                      Cuisine{restaurant.cuisine.length > 1 ? 's' : ''}:
                    </span>
                    {Object.values(restaurant.cuisine).join(', ')}
                  </p>
                  <p className="first-letter:font-bold: text-base first-letter:ml-4 ">
                    {restaurant.description}
                  </p>
                </div>
              </div>

              <div className="col-span-2 rounded-r-md bg-gradient-to-l from-red-500 p-[1px]  pl-0">
                <div className="h-full rounded-r-md bg-white p-5 pl-1">
                  <div className=" grid grid-cols-[24px_minmax(0,1fr)] gap-x-1 gap-y-5">
                    <MapPinIcon className="inline h-6 w-6 text-zinc-500" />
                    <RightSideListItem hoverUnderline={false}>
                      {Object.values(restaurant.address).join(', ')}
                    </RightSideListItem>
                    {restaurant.website && (
                      <>
                        <LinkIcon className=" inline h-5 w-5  text-zinc-500 " />
                        <RightSideListItem href={restaurant.website}>
                          {restaurant.website}
                        </RightSideListItem>
                      </>
                    )}
                    <PhoneIcon className="inline h-5 w-5 text-zinc-500" />
                    <RightSideListItem href={`tel:${restaurant.phoneNumber}`}>
                      {restaurant.phoneNumber}
                    </RightSideListItem>
                    <PuzzlePieceIcon className="inline h-5 w-5 text-zinc-500" />
                    <RightSideListItem hoverUnderline={false}>
                      Joined on{' '}
                      {restaurant.createdAt
                        .split('T')
                        .shift()
                        ?.toString()
                        .split('-')
                        .reverse()
                        .join('.')}
                    </RightSideListItem>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </Wrapper>
      </main>

      <Footer />
    </>
  );
}

// right side block item component
interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  hoverUnderline?: boolean;
}

function RightSideListItem({
  href,
  children,
  hoverUnderline = true,
}: ListItemProps) {
  return (
    <a
      className={clsx('text-zinc-600 duration-200 hover:text-zinc-700 ', {
        'hover:underline': hoverUnderline,
      })}
      href={href}
    >
      {children}
    </a>
  );
}
