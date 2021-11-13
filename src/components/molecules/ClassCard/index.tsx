import Image from 'next/image';
import Link from 'next/dist/client/link';
import { rgbDataURL } from '../../../utils/images/colorBlurry';
import Gap from '../../atoms/Gap';

export default function ClassCard() {
  return (
    <div className="block w-60 p-3 shadow rounded-lg font-sans flex-shrink-0 relative transform hover:-translate-y-1 transition-all">
      <div className="relative w-full h-36 rounded-lg overflow-hidden">
        <Image
          src="https://source.unsplash.com/300x210/?class"
          alt=""
          layout="fill"
          placeholder="blur"
          blurDataURL={rgbDataURL(187, 21, 41)}
          objectFit="cover"
        />
      </div>
      <div className="p-2">
        <div className="flex text-gray-500 text-sm gap-2 mt-1 mb-1">
          <p>
            <i className="bi bi-star-fill mr-1"></i>5.0
          </p>
          <p>
            <i className="bi bi-person-fill mr-1"></i>SD, 10-12 tahun
          </p>
        </div>
        <p className="text-gray-800 text-md font-medium mb-1">
          Kelas Bahasa Arab
        </p>
        <p className="text-sm text-gray-500">
          Mengenal kosa kata dasar Bahasa Arab
        </p>
        <Gap display="block" className="my-3" />
        <p className="text-gray-600 text-sm mb-1">
          <i className="bi bi-calendar-week mr-1"></i> 17 Agustus 2021
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <i className="bi bi-clock mr-1"></i> 15.00 WIB
        </p>
        <p className="text-gray-600 text-sm">
          <i className="bi bi-currency-dollar mr-1"></i> Rp49.000,00*
        </p>
        <div className="flex gap-1 mt-3">
          <Link href="/class/detail">
            <a className="d-inline-block flex justify-center items-center rounded-md h-8 flex-1 border border-primary text-primary font-medium text-sm d-block hover:bg-primary hover:text-white">
              Lihat Detail
            </a>
          </Link>
          <button className="rounded-md text-center w-8 h-8 bg-gray-300 text-gray-800 hover:bg-gray-400 transition-all duration-100">
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
