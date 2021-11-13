import Link from 'next/link';
import ClassCard from '../../molecules/ClassCard';
import CardHorizontalWrapper from '../CardHorizontalWrapper';

interface MoreClassTeacherProps {
  isTeacherPage?: boolean;
}

export default function MoreClassTeacher(props: MoreClassTeacherProps) {
  const { isTeacherPage } = props;
  return (
    <>
      <div className="block lg:flex justify-between mt-10 items-center">
        <h3 className="text-gray-600 text-2xl font-medium font-sans">
          Kelas {!isTeacherPage ? 'Lainnya' : ''} oleh Kak Jessica
        </h3>
        {!isTeacherPage ? (
          <Link href="/teacher">
            <a className="text-primary hover:text-opacity-80 transition-all duration-150 underline block mt-1 lg:mt-0 font-sans">
              Muat Lebih Banyak
            </a>
          </Link>
        ) : (
          ''
        )}
      </div>
      <CardHorizontalWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <ClassCard key={item} />
        ))}
      </CardHorizontalWrapper>
    </>
  );
}
