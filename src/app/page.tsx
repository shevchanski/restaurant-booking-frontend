import CardsBlock from '@/components/CardsBlock/CardsBlock';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SearchBar from '@/components/SearchBar/SearchBar';
import { restaurants } from '@/constants/place-holder';

export default function Home() {
  return (
    <>
      <Header />
      <div className="absolute top-0 z-[-99] h-[850px] w-full bg-[url('/img/mainPage-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div>
        <div className="flex flex-col items-center pb-[316px] pt-[180px]">
          <h1 className="text-center text-6xl text-white">
            Explore, <span className="text-red-500">Reserve,</span> and Enjoy
          </h1>
          <SearchBar className="mt-14" />
        </div>
      </div>
      <CardsBlock
        titleOfBlock="Popular Restaurants"
        restaurants={restaurants.map(
          (res, i) => (res = { ...res, _id: i.toString() }),
        )}
      />
      <CardsBlock
        titleOfBlock="Personal Recomendations"
        restaurants={restaurants}
      />
      <CardsBlock
        titleOfBlock="Special offers & Discounts"
        restaurants={restaurants}
      />
      <Footer />
    </>
  );
}
