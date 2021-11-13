import Link from 'next/link';
import ClassCard from '../../molecules/ClassCard';
import CardHorizontalWrapper from '../CardHorizontalWrapper';

export default function MoreClassCategory() {
  return (
    <>
      <div className="block lg:flex justify-between mt-6 items-center">
        <h3 className="text-gray-600 text-2xl font-medium font-sans">
          Pilihan Kelas Lainnya
        </h3>
        <Link href="class/category/seni">
          <a className="text-primary hover:text-opacity-80 transition-all duration-150 underline block mt-1 lg:mt-0">
            Muat Lebih Banyak
          </a>
        </Link>
      </div>
      <CardHorizontalWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <ClassCard key={item} />
        ))}
      </CardHorizontalWrapper>
    </>
  );
}
