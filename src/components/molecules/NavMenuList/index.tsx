import { Menu } from '@headlessui/react';
import Link from 'next/link';
import ButtonLink from '../../atoms/ButtonLink';
import AuthDropdown from './AuthDropdown';

interface NavMenuListProps {
  isLogin?: boolean;
}

export default function NavMenuList(props: NavMenuListProps) {
  const { isLogin } = props;
  if (!isLogin) {
    return (
      <ul className="flex gap-5 font-sans items-center">
        <li>
          <Link href="/mengajar">
            <a className="text-white hover:text-red-100">Mengajar</a>
          </Link>
        </li>
        <li>
          <ButtonLink
            bgColor="transparent"
            borderColor="white"
            title="Belajar"
            link="/login"
          />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="flex gap-5 font-sans items-center">
        <li title="Keranjang">
          <Link href="/cart">
            <a className="text-white hover:text-red-100 relative inline-block">
              <span className="text-xs absolute top-0 right-0 text-primary rounded-full bg-gray-50 inline-block h-4 w-4 text-center shadow-xl ">
                1
              </span>
              <i className="bi bi-cart text-3xl"></i>
            </a>
          </Link>
        </li>
        <li>
          <AuthDropdown />
        </li>
      </ul>
    );
  }
}
