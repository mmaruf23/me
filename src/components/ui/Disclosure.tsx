'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

export default function DisclosureComponent() {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="w-72 mx-auto border rounded-lg p-2">
          <DisclosureButton className="flex items-center justify-between w-full p-2 bg-gray-200 rounded-md">
            <span>Click me</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                open ? 'rotate-180' : ''
              }`}
            />
          </DisclosureButton>
          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <DisclosurePanel className="p-2 bg-gray-100">
              Ini adalah kontennya.
            </DisclosurePanel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}
