import Skeleton from 'react-loading-skeleton';
import ButtonFilter from '../../atoms/ButtonFilter';
import ButtonShare from '../../atoms/ButtonShare';
import HeadingWithLine from '../../atoms/HeadingWithLine';

export default function ClassDetailCenterSkeleton() {
  return (
    <>
      <div className="flex gap-2">
        <Skeleton width={80} className="rounded-full h-6" />
        <Skeleton width={80} className="rounded-full h-6" />
      </div>
      <h2 className="text-gray-700 text-2xl font-medium mt-3">
        <Skeleton className="h-9" />
      </h2>
      <div className="flex gap-2 text-gray-600 text-base mt-2">
        <p className="flex gap-1">
          <i className="bi bi-star-fill"></i> <Skeleton width={80} />
        </p>
        <p className="flex gap-1">
          <i className="bi bi-person-fill"></i> <Skeleton width={100} />
        </p>
      </div>
      <p className="text-gray-600 text-sm mt-3">
        <Skeleton count={5} />
      </p>
      <div className="block lg:flex gap-3 items-center">
        <p className="text-gray-600 text-3xl font-medium mt-3 lg:mt-0">
          <Skeleton width={200} className="h-8" />
        </p>
        <div className="flex gap-2">
          {[1, 2, 3].map((item) => (
            <div className="h-8 w-8" key={item}>
              <Skeleton className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <HeadingWithLine title="Detail" />
      <p className="text-gray-600 text-sm">
        <Skeleton className="h-5 mb-2" width={150} />
        <Skeleton count={7} />
      </p>
    </>
  );
}
