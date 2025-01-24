import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookCard from './BookCard';
import { books } from '../data/books';

const ScrollableBooks = () => {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('books-scroll');
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <h2 className="text-2xl font-bold text-[#D5A6F1] mb-6 px-4">Featured Books</h2>
      
      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#5D2F6D]/80 p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-[#D5A6F1]" />
        </button>

        <div
          id="books-scroll"
          className="flex overflow-x-auto scrollbar-hide gap-6 px-4 py-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {books.map((book) => (
            <div key={book.id} className="flex-none w-72">
              <BookCard {...book} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#5D2F6D]/80 p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="w-6 h-6 text-[#D5A6F1]" />
        </button>
      </div>
    </div>
  );
}

export default ScrollableBooks;