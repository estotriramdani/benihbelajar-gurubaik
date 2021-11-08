import type { NextPage } from 'next';
import Navbar from '../src/components/molecules/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-64"></div>
    </div>
  );
};

export default Home;
