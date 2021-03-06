import Gap from '../../src/components/atoms/Gap';
import Footer from '../../src/components/organisms/Footer';
import HeaderMobile from '../../src/components/organisms/HeaderMobile';
import Navbar from '../../src/components/organisms/Navbar';
import DetailClassLeft from '../../src/components/organisms/ClassDetail/Left';
import ClassDetailCenter from '../../src/components/organisms/ClassDetail/Center';
import ClassDetailRight from '../../src/components/organisms/ClassDetail/Right';
import MoreClassTeacher from '../../src/components/organisms/ClassDetail/MoreClassTeacher';
import MoreClassCategory from '../../src/components/organisms/ClassDetail/MoreClassCategory';
import DetailClassLeftSkeleton from '../../src/components/organisms/ClassDetailSkeleton/Left';
import ClassDetailCenterSkeleton from '../../src/components/organisms/ClassDetailSkeleton/Center';
import ClassDetailRightSkeleton from '../../src/components/organisms/ClassDetailSkeleton/Right';

export default function ClassDetail() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />

        <div className="page-wrapper">
          <Gap display="block" className="my-6 lg:my-7" />

          <div className="flex-col lg:flex-row flex gap-4 lg:gap-10 relative font-sans justify-between">
            <div className="flex-shrink-0">
              {/* <DetailClassLeft /> */}
              <DetailClassLeftSkeleton />
            </div>
            <div className="flex-1 mt-1 p-2 lg:p-0 lg:mt-0">
              {/* <ClassDetailCenter /> */}
              <ClassDetailCenterSkeleton />
            </div>
            <div className="w-full lg:w-96 flex-shrink-0">
              {/* <ClassDetailRight /> */}
              <ClassDetailRightSkeleton />
            </div>
          </div>
          <Gap className="h-px w-full bg-primary mt-8 lg:hidden" />
          <MoreClassTeacher />
          <MoreClassCategory />
        </div>
        <Footer />
      </main>
    </div>
  );
}
