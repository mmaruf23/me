'use client';
import { NavigationItem } from '@/types/navigation';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 left-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <Link href={'/'} className="flex items-center p-2 font-serif">
                <span className="text-white text-lg font-semibold hover:border-b">
                  MR.F
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-300 ease-in"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <DisclosureButton className="text-white p-2 rounded-md focus:outline-none">
                  {open ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="md:hidden bg-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-white"
              >
                {item.label}
              </Link>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
