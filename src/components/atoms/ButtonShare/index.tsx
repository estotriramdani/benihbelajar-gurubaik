import { ReactNode } from 'react';

interface ButtonShareProps {
  children: ReactNode;
}

export default function ButtonShare(props: ButtonShareProps) {
  const { children } = props;
  return (
    <button className="w-9 h-9 flex text-base items-center transform hover:-translate-y-1 justify-center rounded-lg bg-gray-300 text-gray-500 hover:text-gray-700 transition-all active:ring-2 ring-offset-2 ring-gray-400">
      {children}
    </button>
  );
}
