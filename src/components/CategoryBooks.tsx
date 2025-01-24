import React, { useState } from 'react';
import BookCard from './BookCard';
import { books } from '../data/books';

const categories = Array.from(new Set(books.map(book => book.category)));

const CategoryBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBooks = selectedCategory
    ? books.filter(book => book.category === selectedCategory)
    : books;

  return (
    <div className="py-8 px-4">
      <div className="mb-8 flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full transition-all duration-300 
                    ${!selectedCategory 
                      ? 'bg-[#8A47D0] text-white' 
                      : 'bg-[#5D2F6D] text-[#D5A6F1]'}`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 
                      ${selectedCategory === category 
                        ? 'bg-[#8A47D0] text-white' 
                        : 'bg-[#5D2F6D] text-[#D5A6F1]'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;