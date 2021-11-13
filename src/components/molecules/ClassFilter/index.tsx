import { useRouter } from 'next/dist/client/router';
import { MouseEvent } from 'react';
import { ButtonClassFilter } from '../../../interfaces';
import ButtonFilter from '../../atoms/ButtonFilter';

interface ClassFilterProps {
  buttons: ButtonClassFilter[];
  isActive?: string | string[];
}

export default function ClassFilter(props: ClassFilterProps) {
  const { buttons, isActive } = props;
  const router = useRouter();
  const handleActiveButton = (
    e: MouseEvent<HTMLButtonElement>,
    slug?: string
  ) => {
    const buttonActive = document.querySelectorAll('.buttonActive');
    buttonActive.forEach((button) => {
      button.classList.remove('buttonActive');
    });
    e.currentTarget.classList.add('buttonActive');
    router.push(`?category=${slug}`);
  };

  return (
    <div>
      <div className="flex justify-center gap-2 items-center flex-wrap lg:max-w-5xl mx-auto">
        {buttons.map((button) => (
          <ButtonFilter
            type={button.type}
            key={button.id}
            onClick={(e) => handleActiveButton(e, button.slug)}
            isActive={isActive === button.slug}
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
