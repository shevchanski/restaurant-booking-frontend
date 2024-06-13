import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import RestaurantForm from '@/layouts/RestaurantForm/RestaurantForm';

export default function RestaurantRegistrationPage() {
  return (
    <>
      <Header />

      <div className="absolute left-0 top-0 z-[-1] h-full min-h-screen w-screen max-w-full overflow-hidden bg-[url(/img/restRegistrationPage-bg.jpg)] bg-cover"></div>

      <MainSection>
        <RestaurantForm />
      </MainSection>

      <Footer />
    </>
  );
}
