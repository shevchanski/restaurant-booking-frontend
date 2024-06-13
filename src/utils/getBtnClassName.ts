import { lexend } from '@/constants/fonts';
import clsx from 'clsx';

export const getButtonClassName = (invertColor: boolean = false): string =>
  clsx(
    `${lexend.className} flex gap-2 items-center border-[1px]  text-[17px]  py-[10px] px-[30px] rounded-[45px]  easy-in duration-300 hover:cursor-pointer shadow-sm`,
    {
      'bg-red-500 border-red-500 text-white hover:bg-white hover:text-red-500':
        !invertColor,
      'bg-white border-white text-red-500 hover:border-red-500': invertColor,
    },
  );
