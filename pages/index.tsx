import type { NextPage } from 'next';
import Slider from '../src/components/organisms/Slider';
import Footer from '../src/components/organisms/Footer';
import Navbar from '../src/components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />
        <Slider />
        <section className="flex-1">this is main section</section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
