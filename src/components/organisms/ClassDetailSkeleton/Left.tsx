import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { rgbDataURL } from '../../../utils/images/colorBlurry';

export default function DetailClassLeftSkeleton() {
  return (
    <>
      <div className="p-3 shadow-md border rounded-xl">
        <div className="relative w-full lg:w-72 h-48 rounded-xl overflow-hidden">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
      </div>
      <a className="bg-white rounded-xl border shadow-md p-3 mt-4 flex gap-3 items-center transform transition-all hover:-translate-y-1">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
        <div className="font-sans flex-1">
          <p className="text-md text-gray-700 font-medium">
            <Skeleton className="h-5" />
          </p>
          <p className="text-sm text-gray-500 mt-1.5">
            <Skeleton className="h-3" />
          </p>
        </div>
        <div className="text-gray-600 flex justify-end">
          <i className="bi bi-chevron-right"></i>
        </div>
      </a>
    </>
  );
}
