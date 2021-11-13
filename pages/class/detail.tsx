import Link from 'next/link';
import Gap from '../../src/components/atoms/Gap';
import Footer from '../../src/components/organisms/Footer';
import HeaderMobile from '../../src/components/organisms/HeaderMobile';
import Navbar from '../../src/components/organisms/Navbar';
import DetailClassLeft from '../../src/components/organisms/ClassDetail/Left';
import ClassDetailCenter from '../../src/components/organisms/ClassDetail/Center';
import ClassDetailRight from '../../src/components/organisms/ClassDetail/Right';
import MoreClassTeacher from '../../src/components/organisms/ClassDetail/MoreClassTeacher';
import MoreClassCategory from '../../src/components/organisms/ClassDetail/MoreClassCategory';

export default function ClassDetail() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />

        <div className="page-wrapper">
          <Gap display="block" className="my-6 lg:my-7" />

          <div className="flex-col lg:flex-row flex gap-4 relative font-sans justify-between">
            <div className="flex-shrink-0">
              <DetailClassLeft />
            </div>
            <div className="w-full lg:w-2/5 mt-1 p-2 lg:p-0 lg:mt-0">
              <ClassDetailCenter />
            </div>
            <div className="w-96 flex-shrink-0">
              <ClassDetailRight />
            </div>
          </div>
          <Gap className="h-px w-full bg-primary mt-8 lg:hidden" />
          <MoreClassTeacher />
          <MoreClassCategory />
        </div>
        <Gap display="block" className="my-7" />
        <Footer />
      </main>
    </div>
  );
}