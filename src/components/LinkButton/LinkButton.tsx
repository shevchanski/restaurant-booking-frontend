import { lexend } from '@/constants/fonts';
import clsx from 'clsx';
import Image from 'next/image';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  invert?: boolean;
  iconSrc?: string;
}

export default function LinkButton({
  children,
  invert = false,
  iconSrc,
  ...rest
}: ButtonProps) {
  return (
    <a
      {...rest}
      className={clsx(
        `${lexend.className} flex gap-2 items-center border-[1px]  text-[17px]  py-[10px] px-[30px] rounded-[45px]  easy-in duration-300 hover:cursor-pointer`,
        {
          'bg-red-500 border-red-500 text-white hover:bg-white hover:text-red-500':
            !invert,
          'bg-white border-white text-red-500 hover:border-red-500': invert,
        },
      )}
    >
      {iconSrc && (
        <Image src={iconSrc} alt="Sign-in button icon" width={19} height={19} />
      )}
      {children}
    </a>
  );
}
