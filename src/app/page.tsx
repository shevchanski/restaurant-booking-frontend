import SearchBar from '@/components/SearchBar/SearchBar';

export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-[-99] h-[850px] w-full bg-[url('/img/mainPage-bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div>
        <div className="flex flex-col items-center pb-[316px] pt-[180px]">
          <h1 className="text-center text-6xl text-white">
            Explore, <span className="text-red-500">Reserve,</span> and Enjoy
          </h1>
          <SearchBar className="mt-14" />
        </div>
      </div>
    </>
  );
}
