import React from 'react';
import Home from '@/components/Home';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Resume from '@/components/Resume';

const HomePage = () => {
  return (
    <main className="bg-primary-100 h-full w-full relative ">
      <Home />
      <Features />
      <Portfolio />
      <Resume />
    </main>
  )
}

export default HomePage;
