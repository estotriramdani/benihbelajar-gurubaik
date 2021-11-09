import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  bgColor: 'red' | 'transparent';
  borderColor: 'red' | 'dark' | 'white';
  width?: string;
  roundedFull?: boolean;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { bgColor, borderColor, width, roundedFull, children } = props;
  let classes: string = '';
  if (bgColor === 'transparent') {
    classes += 'bg-transparent text-white ';
  }
  if (borderColor === 'white') {
    classes +=
      'border-white hover:border-red-200 focus:border-red-200 hover:text-red-200';
  }
  return (
    <button
      className={`px-5 py-2 inline-block text-base focus:outline-none ${
        roundedFull ? 'rounded-full' : 'rounded-md'
      } border-2 ${classes} ${width ? width : ''}`}>
      {children}
    </button>
  );
}
