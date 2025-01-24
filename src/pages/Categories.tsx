import React from 'react';

const categories = [
  { name: 'Fiction', count: 145 },
  { name: 'Non-Fiction', count: 98 },
  { name: 'Science Fiction', count: 76 },
  { name: 'Mystery', count: 82 },
  { name: 'Self-Help', count: 65 },
  { name: 'Business', count: 54 }
];

const Categories = () => {
  return (
    <div className="pt-20 px-4 min-h-screen bg-[#6A3E85]">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#D5A6F1] mb-8">Book Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="bg-[#5D2F6D] p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-[#D5A6F1] text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-white">{category.count} Books</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;