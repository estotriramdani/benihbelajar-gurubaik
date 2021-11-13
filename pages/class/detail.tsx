import Link from 'next/link';
import Image from 'next/image';
import Gap from '../../src/components/atoms/Gap';
import Footer from '../../src/components/organisms/Footer';
import HeaderMobile from '../../src/components/organisms/HeaderMobile';
import Navbar from '../../src/components/organisms/Navbar';
import DetailClassLeft from '../../src/components/organisms/ClassDetail/Left';
import ClassDetailCenter from '../../src/components/organisms/ClassDetail/Center';
import ClassDetailRight from '../../src/components/organisms/ClassDetail/Right';

export default function ClassDetail() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />

        <div className="page-wrapper">
          <Gap display="block" className="my-6 lg:my-7" />

          <div className="flex gap-4 relative font-sans justify-between">
            <div className="flex-shrink-0">
              <DetailClassLeft />
            </div>
            <div className="w-2/5">
              <ClassDetailCenter />
            </div>
            <div className="w-96 flex-shrink-0">
              <ClassDetailRight />
            </div>
          </div>
        </div>
        <Gap display="block" className="my-7" />
        <Footer />
      </main>
    </div>
  );
}
