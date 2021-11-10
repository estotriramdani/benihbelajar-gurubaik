import Image from 'next/image';
import Link from 'next/link';

export default function Slider() {
  return (
    <div className="px-10 lg:px-30 my-5">
      <div className="relative h-72 overflow-hidden rounded-xl">
        <Link href="/">
          <a>
            <Image
              objectFit="cover"
              layout="fill"
              src="https://source.unsplash.com/1600x400/?nature,water"
              alt="image"
            />
          </a>
        </Link>
      </div>
      <div className="flex justify-end lg:justify-between mt-3">
        <div className="flex gap-1">
          <button className="h-5 w-5 bg-gray-300 hover:bg-gray-500 rounded-full"></button>
          <button className="h-5 w-5 bg-gray-300 hover:bg-gray-500 rounded-full"></button>
          <button className="h-5 w-5 bg-gray-300 hover:bg-gray-500 rounded-full"></button>
        </div>
        <div className="flex">
          <button className="h-9 w-11 bg-primary hover:bg-amber-400 hover:border-1 hover:border-primary text-white transition-all duration-200 rounded-l-full">
            <i className="bi bi-chevron-left text-sm"></i>
          </button>
          <button className="h-9 w-11 bg-primary hover:bg-amber-400 hover:border-1 hover:border-primary text-white transition-all duration-200 rounded-r-full">
            <i className="bi bi-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
