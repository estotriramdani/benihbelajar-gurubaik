import Link from 'next/link';
import Image from 'next/image';
import Button from '../../atoms/Button';

//TODO Bikin navbar buat mobilenya kayak documentasi tailwind
/* 
  pas belum login, di paling ada ada logo dan buttom "Belajar" justify-between

  setelah login cuma ada logo, sisanya di sidebar yang akan muncul ketika diklik tombol hamburger
*/

export default function MobileNavbar() {
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
        id="mobileNav">
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
          <li className="mb-2 ">
            <Link href="/mengajar">
              <a className="text-white bg-primary hover:text-red-700 hover:bg-white transition-all duration-100 block p-3 border-2 border-gray-50 rounded-md active:outline-white">
                Mengajar
              </a>
            </Link>
          </li>
          <li className="mb-2 ">
            <Link href="/belajar">
              <a className="text-white bg-primary hover:text-red-700 hover:bg-white transition-all duration-100 block p-3 border-2 border-gray-50 rounded-md active:outline-white">
                Belajar
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="fixed w-1/4 h-5/6 right-0 transform transition-all duration-200 translate-x-full z-30  md:hidden"
        id="closeNav"
        onClick={toggleMenu}></div>
      <button
        className="w-16 h-16 fixed bottom-7 right-5 bg-primary outline-none rounded-full active:ring-4 active:ring-offset-4 active:ring-red-600 md:hidden"
        onClick={toggleMenu}
        id="toggleButton">
        <i className="bi bi-list text-2xl text-white cursor-pointer"></i>
      </button>
    </>
  );
}
