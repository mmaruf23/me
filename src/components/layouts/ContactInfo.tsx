import React from 'react';
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../icons';

const ContactInfo = () => {
  return (
    <div className="md:block hidden">
      {/* KIRI */}
      <div className="absolute bottom-0 left-5 xl:left-10 flex flex-col items-center gap-4 h-80 w-10 text-white pt-2">
        <div className="flex flex-col gap-4">
          <GithubIcon />
          <LinkedinIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
        <div className="grow outline-1"></div>
      </div>

      {/* KANAN */}
      <div className="absolute bottom-0 right-5 xl:right-10 flex items-center gap-4 w-80 h-10 -translate-x-10 rotate-90 origin-bottom-right  text-white pl-2">
        <div className="font-mono hover:underline">
          <a href="mailto:maruuf82@gmail.com">maruuf82@gmail.com</a>
        </div>
        <div className="grow outline-1"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
