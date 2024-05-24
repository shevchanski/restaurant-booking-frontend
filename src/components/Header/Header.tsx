import LinkButton from '@/components/LinkButton/LinkButton';
import Image from 'next/image';
import { buttonsConfig } from './config';

export default function Header() {
  return (
    <header className="mx-auto mt-5 flex w-9/12 items-center justify-between rounded-[45px] bg-zinc-100/60 py-2 pl-2 pr-4">
      <a href="/" className="duration-300 hover:translate-x-1 hover:scale-105">
        <Image
          src="/img/svg/logo-colorful.svg"
          alt="Service logotype"
          width={175}
          height={59}
          className="h-[59px]"
        ></Image>
      </a>

      <div className="flex gap-5">
        {buttonsConfig.map(({ title, href, iconURI, isInvertColor }) => {
          return (
            <LinkButton
              key={href}
              href={href}
              iconSrc={iconURI}
              invert={isInvertColor}
            >
              {title}
            </LinkButton>
          );
        })}
      </div>
    </header>
  );
}
