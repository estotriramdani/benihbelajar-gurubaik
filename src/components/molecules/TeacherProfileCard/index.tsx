import Link from 'next/link';
import ImageWithProps from '../../atoms/ImageWithProps';

export default function TeacherProfileCard() {
  return (
    <div className="rounded-2xl p-4 flex items-start gap-3.5 shadow">
      <div className="relative h-full w-44 rounded-2xl overflow-hidden flex-shrink-0">
        <ImageWithProps src="https://source.unsplash.com/200x200/?perempuan" />
      </div>
      <div className="font-sans w-80">
        <p className="text-gray-800 text-3xl font-medium mb-2">
          Kak Jessica <i className="bi bi-patch-check ml-3"></i>
        </p>
        <p className="text-gray-500 text-md font-medium mb-2">
          Ilustrator @marshmelty
        </p>
        <p className="text-gray-500 text-sm mb-2">
          Sebagai seorang penggemar anime Jepang, saya disini ingin berbagi
          tentang cara menggambar manga dan anime menggunakan aplikasi digital
          agar bisa menjadi seorang ...
        </p>
        <Link href="/teacher">
          <a className="text-primary text-md hover:text-opacity-70">
            See more <i className="bi bi-chevron-right"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}
