import Gap from '../../src/components/atoms/Gap';
import HeadingWithLine from '../../src/components/atoms/HeadingWithLine';
import TeacherTestimoniCard from '../../src/components/molecules/TeacherTestimoniCard';
import MoreClassTeacher from '../../src/components/organisms/ClassDetail/MoreClassTeacher';
import Footer from '../../src/components/organisms/Footer';
import HeaderMobile from '../../src/components/organisms/HeaderMobile';
import Navbar from '../../src/components/organisms/Navbar';
import TeacherDetailCenter from '../../src/components/organisms/TeacherDetail/Center';
import TeacherDetailLeft from '../../src/components/organisms/TeacherDetail/Left';

export default function Teacher() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />
        <div className="page-wrapper font-sans">
          <Gap display="block" className="my-6 lg:my-7" />

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between">
            <div className="flex-shrink-0">
              <TeacherDetailLeft />
            </div>
            <div className="flex-1">
              <TeacherDetailCenter />
            </div>
            <div className="flex-1 lg:w-96">
              <HeadingWithLine title="Ulasan" />
              <div className="flex flex-col gap-4">
                <TeacherTestimoniCard />
                <TeacherTestimoniCard />
              </div>
            </div>
          </div>

          <MoreClassTeacher isTeacherPage />
        </div>
        <Footer />
      </main>
    </div>
  );
}
