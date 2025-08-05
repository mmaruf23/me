import ContactInfo from '@/components/layouts/ContactInfo';
import { Navbar } from '@/components/layouts/Navbar';
import { AboutSection, HeroSection } from '@/components/ui';
import type { Cookie } from '@/types/cookie';
import type { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies: Cookie = req.cookies;

  if (cookies.isReported !== 'true') {
    await fetch(
      `https://api.telegram.org/bot${process.env
        .BOT_TOKEN_YUKINO!}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID!,
          text: 'Someone has accessed your portfolio!',
        }),
      }
    );
    res.setHeader(
      'Set-Cookie',
      `isReported=true; Path=/; HttpOnly; SameSite=Lax`
    );
  }

  return {
    props: {},
  };
};

export default Home;
