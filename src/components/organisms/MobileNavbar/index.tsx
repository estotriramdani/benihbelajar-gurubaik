import Link from 'next/link';
import Image from 'next/image';
import MobileNavLink from './MobileNavLink';

interface MobileNavbarProps {
  isLogin?: boolean;
}

const lists = [
  {
    title: 'Akun Saya',
    icon: 'person-fill',
    link: '/account',
  },
  {
    title: 'Notifikasi',
    icon: 'bell-fill',
    link: '/notifications',
  },
  {
    title: 'Kelas Favorit',
    icon: 'heart-fill',
    link: '/favorite',
  },
  {
    title: 'Keluar',
    icon: 'box-arrow-right',
    link: '/',
  },
];

export default function MobileNavbar(props: MobileNavbarProps) {
  const { isLogin } = props;
  const toggleMenu = () => {
    const mobileNav = document.getElementById('mobileNav');
    const closeNav = document.getElementById('closeNav');
    mobileNav?.classList.toggle('-translate-x-full');
    closeNav?.classList.toggle('translate-x-full');
  };

  return (
    <>
      <nav
        className="fixed h-full w-3/4 bg-primary left-0 top-0 shadow-lg p-4 z-40 transform transition-all duration-300 ease-in -translate-x-full md:hidden"
        id="mobileNav"
      >
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
        <ul className="mt-3 font-sans">
          {!isLogin ? (
            <>
              <MobileNavLink href="/mengajar">Mengajar</MobileNavLink>
              <MobileNavLink href="/belajar">Belajar</MobileNavLink>
            </>
          ) : (
            <>
              <MobileNavLink href="/mengajar">
                <i className="bi bi-cart mr-2 "></i> Keranjang (0)
              </MobileNavLink>
              {lists.map((list) => (
                <MobileNavLink key={list.link} href={list.link}>
                  <i className={`bi bi-${list.icon} mr-2`}></i> {list.title}
                </MobileNavLink>
              ))}
            </>
          )}
        </ul>
      </nav>
      <div
        className="fixed w-1/4 h-5/6 right-0 transform transition-all duration-200 translate-x-full z-50 md:hidden"
        id="closeNav"
        onClick={toggleMenu}
      ></div>
      <button
        className="w-16 h-16 fixed bottom-7 right-5 bg-gradient-to-br to-red-600 from-primary outline-none rounded-full active:ring-4 active:ring-offset-4 ring-offset-transparent active:ring-red-600 md:hidden shadow-2xl border-1 border-white"
        onClick={toggleMenu}
        id="toggleButton"
      >
        <i className="bi bi-list text-2xl text-white cursor-pointer"></i>
      </button>
    </>
  );
}
