import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary flex flex-col pb-4 md:pb-3 md:flex-row  font-sans">
      <div className="flex-1 px-3 py-1 md:p-5 mb-3 md:mb-0">
        <Image
          src="/img/logo/logo-white.png"
          alt=""
          width={120}
          height={`100%`}
          objectFit="contain"
        />
        <p className="text-gray-200 text-sm w-1/2">
          Benih Belajar adalah tempat kamu menemukan passionmu dan
          mengembangkannya bersama guru-guru yang terampil di bidang tersebut.
        </p>
      </div>
      <div className="flex-1 text-gray-200 px-3 py-1 md:p-5 md:text-right text-left">
        <h2 className="text-md font-medium md:mb-3 mb-1">Contact Support</h2>
        <ul>
          <li>
            <p className="text-sm">+62 853-6158-0008</p>
          </li>
          <li>
            <p className="text-sm">benihbelajar.id@gmail.com</p>
          </li>
        </ul>
        <ul className="space-x-4 mt-3">
          <li className="inline-block">
            <a
              href="https://instgram.com"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-gray-50">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-gray-50">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-gray-50">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
        <hr className="my-3" />
        <ul className="text-sm text-gray-200 space-x-3">
          <li className="inline-block">
            <a href="#" className="hover:text-gray-50">
              Tentang Kami
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="hover:text-gray-50">
              Karir
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="hover:text-gray-50">
              Ketentuan
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="hover:text-gray-50">
              Privasi
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
