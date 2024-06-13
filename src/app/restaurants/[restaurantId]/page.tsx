'use server';

import BackButton from '@/components/BackButton/BackButton';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import RatingNumber from '@/components/RatingNumber/RatingNumber';
import RestPhotoCarousel from '@/components/RestPhotoCarousel/RestPhotoCarousel';
import { atma } from '@/constants/fonts';
import ApiService from '@/services/api';
import {
  ArrowLeftStartOnRectangleIcon,
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
  const restaurant = await ApiService.getRestaurantById(restaurantId);

  return (
    <>
      <Header />

      <MainSection mainBoxStyle="pt-5 md:pt-20">
        {restaurant ? (
          <div className="grid-rows-[minmax(350px, 1fr)_1fr]  grid h-full w-full grid-cols-8 gap-3 gap-y-5">
            <BackButton className=" col-span-3 ml-5 hidden w-fit items-center gap-2 rounded-full border px-4 py-1 text-xl duration-150 hover:text-red-500 md:col-start-2 md:ml-0 md:flex md:text-base">
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6" /> Back
            </BackButton>
            {/* Photos Carousel */}
            <RestPhotoCarousel
              className="col-span-full md:col-span-6 md:col-start-2"
              restId={restaurantId}
            />

            {/* Rest Description */}
            <div className="col-span-full min-h-[350px] rounded-l-md p-[1px] pr-0 md:col-span-4 md:col-start-2 md:bg-gradient-to-r md:from-red-500">
              <div className="h-full rounded-l-md bg-white md:p-5  ">
                <div className="flex flex-col justify-between pl-2 md:flex-row">
                  <h2 className={clsx(atma.className, ' text-3xl')}>
                    {restaurant.title}
                  </h2>
                  <RatingNumber
                    rating={restaurant.rating}
                    className="text-lg"
                  />
                </div>
                <hr className="mb-4 mt-2 h-[1px] w-10/12 border-0 bg-gradient-to-r from-red-500 md:w-6/12 " />
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

            {/* Additional information */}
            <div className=" col-span-full h-full rounded-r-md p-[1px] pl-0 md:col-span-2 md:bg-gradient-to-l  md:from-red-500">
              <h3 className="mb-3 block pl-4 text-xl md:hidden">
                Additional information
              </h3>
              <div className="grid h-fit grid-cols-[24px_minmax(0,1fr)] gap-x-1 gap-y-5 rounded-r-md bg-white  md:h-full md:p-5 md:pl-1">
                {/* Location */}
                <MapPinIcon className="inline h-6 w-6 text-zinc-500" />
                <RightSideListItem hoverUnderline={false}>
                  {Object.values(restaurant.address).join(', ')}
                </RightSideListItem>

                {/* Website */}
                {restaurant.website && (
                  <>
                    <LinkIcon className=" inline h-5 w-5  text-zinc-500 " />
                    <RightSideListItem>
                      <a href={restaurant.website} className="underline">
                        Website
                      </a>
                    </RightSideListItem>
                  </>
                )}

                {/* Phone */}
                <PhoneIcon className="inline h-5 w-5 text-zinc-500" />
                <RightSideListItem>
                  <a href={`tel:${restaurant.phoneNumber}`}>
                    {restaurant.phoneNumber}
                  </a>
                </RightSideListItem>

                {/* Joined at */}
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
        ) : (
          <p></p>
        )}
      </MainSection>

      <Footer />
    </>
  );
}

// right side block item component
interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  hoverUnderline?: boolean;
}

function RightSideListItem({ children, hoverUnderline = true }: ListItemProps) {
  return (
    <div
      className={clsx('text-zinc-600 duration-200 hover:text-zinc-700 ', {
        'hover:underline': hoverUnderline,
      })}
    >
      {children}
    </div>
  );
}
