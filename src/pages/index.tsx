import ContactInfo from '@/components/layouts/ContactInfo';
import { Navbar } from '@/components/layouts/Navbar';
import { AboutSection, HeroSection } from '@/components/ui';
import React from 'react';

const Home = () => {
  return (
    <div className={`relative h-svh flex flex-col bg-base-100`}>
      <div className="flex-1 overflow-y-scroll scrollbar-hide scroll-smooth">
        <Navbar />
        <ContactInfo />
        <div className="flex flex-col items-center">
          <HeroSection />
          <AboutSection />
          {/* <ExperienceSection /> */}
          {/* <ContactSection /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
