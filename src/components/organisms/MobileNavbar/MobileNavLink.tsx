import Link from 'next/link';
import { ReactNode } from 'react';

interface MobileNavLinkProps {
  href: string;
  children: ReactNode;
}

export default function MobileNavLink(props: MobileNavLinkProps) {
  const { children, href } = props;
  return (
    <li className="mb-2">
      <Link href={href}>
        <a className="text-white bg-primary hover:text-red-700 hover:bg-white transition-all duration-100 block p-3 border-2 border-gray-50 rounded-md active:outline-white">
          {children}
        </a>
      </Link>
    </li>
  );
}
