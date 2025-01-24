import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 px-4 min-h-screen bg-[#6A3E85]">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#D5A6F1] mb-8">About BookVerse</h1>
        
        <div className="bg-[#5D2F6D] rounded-lg p-8 mb-8">
          <p className="text-white text-lg leading-relaxed mb-6">
            QualtBooks is your premier destination for digital reading. We curate the finest collection 
            of e-books to bring knowledge and entertainment right to your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#5D2F6D] p-6 rounded-lg text-center">
            <BookOpen className="w-12 h-12 text-[#D5A6F1] mx-auto mb-4" />
            <h2 className="text-[#D5A6F1] text-xl font-semibold mb-2">10,000+ Books</h2>
            <p className="text-white">Extensive collection of digital books</p>
          </div>

          <div className="bg-[#5D2F6D] p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-[#D5A6F1] mx-auto mb-4" />
            <h2 className="text-[#D5A6F1] text-xl font-semibold mb-2">50,000+ Readers</h2>
            <p className="text-white">Growing community of book lovers</p>
          </div>

          <div className="bg-[#5D2F6D] p-6 rounded-lg text-center">
            <Globe className="w-12 h-12 text-[#D5A6F1] mx-auto mb-4" />
            <h2 className="text-[#D5A6F1] text-xl font-semibold mb-2">Global Access</h2>
            <p className="text-white">Read anywhere, anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;