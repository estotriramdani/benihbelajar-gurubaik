import Link from 'next/link';
import Image from 'next/image';
import NavMenuList from '../../molecules/NavMenuList';

interface DesktopNavbarProps {
  isLogin?: boolean;
}

export default function DesktopNavbar(props: DesktopNavbarProps) {
  const { isLogin } = props;

  return (
    <nav className="w-full h-16 bg-primary md:flex justify-between items-center px-6 relative top-0 shadow-md hidden z-40">
      <Link href="/">
        <a>
          <Image
            src="/img/logo/logo-white.png"
            alt="logo"
            width={100}
            objectFit="contain"
            height={`80%`}
          />
        </a>
      </Link>
      <NavMenuList isLogin={isLogin} />
    </nav>
  );
}
