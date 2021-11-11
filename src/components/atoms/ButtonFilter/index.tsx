import { MouseEvent, ReactNode } from 'react';

interface ButtonFilterProps {
  type: 'primary' | 'gray';
  children: ReactNode;
  isActive?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonFilter(props: ButtonFilterProps) {
  const { type, onClick, children } = props;
  let className = '';
  if (type === 'primary') {
    className += 'bg-primary text-white active:ring-primary';
  }
  if (type === 'gray') {
    className += 'bg-gray-300 text-gray-600 active:ring-gray-300';
  }
  return (
    <button
      className={`text-sm px-3 py-1 ${className} active:ring-2 ring-offset-2  rounded-full font-sans focus:outline-none focus:ring-2 focus:ring-gray-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
