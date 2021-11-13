import Link from 'next/link';
import ClassCard from '../../molecules/ClassCard';
import CardHorizontalWrapper from '../CardHorizontalWrapper';

export default function MoreClassTeacher() {
  return (
    <>
      <div className="flex justify-between mt-10 items-center">
        <h3 className="text-gray-600 text-2xl font-medium font-sans">
          Kelas Lainnya oleh Kak Jessica
        </h3>
        <Link href="class/teacher/jessica">
          <a className="text-primary hover:text-opacity-80 transition-all duration-150 underline">
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
