import { Menu, Transition } from '@headlessui/react';
import Button from '../../atoms/Button';
import DropdownMenu from './DropdownMenu';

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

export default function AuthDropdown() {
  return (
    <Menu as="ul" className="relative inline-block text-left">
      <div>
        <Menu.Button className="px-5 py-2 inline-block text-base focus:outline-none rounded-full border-2 border-white hover:border-red-200 focus:border-red-200 hover:text-red-200 bg-transparent text-white ">
          Murid <i className="bi bi-caret-down inline-block ml-0.5"></i>
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-sans">
          {lists.map((list) => (
            <DropdownMenu
              key={list.link}
              icon={list.icon}
              link={list.link}
              title={list.title}
            />
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
