import type { NextPage } from 'next';
import Gap from '../src/components/atoms/Gap';
import ClassFilter from '../src/components/molecules/ClassFilter';
import SearchForm from '../src/components/molecules/SearchForm';
import BannerSlider from '../src/components/organisms/BannerSlider';
import Footer from '../src/components/organisms/Footer';
import Navbar from '../src/components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />
        <div className="page-wrapper">
          <BannerSlider />

          <h1 className="text-5xl font-normal font-sans text-gray-800 text-center mt-10">
            Kelas Pilihan
          </h1>
          <p className="font-sans text-base text-gray-800 text-center lg:w-1/2 mx-auto mb-6 mt-3">
            Kelas Pilihan terbaik dengan guru yang mahir untuk Passionmu
          </p>

          <SearchForm />

          <Gap display="block" className="my-5" />

          <ClassFilter />
        </div>

        <div className="h-72"></div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
