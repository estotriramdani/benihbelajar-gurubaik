import Image from 'next/dist/client/image';

export default function HeaderMobile() {
  return (
    <>
      <div className="bg-gradient-to-b from-primary to-red-500 flex justify-between py-3 items-center shadow">
        <Image
          src="/img/logo/logo-white.png"
          alt=""
          width={`100%`}
          height={30}
          objectFit="contain"
        />
        <p className="text-gray-50 mr-4">#passion</p>
      </div>
      <div className="h-px bg-primary w-full mt-0.5" />
    </>
    // <div className="flex justify-between py-3 items-center flex-col shadow font-sans p-3 h-screen">
    //   <h1 className="text-gray-100 text-2xl text-center">
    //     Selamat Datang di <br />
    //     <strong>Benih Belajar</strong>
    //   </h1>
    //   <p>
    //     Passionmu akan menentukan masa depanmu. Yuk, tentukan passionmu hari
    //     ini!
    //   </p>
    // </div>
  );
}
