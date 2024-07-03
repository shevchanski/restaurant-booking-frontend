import LinkButton from '@/components/LinkButton/LinkButton';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { buttonsConfig } from './config';

export default function NavBar() {
  return (
    <nav className="flex w-11/12 items-center justify-between rounded-[45px] bg-zinc-100/60 py-2 pl-2 pr-4 shadow-md md:w-9/12">
      <a href="/" className=" duration-300 hover:translate-x-1 hover:scale-105">
        <Image
          src="/img/svg/logo-colorful.svg"
          alt="TableBar logotype"
          width={175}
          height={59}
          className="hidden h-[59px] md:block"
        />
        <Image
          src="/img/svg/logo-no-text.svg"
          alt="TableBar logotype"
          width={59}
          height={59}
          className="block h-[59px] w-fit md:hidden"
        />
      </a>

      <div>
        <ul className="flex items-center gap-5">
          <SignedOut>
            {buttonsConfig.map(({ title, href, iconURI, isInvertColor }) => {
              return (
                <li key={href}>
                  <LinkButton
                    href={href}
                    iconSrc={iconURI}
                    invert={isInvertColor}
                  >
                    {title}
                  </LinkButton>
                </li>
              );
            })}
          </SignedOut>
          <SignedIn>
            <li>
              <a
                href="/register_restaurant"
                className="duration-200 hover:text-white"
              >
                for Business
              </a>
            </li>
            <li>
              <a href="/favorites" className="duration-200 hover:text-white">
                <HeartIcon className="h-7 w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      'h-12 w-12 border border-red-500 box-sizing',
                  },
                }}
              />
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
}
