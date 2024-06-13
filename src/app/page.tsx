import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import SearchBar from '@/components/SearchBar/SearchBar';
import Wrapper from '@/components/Wrapper/Wrapper';
import RecommendationsBlock from '@/layouts/RecommendationsBlock/RecommendationsBlock';
import TopRated from '@/layouts/TopRated/TopRatedRestaurants';

export default async function Home() {
  return (
    <>
      <div className=" h-[650px] w-full bg-[url('/img/mainPage-bg.jpg')] bg-cover bg-center bg-no-repeat md:h-[850px]">
        <Header />
        <Wrapper>
          <div className="mt-[100px] flex flex-col items-center">
            <h1 className="text-center text-5xl text-white md:text-6xl">
              Explore, <span className="text-red-500">Reserve,</span> and Enjoy
            </h1>
            <SearchBar className="mt-14" />
          </div>
        </Wrapper>
      </div>

      <MainSection
        innerBoxStyle="flex flex-col items-center gap-16"
        mainBoxStyle="pt-10"
      >
        <RecommendationsBlock />
        <TopRated />
      </MainSection>
      <Footer />
    </>
  );
}
