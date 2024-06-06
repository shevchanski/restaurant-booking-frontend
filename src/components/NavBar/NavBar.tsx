import LinkButton from '@/components/LinkButton/LinkButton';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { buttonsConfig } from './config';

export default function NavBar() {
  return (
    <nav className="flex w-9/12 items-center justify-between rounded-[45px] bg-zinc-100/60 py-2 pl-2 pr-4 shadow-md">
      <a href="/" className="duration-300 hover:translate-x-1 hover:scale-105">
        <Image
          src="/img/svg/logo-colorful.svg"
          alt="Service logotype"
          width={175}
          height={59}
          className="h-[59px]"
        ></Image>
      </a>

      <div className="flex items-center gap-5">
        <SignedOut>
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
        </SignedOut>
        <SignedIn>
          <a
            href="/register_restaurant"
            className="duration-200 hover:text-white"
          >
            for Business
          </a>
          <a href="/favorites" className="duration-200 hover:text-white">
            <HeartIcon className="h-7 w-7" />
          </a>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  'h-12 w-12 border border-red-500 box-sizing',
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
