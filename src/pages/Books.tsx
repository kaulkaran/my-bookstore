import React from 'react';
import CategoryBooks from '../components/CategoryBooks';

const Books = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#6A3E85]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#D5A6F1] mb-8 px-4">Browse Books</h1>
        <CategoryBooks />
      </div>
    </div>
  );
};

export default Books;