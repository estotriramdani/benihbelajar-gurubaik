import Link from 'next/link';

interface ButtonLinkProps {
  title: string;
  link: string;
  bgColor: 'red' | 'transparent';
  borderColor: 'red' | 'dark' | 'white';
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { title, link, bgColor, borderColor } = props;
  let classes: string = '';
  if (bgColor === 'transparent') {
    classes += 'bg-transparent text-white ';
  }
  if (borderColor === 'white') {
    classes +=
      'border-white hover:border-amber-300 focus:border-amber-300 hover:text-amber-300';
  }
  return (
    <Link href={link}>
      <a className={`px-5 py-2 text-base rounded-full border-2 ${classes}`}>
        {title}
      </a>
    </Link>
  );
}
