import React from 'react';
import { SegmentIcon } from '../icons';
import { NavigationItem } from '@/types/navigation';
import { NavbarItem } from '../ui';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, fadeInVariantsUp } from '@/utils/variants';

export const Navbar = () => {
  const navigation: NavigationItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <div className="sticky z-10 top-0 flex justify-between items-center px-10 py-6 shadow-lg bg-indigo-950/10 backdrop-blur-xs text-white">
      <Link href="/">
        <div className="border-x-2 rounded-md border-primary">
          <div className="border-x-2 mx-1 rounded-md border-blue-400">
            <span className="border-2 border-primary mx-1 rounded-md font-mono px-1 text-white">
              M.M
            </span>
          </div>
        </div>
      </Link>

      <div className="text-white">
        <SegmentIcon className="md:hidden text-primary" size={30} />
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="md:flex items-center hidden gap-5"
        >
          {navigation.map((item, index) => (
            <motion.li key={index} variants={fadeInVariantsUp}>
              <NavbarItem {...item} index={index} />
            </motion.li>
          ))}

          <motion.li variants={fadeInVariantsUp} className="text-primary">
            <a
              href="/CV - Muhammad Maruf.pdf"
              className="border px-3 py-2 rounded-md"
            >
              Resume
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};
