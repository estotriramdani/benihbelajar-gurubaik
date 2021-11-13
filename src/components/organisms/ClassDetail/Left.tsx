import Image from 'next/image';
import Link from 'next/link';
import { rgbDataURL } from '../../../utils/images/colorBlurry';

export default function DetailClassLeft() {
  return (
    <>
      <div className="p-3 shadow-md border rounded-xl">
        <div className="relative w-72 h-48 bg-gray-700 rounded-xl overflow-hidden">
          <Image
            src="https://source.unsplash.com/500x400/?manga"
            alt=""
            layout="fill"
            placeholder="blur"
            blurDataURL={rgbDataURL(187, 21, 41)}
            objectFit="cover"
          />
        </div>
      </div>
      <Link href="/teacher/detail">
        <a className="bg-white rounded-xl border shadow-md p-3 mt-4 flex gap-3 items-center transform transition-all hover:-translate-y-1">
          <div className="relative w-16 h-16 bg-gray-700 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src="https://source.unsplash.com/300x300/?wanita"
              alt=""
              layout="fill"
              placeholder="blur"
              blurDataURL={rgbDataURL(187, 21, 41)}
              objectFit="cover"
            />
          </div>
          <div className="font-sans flex-1">
            <p className="text-md text-gray-700 font-medium">Kak Jessica</p>
            <p className="text-sm text-gray-500">Ilustrator @marshmelty</p>
          </div>
          <div className="text-gray-600 flex justify-end">
            <i className="bi bi-chevron-right"></i>
          </div>
        </a>
      </Link>
    </>
  );
}
