import Skeleton from 'react-loading-skeleton';

export default function TeacherProfileCardSkeleton() {
  return (
    <div className="rounded-2xl p-4 flex items-start gap-3.5 shadow">
      <div className="relative h-full w-44 rounded-2xl overflow-hidden flex-shrink-0">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="font-sans w-80">
        <p className="text-gray-800 text-3xl font-medium mb-2">
          <Skeleton />
        </p>
        <p className="text-gray-500 text-md font-medium mb-2">
          <Skeleton />
        </p>
        <p className="text-gray-500 text-sm mb-2">
          <Skeleton count={5} />
        </p>
        <Skeleton width={150} />
      </div>
    </div>
  );
}
