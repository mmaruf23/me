import AboutSection from '@/components/ui/AboutSection';
import ContactSection from '@/components/ui/ContactSection';
import ExperienceSection from '@/components/ui/ExperienceSection';
import HeroSection from '@/components/ui/HeroSection';
import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
