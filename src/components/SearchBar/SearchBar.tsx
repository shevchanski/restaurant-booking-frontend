import { getButtonClassName } from '@/utils/getBtnClassName';
import Image from 'next/image';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const findRestaurants = async (data: FormData) => {
    'use server';
    console.log(data);
  };

  return (
    <div
      className={`${className} h-[86px] w-7/12 rounded-[80px] bg-white px-[30px]`}
    >
      <form
        action={findRestaurants}
        className="flex h-full items-center justify-between gap-2"
      >
        <label className="relative flex-grow">
          <span className="sr-only">Search</span>
          <Image
            src="/img/svg/search.svg"
            alt="Icon Searching magnifying glass"
            width={25}
            height={25}
            className="absolute left-[10px] top-[50%]  translate-y-[-50%]"
          />
          <input
            className="h-[80px] w-full border-0 pl-[50px] text-black placeholder:text-[16px] focus:underline focus:ring-0"
            type="text"
            name="search_param"
            placeholder="Search by Location, Restaurant or Cuisine..."
          />
        </label>

        <button className={getButtonClassName()}>Search</button>
      </form>
    </div>
  );
}
