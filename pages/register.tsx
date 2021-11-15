import Link from 'next/link';
import Image from 'next/image';
import RegisterForm from '../src/components/molecules/Auth/RegisterForm';

export default function Register() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 font-sans flex justify-center items-center py-10 min-h-screen relative order-1 lg:order-2 lg:w-4/5 w-full">
        <div className="px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-5xl mb-3 text-primary">Belajar</h2>
            <p className="text-center text-primary">
              Daftarkan dirimu untuk belajar bersama di Benih Belajar.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
      <div className="w-full lg:w-2/5 bg-primary lg:flex items-center justify-center py-10 lg:min-h-screen text-center text-white font-sans px-16 order-2 lg:order-1 relative">
        <div>
          <Link href="/">
            <a className="absolute top-8 left-8 hidden lg:block">
              <Image
                src="/img/logo/logo-white.png"
                alt="logo benih"
                width={150}
                height={80}
                objectFit="contain"
              />
            </a>
          </Link>
          <h2 className="text-5xl mb-4">Sudah Daftar?</h2>
          <p className="mb-8">Sudah pernah membuat akun sebelumnya?</p>
          <Link href="/login">
            <a className="bg-transparent border-2 border-white py-3 px-10 rounded-lg hover:bg-white hover:text-primary transition-all duration-100 transform hover:-translate-y-1 inline-block">
              Masuk
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
