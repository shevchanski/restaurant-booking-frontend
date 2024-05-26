import { ArrowLeftIcon } from '@heroicons/react/16/solid';

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="absolute right-0 top-0 z-[-99] h-full w-full bg-[url('/img/mainPage-bg.jpg')] bg-cover bg-no-repeat"></div>
      {children}
      <a
        href="/"
        className="mt-4 flex items-center gap-2 text-white hover:underline"
      >
        <ArrowLeftIcon className="h-[18px] w-[18px]" /> Back to Home page
      </a>
    </div>
  );
}
