import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Gap from '../../src/components/atoms/Gap';
import ClassCard from '../../src/components/molecules/ClassCard';
import ClassFilter from '../../src/components/molecules/ClassFilter';
import HeadingGroup from '../../src/components/molecules/HeadingGroup';
import Footer from '../../src/components/organisms/Footer';
import HeaderMobile from '../../src/components/organisms/HeaderMobile';
import Navbar from '../../src/components/organisms/Navbar';
import { buttonClassFilterClass } from '../../src/data/classFilter';

export default function Class() {
  const { isReady, query } = useRouter();
  const [activeButton, setActiveButton] = useState<string | string[]>('');
  useEffect(() => {
    if (isReady) {
      if (query.category) {
        setActiveButton(query.category);
      }
    }
  }, [isReady, query]);
  return (
    <div className="flex flex-col">
      <main className="flex flex-col min-h-screen">
        <Navbar isLogin />

        <HeaderMobile />
        <div className="page-wrapper font-sans">
          <Gap display="block" className="my-6 lg:my-7" />
          <HeadingGroup
            subtitle="Mau belajar apa?"
            title="Pilih Kelas Passionmu!"
          />

          <Gap className="block my-5" />

          <ClassFilter
            buttons={buttonClassFilterClass}
            isActive={activeButton}
          />

          <Gap className="block my-5" />

          <div className="flex flex-wrap justify-center gap-4">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((item) => (
              <ClassCard key={item} />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
