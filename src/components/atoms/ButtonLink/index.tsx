import Link from 'next/link';

interface ButtonLinkProps {
  title: string;
  link: string;
  bgColor: 'red' | 'transparent';
  borderColor: 'red' | 'dark' | 'white';
  width?: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { title, link, bgColor, borderColor, width } = props;
  let classes: string = '';
  if (bgColor === 'transparent') {
    classes += 'bg-transparent text-white ';
  }
  if (borderColor === 'white') {
    classes +=
      'border-white hover:border-red-200 focus:border-red-200 hover:text-red-200';
  }
  return (
    <Link href={link}>
      <a
        className={`px-5 py-2 inline-block text-sm focus:outline-none rounded-full border-2 ${classes} ${
          width ? width : ''
        }`}>
        {title}
      </a>
    </Link>
  );
}
