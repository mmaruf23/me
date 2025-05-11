import React from 'react';

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-6 border-b bg-gray-800 text-white">
      <div>Home</div>
      <div>
        <ul className="flex gap-5">
          <li>About</li>
          <li>Experince</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
