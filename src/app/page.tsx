import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import RecommendationsBlock from '@/components/RecommendationsBlock/RecommendationsBlock';
import SearchBar from '@/components/SearchBar/SearchBar';
import Wrapper from '@/components/Wrapper/Wrapper';

export default async function Home() {
  return (
    <>
      <Header />
      <div className="absolute top-0 z-[-99] h-[850px] w-full bg-[url('/img/mainPage-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <Wrapper>
        <div className="flex min-h-[752px] flex-col items-center pt-[180px]">
          <h1 className="text-center text-6xl text-white">
            Explore, <span className="text-red-500">Reserve,</span> and Enjoy
          </h1>
          <SearchBar className="mt-14" />
        </div>
      </Wrapper>

      <MainSection
        innerBoxStyle="flex flex-col items-center gap-16"
        mainBoxStyle="pt-10"
      >
        <RecommendationsBlock />
      </MainSection>
      <Footer />
    </>
  );
}
