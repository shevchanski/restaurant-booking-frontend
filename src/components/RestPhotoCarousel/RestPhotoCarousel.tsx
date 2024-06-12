'use client';

import ApiService from '@/services/api';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { HTMLAttributes, useCallback, useEffect, useState } from 'react';

const imagesArray = [
  '/img/rest-1.jpg',
  '/img/rest-2.jpg',
  '/img/rest-3.jpg',
  '/img/rest-4.jpg',
  '/img/rest-5.jpg',
];

interface Props extends HTMLAttributes<HTMLDivElement> {
  restId: string;
}

export default function RestPhotoCarousel({
  restId,
  className,
  ...rest
}: Props) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [slidesCount, setSlidesCount] = useState<number>(1);
  const [photos, setPhotos] = useState<string[]>([]);

  const [emblaRef, emblaAPI] = useEmblaCarousel({
    loop: false,
    skipSnaps: true,
    watchSlides: true,
  });

  const scrollNext = useCallback(() => {
    if (emblaAPI) emblaAPI.scrollNext();
  }, [emblaAPI]);

  const scrollPrev = useCallback(() => {
    if (emblaAPI) emblaAPI.scrollPrev();
  }, [emblaAPI]);

  const changeCurrentSlide = (emblaApi: EmblaCarouselType) => {
    setCurrentSlide(emblaApi.selectedScrollSnap() + 1);
  };

  const defineSlidesCount = (emblaApi: EmblaCarouselType) => {
    setSlidesCount(emblaApi.scrollSnapList().length);
  };

  const getRestaurantPhotos = async () => {
    const res = await ApiService.getRestaurantPhotos(restId);
    if (res.length) {
      setPhotos(res);
    } else {
      setPhotos(imagesArray);
    }
  };

  useEffect(() => {
    console.log('mount');

    getRestaurantPhotos();
    if (emblaAPI) {
      defineSlidesCount(emblaAPI);
      emblaAPI
        .on('select', changeCurrentSlide)
        .on('reInit', defineSlidesCount)
        .init(emblaAPI);
    }
  }, [emblaAPI]);

  return (
    <div {...rest} className={className}>
      <div
        className={clsx(' h-[370px]  overflow-hidden rounded-lg')}
        ref={emblaRef}
      >
        <div className="flex h-full">
          {photos.map((imgSrc, i) => (
            <Slide key={i}>
              <Image
                src={imgSrc}
                height={0}
                width={370}
                sizes="100vw"
                style={{ height: '370px', width: 'auto' }}
                alt="One of restaurant photos"
                className="h-[370px] rounded-lg"
              />
            </Slide>
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-between px-4">
        <div className="grid w-14 grid-cols-2 gap-1 ">
          <button
            className=" flex h-6 w-6  items-center justify-center rounded-full border border-slate-500 text-slate-500 duration-150 hover:border-slate-600 hover:text-slate-600 disabled:border-slate-300 disabled:text-slate-300"
            onClick={scrollPrev}
            disabled={currentSlide === 1}
          >
            <ChevronLeftIcon className="m-0 h-5 w-5 -translate-x-[1px]" />
          </button>
          <button
            className={clsx(
              'flex h-6 w-6 items-center justify-center rounded-full border border-slate-500 text-slate-500 duration-150 hover:border-slate-600 hover:text-slate-600 disabled:border-slate-300 disabled:text-slate-300',
            )}
            disabled={currentSlide === slidesCount}
            onClick={scrollNext}
          >
            <ChevronRightIcon className="m-0 h-5 w-5 translate-x-[1px]" />
          </button>
        </div>
        <span className=" font-semibold  tracking-widest">
          {currentSlide}/{slidesCount}
        </span>
      </div>
    </div>
  );
}

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        ' relative mx-1 h-full flex-[0_0_auto] first:ml-0 last:mr-0',
      )}
    >
      {children}
    </div>
  );
}
