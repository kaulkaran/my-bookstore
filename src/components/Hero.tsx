import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#5D2F6D] overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#D5A6F1] mb-6">
          Discover the Magic of Reading
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Browse through our collection of handpicked e-books
        </p>
        <button  className="bg-[#8A47D0] text-white px-8 py-3 rounded-lg text-lg 
                         flex items-center mx-auto space-x-2 
                         hover:bg-[#5D2F6D] hover:scale-105 transition-all duration-300">
          <span>Explore Books</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Hero;