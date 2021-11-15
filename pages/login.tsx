import Link from 'next/link';
import Image from 'next/image';
import Gap from '../src/components/atoms/Gap';
import LoginForm from '../src/components/molecules/Auth/LoginForm';

export default function Login() {
  return (
    <div className="flex">
      <div className="flex-1 font-sans flex justify-center items-center min-h-screen w-full">
        <div>
          <h2 className="text-center text-5xl mb-3 text-primary">Masuk</h2>
          <p className="text-center text-primary">
            Masuk sebagai siswa untuk melanjutkan.
          </p>
          <LoginForm />
        </div>
      </div>
      <div className="w-2/5 bg-primary hidden lg:flex items-center justify-center min-h-screen text-center text-white font-sans px-16">
        <div>
          <h2 className="text-5xl mb-4">Halo!</h2>
          <p className="mb-8">
            Belum punya akun? Yuk, buat akun terlebih dahulu sebelum belajar
            bersama!
          </p>
          <Link href="/register">
            <a className="bg-transparent border-2 border-white py-3 px-10 rounded-lg hover:bg-white hover:text-primary transition-all duration-100 transform hover:-translate-y-1 inline-block">
              Daftar
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
