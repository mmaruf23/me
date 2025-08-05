import { containerVariants, fadeInVariantsDown } from '@/utils/variants';
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-[800px] h-svh max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full flex items-center">
      <div className="text-white h-[60%] md:h-[70%] xl:h-[50%] px-8 sm:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="font-serif"
        >
          <motion.p
            variants={fadeInVariantsDown}
            className="md:text-xl xl:text-2xl text-primary"
          >
            Hi, my name is
          </motion.p>
          <motion.p
            variants={fadeInVariantsDown}
            className="text-4xl sm:text-5xl md:6xl lg:text-7xl font-semibold py-4 lg:py-6"
          >
            Muhammad Ma&apos;ruf
          </motion.p>
          <motion.p
            variants={fadeInVariantsDown}
            className="text-2xl sm:text-4xl md:text-5xl text-white/80"
          >
            I&apos;m a Junior Developer
          </motion.p>
          <motion.p
            variants={fadeInVariantsDown}
            className="text-sm sm:text-base md:text-lg lg:text-xl lg:w-2xl mt-4 lg:mt-6 text-white/80"
          >
            A highly motivated junior developer with a strong passion for
            technology. Eager to contribute as a Backend Engineer, Fullstack
            Developer, or in other technical roles.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
