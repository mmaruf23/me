import { NavigationItem } from '@/types/navigation';
import React from 'react';

interface NavigationItemWithIndex extends NavigationItem {
  index: number;
}

const NavbarItem = ({ href, label, index }: NavigationItemWithIndex) => {
  const i = (index + 1).toString().padStart(2, '0');
  return (
    <a
      className="hover:underline underline-offset-4 hover:text-gray-300"
      href={href}
    >
      <span className="text-secondary">{i + '. '}</span>
      {label}
    </a>
  );
};

export default NavbarItem;
