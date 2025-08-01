import React from 'react';
import { SegmentIcon } from '../icons';
import { NavigationItem } from '@/types/navigation';
import { NavbarItem } from '../ui';
import Link from 'next/link';

export const Navbar = () => {
  const navigation: NavigationItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <div className="sticky z-10 top-0 flex justify-between items-center px-10 py-6 shadow-lg bg-indigo-950/10 backdrop-blur-xs text-white">
      <div className="border-x-2 rounded-md border-blue-400">
        <div className="border-x-2 mx-1 rounded-md border-blue-400">
          <Link
            href="/"
            className="border-2 mx-1 rounded-md font-mono px-1 text-white"
          >
            M.M
          </Link>
        </div>
      </div>

      <div className="text-white">
        <SegmentIcon className="md:hidden" size={30} />
        <ul className="md:flex items-center hidden gap-5">
          {navigation.map((item, index) => (
            <NavbarItem key={index} {...item} index={index} />
          ))}

          <li>
            <a
              href="/CV - Muhammad Maruf.pdf"
              className="border px-3 py-2 rounded-md"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
