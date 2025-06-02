import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
} from '@/components/ui';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
