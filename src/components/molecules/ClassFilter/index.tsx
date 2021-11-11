import { MouseEvent, useState } from 'react';
import ButtonFilter from '../../atoms/ButtonFilter';

interface ButttonInterface {
  id: number | string;
  title: string;
  type: 'primary' | 'gray';
}

export default function ClassFilter() {
  const [buttons, setButtons] = useState<Array<ButttonInterface>>([
    {
      id: 0,
      title: 'Semua',
      type: 'gray',
    },
    {
      id: 1,
      title: 'Seni',
      type: 'gray',
    },
    {
      id: 2,
      title: 'Matematika',
      type: 'gray',
    },
    {
      id: 3,
      title: 'Bahasa dan Budaya',
      type: 'gray',
    },
    {
      id: 4,
      title: '+4',
      type: 'gray',
    },
  ]);

  const handleActiveButton = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonActive = document.querySelectorAll('.buttonActive');
    buttonActive.forEach((button) => {
      button.classList.remove('buttonActive');
    });
    e.currentTarget.classList.add('buttonActive');
  };

  return (
    <div>
      <div className="flex justify-center gap-2 items-center flex-wrap">
        {buttons.map((button) => (
          <ButtonFilter
            type={button.type}
            key={button.id}
            onClick={(e) => handleActiveButton(e)}
          >
            {button.title}
          </ButtonFilter>
        ))}
      </div>
      <div className="flex justify-center mt-3 gap-2 items-center">
        <span className="text-gray-400 text-sm font-sans">coba juga : </span>
        <ButtonFilter type="gray" onClick={(e) => handleActiveButton(e)}>
          SD
        </ButtonFilter>
        <ButtonFilter type="gray" onClick={(e) => handleActiveButton(e)}>
          SMP
        </ButtonFilter>
        <ButtonFilter type="gray" onClick={(e) => handleActiveButton(e)}>
          SMA
        </ButtonFilter>
        <ButtonFilter type="gray" onClick={(e) => handleActiveButton(e)}>
          60 menit
        </ButtonFilter>
      </div>
    </div>
  );
}
