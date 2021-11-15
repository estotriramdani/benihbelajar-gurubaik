import { MouseEvent, useState } from 'react';
import Link from 'next/link';
import Gap from '../../atoms/Gap';
import InputForm from '../../atoms/InputForm';
import { toast } from 'react-toastify';

export default function RegisterForm() {
  const [dataForm, setDataForm] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const handleChangeForm = (e: MouseEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value, id },
    } = e;
    setDataForm({
      ...dataForm,
      [id]: value,
    });
  };

  const handleSubmitForm = () => {
    if (
      dataForm.email === '' ||
      dataForm.password === '' ||
      dataForm.fullname === ''
    ) {
      toast.error('Semua kolom harus diisi!');
    } else {
      toast.success(`Nantikan kelanjutannya`);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm();
      }}
      className="mt-8"
    >
      <InputForm
        id="fullname"
        placeholder="Nama Lengkap"
        value={dataForm.fullname}
        onChange={(e) => handleChangeForm(e)}
      />
      <Gap className="my-4" />
      <InputForm
        type="text"
        id="email"
        placeholder="Alamat Email"
        value={dataForm.email}
        onChange={(e) => handleChangeForm(e)}
      />
      <Gap className="my-4" />
      <InputForm
        id="password"
        placeholder="Password"
        value={dataForm.password}
        isPassword
        type="password"
        onChange={(e) => handleChangeForm(e)}
      />
      <Link href="/forgot-password">
        <a className="block text-right text-gray-300 underline mt-2">
          Lupa Password?
        </a>
      </Link>
      <Gap className="my-6" />
      <button
        type="submit"
        className="bg-primary border-2 border-primary text-white py-3 px-10 rounded-lg hover:text-white hover:bg-primary transition-all duration-100 transform hover:-translate-y-1 block mx-auto"
      >
        Selanjutnya
      </button>
    </form>
  );
}
