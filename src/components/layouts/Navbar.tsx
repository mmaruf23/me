import React from 'react';
import SegmentIcon from '../icons/SegmentIcon';

export const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 flex justify-between items-center px-10 py-6 shadow-lg bg-gray-800/10 backdrop-blur-xs text-white">
      <div className="border-x-2 rounded-md">
        <div className="border-x-2 mx-1 rounded-md">
          <div className="border-2 mx-1 rounded-md font-mono px-1">M.M</div>
        </div>
      </div>

      <div className="text-white">
        <SegmentIcon className="md:hidden" />
        <ul className="md:flex items-center hidden gap-5">
          <li>About</li>
          <li>Experince</li>
          <li>Contact</li>
          <li>
            <a href="#" className="border px-3 py-2 rounded-md">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
