import React from 'react';
import { motion } from 'framer-motion'; // Jangan lupa import motion
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../icons';
import { fadeInVariantsLeft, fadeInVariantsRight } from '@/utils/variants';

const ContactInfo = () => {
  return (
    <motion.div
      className="md:block hidden"
      initial="hidden" // Terapkan kondisi awal
      animate="visible" // Terapkan kondisi akhir saat komponen muncul
    >
      {/* KIRI */}
      <motion.div
        className="absolute bottom-0 left-5 xl:left-10 flex flex-col items-center gap-4 h-80 w-10 text-white pt-2"
        variants={fadeInVariantsLeft} // Terapkan varian animasi ke elemen ini
      >
        <div className="flex flex-col gap-4">
          <a href="https://github.com/mmaruf23">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/mma-ruf/">
            <LinkedinIcon />
          </a>
          <a href="https://facebook.com/mmaruf.82">
            <FacebookIcon />
          </a>
          <a href="https://instagram.com/mmaruf.82">
            <InstagramIcon />
          </a>
        </div>
        <div className="grow outline-1"></div>
      </motion.div>

      {/* KANAN */}
      <motion.div
        className="absolute bottom-0 right-5 xl:right-10 flex items-center gap-4 w-80 h-10 -translate-x-10 rotate-90 origin-bottom-right text-white pl-2"
        variants={fadeInVariantsRight} // Terapkan varian yang sama ke elemen kanan
      >
        <div className="font-mono hover:underline">
          <a href="mailto:maruuf82@gmail.com">maruuf82@gmail.com</a>
        </div>
        <div className="grow outline-1"></div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
