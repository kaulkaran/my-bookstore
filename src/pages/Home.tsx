import React from 'react';
import Hero from '../components/Hero';
import ScrollableBooks from '../components/ScrollableBooks';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollableBooks />
    </div>
  );
};

export default Home;