import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-[800px] h-svh max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full flex items-center">
      <div className="text-white h-[60%] md:h-[70%] xl:h-[50%] px-8 sm:px-10">
        <div className="font-serif">
          <p className="md:text-xl xl:text-2xl">Hi, my name is</p>
          <p className="text-4xl sm:text-5xl md:6xl lg:text-7xl font-semibold py-4 lg:py-6">
            Muhammad Ma&apos;ruf
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl text-white/80">
            I&apos;m a Fullstack Developer
          </p>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl lg:w-2xl mt-4 lg:mt-6 text-white/80">
          Passionate Web Developer with experience in building dynamic and
          response web application. Skilled in PHP (Laravel), Next.js, Spring
          Framework and other modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
