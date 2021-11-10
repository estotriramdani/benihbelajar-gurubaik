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
          <div className="">
            <BannerSlider />
            <hr className="mb-4 mt-3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              tempora dolore hic reprehenderit earum consectetur corrupti
              excepturi mollitia eaque atque, asperiores porro ex illo provident
              fuga repellat sunt! Cupiditate, aspernatur!
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
