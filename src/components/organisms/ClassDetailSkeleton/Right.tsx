import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';

const schedules = [
  {
    id: 1,
    time: '17 Agustus 2021, 15.00 WIB',
  },
  {
    id: 2,
    time: '18 Agustus 2021, 15.00 WIB',
  },
  {
    id: 3,
    time: '19 Agustus 2021, 15.00 WIB',
  },
];

export default function ClassDetailRightSkeleton() {
  const [selectedSchedule, setSelectedSchedule] = useState('');

  return (
    <>
      <div className="sticky top-24 border-2 lg:border-gray-500 border-primary rounded-2xl p-5 px-10 pb-8">
        <p className="font-semibold text-center text-2xl text-gray-600 mb-5">
          Pilih Jadwal
        </p>
        <div>
          {schedules.map((schedule) => (
            <div key={schedule.id} className="w-full h-9 mb-2">
              <Skeleton className="w-full h-full" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <div className="flex-1 h-9">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex-1 h-9">
            <Skeleton className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
