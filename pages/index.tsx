import type { NextPage } from 'next';
import { isMobile } from 'react-device-detect';
import MobileNavbar from '../src/components/organisms/MobileNavbar';
import Navbar from '../src/components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-64"></div>
    </div>
  );
};

export default Home;
