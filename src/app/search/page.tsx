'use server';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import MainSection from '@/components/MainSection/MainSection';
import SearchBar from '@/components/SearchBar/SearchBar';
import SearchingResult from '@/components/SearchingResult/SearchingResult';
import Wrapper from '@/components/Wrapper/Wrapper';
import { SearchParams } from '@/types/search.type';
import { Suspense } from 'react';

interface Props {
  searchParams: SearchParams;
}

export default async function SearchResultPage({ searchParams }: Props) {
  return (
    <>
      <div className=" box-border w-full border border-transparent bg-[url('/img/mainPage-bg.jpg')] bg-cover">
        <Header />
        <Wrapper>
          <div className="my-[60px] flex justify-center">
            <SearchBar searchedValue={searchParams.searchTerm} />
          </div>
        </Wrapper>
      </div>

      <MainSection>
        <Suspense fallback={<LoadingSpinner />}>
          <SearchingResult searchParams={searchParams} />
        </Suspense>
      </MainSection>

      <Footer />
    </>
  );
}
