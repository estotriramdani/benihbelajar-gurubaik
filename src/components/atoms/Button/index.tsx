import Link from 'next/link';

interface ButtonProps {
  title: string;
  bgColor: 'red' | 'transparent';
  borderColor: 'red' | 'dark' | 'white';
  width?: string;
}

export default function Button(props: ButtonProps) {
  const { title, bgColor, borderColor, width } = props;
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
      className={`px-5 py-2 inline-block text-base focus:outline-none rounded-full border-2 ${classes} ${
        width ? width : ''
      }`}>
      {title}
    </button>
  );
}
