import type { NextPage } from 'next';
import Gap from '../src/components/atoms/Gap';
import ClassCard from '../src/components/molecules/ClassCard';
import ClassFilter from '../src/components/molecules/ClassFilter';
import HeadingGroup from '../src/components/molecules/HeadingGroup';
import SearchForm from '../src/components/molecules/SearchForm';
import TeacherProfileCard from '../src/components/molecules/TeacherProfileCard';
import BannerSlider from '../src/components/organisms/BannerSlider';
import CardHorizontalWrapper from '../src/components/organisms/CardHorizontalWrapper';
import Footer from '../src/components/organisms/Footer';
import HeaderMobile from '../src/components/organisms/HeaderMobile';
import Navbar from '../src/components/organisms/Navbar';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />

        <div className="page-wrapper">
          <BannerSlider />

          <Gap display="block" className="my-6 lg:my-10" />

          <HeadingGroup
            title="Kelas Pilihan"
            subtitle="Kelas Pilihan terbaik dengan guru yang mahir untuk Passionmu"
          />

          <Gap display="block" className="my-6" />

          <SearchForm />

          <Gap display="block" className="my-5 md:my-7" />

          <ClassFilter />

          <Gap display="block" className="my-4" />

          {[1, 2].map((classCardGroup) => (
            <CardHorizontalWrapper key={classCardGroup}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classCard) => (
                <ClassCard key={classCard} />
              ))}
            </CardHorizontalWrapper>
          ))}

          <Gap display="block" className="my-7" />

          <HeadingGroup
            title="Guru Baik yang Mengajar"
            subtitle="Yuk, kenalan dengan Guru yang mahir untuk Passionmu"
          />

          <Gap display="block" className="my-3" />
          <CardHorizontalWrapper>
            {[1, 2, 3].map((teacher) => (
              <TeacherProfileCard key={teacher} />
            ))}
          </CardHorizontalWrapper>
        </div>

        <Gap display="block" className="my-5" />

        <Footer />
      </main>
    </div>
  );
};

export default Home;
