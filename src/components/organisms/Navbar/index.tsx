import Link from 'next/link';
import Image from 'next/image';
import NavMenuList from '../../molecules/NavMenuList';
import { useEffect, useState } from 'react';
import MobileNavbar from '../MobileNavbar';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const screenWidth = screen.availWidth;
    if (screenWidth < 640) {
      setIsMobile(true);
    }
  }, []);
  if (isMobile) {
    return <MobileNavbar />;
  }
  return (
    <nav className="w-full h-20 bg-gradient-to-b from-primary to-red-600 flex justify-between items-center px-6 sticky top-0 shadow-lg">
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
