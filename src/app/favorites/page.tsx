import Attention from '@/components/Attention/Attention';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import FavoritesBlock from '@/layouts/FavoritesBlock/FavoritesBlock';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function FavoritesPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  return (
    <>
      <Header />
      <MainSection>
        {userId ? (
          <div className="flex flex-col items-center">
            <h2 className="mb-5 text-4xl">
              <span className="text-red-500">Your</span> favorites
            </h2>
            <FavoritesBlock />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Attention className="flex w-7/12 flex-col items-center">
              <h2 className="text-3xl">Attention!</h2>
              <p className="mt-5 text-center text-xl">
                To visit this page you need to be logged in!
                <br />
                You will be redirected to{' '}
                <span className="font-semibold">sing in</span> page.
              </p>
            </Attention>
          </div>
        )}
      </MainSection>

      <Footer />
    </>
  );
}
