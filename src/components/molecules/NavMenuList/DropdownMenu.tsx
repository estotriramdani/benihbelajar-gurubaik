import { Menu } from '@headlessui/react';
import Link from 'next/link';

interface DropdownMenuProps {
  title: string;
  link: string;
  icon: string;
}

export default function DropdownMenu(props: DropdownMenuProps) {
  const { icon, link, title } = props;
  return (
    <li className="px-1 py-1 ">
      <Menu.Item>
        <Link href={link}>
          <a className="text-gray-900 group hover:text-white hover:bg-red-500 transition duration-150 flex rounded-md items-center w-full px-2 py-2 text-sm">
            <i className={`bi bi-${icon} inline-block mr-3`}></i> {title}
          </a>
        </Link>
      </Menu.Item>
    </li>
  );
}
