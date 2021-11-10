import type { NextPage } from 'next';
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

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('enter');
            }}
            className="rounded-full py-3 px-7 focus-within:ring-2 ring-offset-2 ring-gray-500 ring-opacity-100 bg-gray-300 w-1/3 mx-auto relative flex justify-between items-center gap-3">
            <input
              type="text"
              className="flex-1 block focus:outline-none bg-transparent text-black focus:placeholder-gray-500"
              placeholder="Cari ..."
            />
            <button className="flex-shrink">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <div className="h-72"></div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
