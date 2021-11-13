import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

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

export default function ClassDetailRight() {
  const [selectedSchedule, setSelectedSchedule] = useState('');

  return (
    <>
      <div className="sticky top-24 border-2 rounded-2xl p-5 px-10 pb-8">
        <p className="font-semibold text-center text-2xl text-gray-600 mb-5">
          Pilih Jadwal
        </p>
        <div>
          {schedules.map((schedule) => (
            <div key={schedule.id}>
              <label
                htmlFor={schedule.time}
                className={
                  `cursor-pointer scheduleSelector text-sm  block w-full h-full` +
                  `transition-all duration-200 px-2 py-3 rounded-lg text-center mb-3  ${
                    selectedSchedule === schedule.time
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`
                }
              >
                <i className="bi bi-calendar-week mr-1"></i> {schedule.time}
              </label>
              <input
                type="radio"
                id={schedule.time}
                value={schedule.time}
                className="hidden"
                onClick={() => setSelectedSchedule(schedule.time)}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <button className="transform hover:-translate-y-1 transition rounded-full w-full p-2 border-2 text-sm  border-primary text-primary">
            Beli Langsung
          </button>
          <button
            className="transform hover:-translate-y-1 transition rounded-full w-full p-2 border-2 text-sm  border-primary bg-primary text-white"
            onClick={() =>
              toast.success('Kelas berhasil dimasukkan ke keranjang')
            }
          >
            + Keranjang
          </button>
        </div>
      </div>
    </>
  );
}
