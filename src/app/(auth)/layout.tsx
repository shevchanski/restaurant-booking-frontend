import MainSection from '@/components/MainSection/MainSection';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <MainSection
      mainBoxStyle="h-scree w-full bg-[url('/img/mainPage-bg.jpg')] bg-cover bg-no-repeat min-h-fit"
      innerBoxStyle="flex flex-col justify-center items-center h-screen min-h-fit"
    >
      {children}
      <a
        href="/"
        className="mt-4 flex items-center gap-2 text-white hover:underline"
      >
        <ArrowLeftIcon className="h-[18px] w-[18px]" /> Back to Home page
      </a>
    </MainSection>
  );
}
