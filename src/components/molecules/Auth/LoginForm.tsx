import { MouseEvent, useState } from 'react';
import Link from 'next/link';
import Gap from '../../atoms/Gap';
import InputForm from '../../atoms/InputForm';

export default function LoginForm() {
  const [dataForm, setDataForm] = useState({
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
    console.log(dataForm);
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
        Masuk
      </button>
    </form>
  );
}