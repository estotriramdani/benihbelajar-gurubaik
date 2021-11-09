import Link from 'next/link';
import Image from 'next/image';
import NavMenuList from '../../molecules/NavMenuList';

export default function DesktopNavbar() {
  return (
    <nav className="w-full h-20 bg-gradient-to-b from-primary to-red-600 md:flex justify-between items-center px-6 sticky top-0 shadow-lg hidden z-40">
      <Link href="/">
        <a>
          <Image
            src="/img/logo/logo-white.png"
            alt="logo"
            width={120}
            objectFit="contain"
            height={`80%`}
          />
        </a>
      </Link>
      <NavMenuList isLogin />
    </nav>
  );
}
