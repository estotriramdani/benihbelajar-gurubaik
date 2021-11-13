import Gap from '../src/components/atoms/Gap';
import ClassCard from '../src/components/molecules/ClassCard';
import HeadingGroup from '../src/components/molecules/HeadingGroup';
import SearchForm from '../src/components/molecules/SearchForm';
import Footer from '../src/components/organisms/Footer';
import HeaderMobile from '../src/components/organisms/HeaderMobile';
import Navbar from '../src/components/organisms/Navbar';

export default function Favorite() {
  return (
    <div className="flex flex-col justify-start">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />
        <div className="page-wrapper">
          <Gap display="block" className="my-6 lg:my-7" />
          <HeadingGroup
            title="Kelas Favorit"
            subtitle="Temukan kelas yang telah kamu favoritkan"
          />
          <Gap display="block" className="my-6 lg:my-5" />
          <SearchForm />
          <Gap className="block my-5" />

          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ClassCard key={item} />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
