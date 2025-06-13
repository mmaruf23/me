'use client';

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
} from '@/components/ui';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    fetch('/api/info').then((res) => res.text);
  }, []);
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
