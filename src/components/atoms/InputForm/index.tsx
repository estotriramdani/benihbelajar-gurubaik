import { MouseEvent, useState } from 'react';
interface InputFormProps {
  placeholder: string;
  id: string;
  type?: 'password' | 'text';
  value: string | number;
  isPassword?: boolean;
  onChange?: (e: MouseEvent<HTMLInputElement> | any) => void;
}

export default function InputForm(props: InputFormProps) {
  const { placeholder, id, type, value, isPassword, onChange } = props;

  const [formType, setFormType] = useState(type);

  const showPassword = () => {
    if (formType === 'password') setFormType('text');
    if (formType === 'text') setFormType('password');
  };

  return (
    <div className="focus-within:ring-2 ring-gray-400 ring-offset-4 flex justify-between bg-gray-200 rounded-lg px-6">
      <input
        value={value}
        type={formType}
        placeholder={placeholder}
        id={id}
        className="py-3 focus:outline-none block flex-1 bg-transparent placeholder-gray-600"
        onChange={onChange}
      />
      {isPassword ? (
        <button
          className="text-center w-7"
          type="button"
          onClick={showPassword}
        >
          <i
            className={`bi bi-eye${formType === 'text' ? '-slash' : ''}-fill`}
          ></i>
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
