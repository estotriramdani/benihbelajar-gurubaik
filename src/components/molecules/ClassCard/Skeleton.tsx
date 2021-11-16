import Gap from '../../atoms/Gap';
import Skeleton from 'react-loading-skeleton';

export default function ClassCardSkeleton() {
  return (
    <div className="block w-60 p-3 shadow rounded-lg font-sans flex-shrink-0 relative transform hover:-translate-y-1 transition-all">
      <div className="relative w-full h-36 rounded-lg overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="p-2">
        <div className="flex text-gray-500 text-sm gap-2 mt-1 mb-1">
          <p className="flex">
            <i className="bi bi-star-fill mr-1"></i> <Skeleton width={40} />
          </p>
          <p className="flex">
            <i className="bi bi-person-fill mr-1"></i> <Skeleton width={70} />
          </p>
        </div>
        <p className="text-gray-800 text-md font-medium mb-1">
          <Skeleton className="h-5 w-full" />
        </p>
        <p className="text-sm text-gray-500">
          <Skeleton className="h-3 w-full" count={3} />
          <Skeleton className="h-3" width={150} />
        </p>
        <Gap display="block" className="my-3" />
        <p className="text-gray-600 text-sm mb-1 flex items-center gap-1">
          <i className="bi bi-calendar-week mr-1"></i>{' '}
          <Skeleton className="h-3" width={150} />
        </p>
        <p className="text-gray-600 text-sm mb-1 flex items-center gap-1">
          <i className="bi bi-clock mr-1"></i>{' '}
          <Skeleton className="h-3" width={80} />
        </p>
        <p className="text-gray-600 text-sm flex items-center gap-1">
          <i className="bi bi-currency-dollar mr-1"></i>{' '}
          <Skeleton className="h-3" width={80} />
        </p>
        <div className="flex gap-1 mt-3">
          <div className="flex-1 h-8">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="w-8 h-8">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
