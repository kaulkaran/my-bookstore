import BookCard from './BookCard';

const books = [
  {
    id: 1,
    title: "Hide and Seek",
    author: "Karan Kaul",
    description: "How does your night go from a game of Hide and Seek....",
    coverUrl: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1735221945/special/h3gqwn6zyxrrwi2lfioc.png",
    price: "₹499",
    pdfLink: "https://drive.google.com/uc?export=download&id=16DBfgFH9qhKiJyV0YhLKfZnldoACTuW_"
  },
  {
    id: 2,
    title: "Hide and Seek 2",
    author: "Karan Kaul",
    description: "My name is Emily. Two years ago I lost everything. I thought I could start a new life...",
    coverUrl: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1735221945/special/kuz3qvfr8vznozmksble.png",
    price: "₹599",
    pdfLink: "https://drive.google.com/uc?export=download&id=1nvOIQhP_AO960BFlDE5j-zPRv5WycxQU"
  },
  {
    id: 3,
    title: "Hide and Seek 3",
    author: "Karan Kaul",
    description: "Tori and her friends use an ouija board at the ruins of Mr. Harmon's old mansion...",
    coverUrl: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1735221945/special/pgty37tsudgxjv9lnrbw.png",
    price: "₹699",
    pdfLink: "https://drive.google.com/uc?export=download&id=16KrXuin0tlKm4GXOZHTVNFxDnHYRcqMG"
  }
];

const BooksSection = () => {
  const handleBuyNow = (bookId: number) => {
    // Handle buy now action
    console.log('Buy now clicked for book:', bookId);
  };

  return (
    <div className="bg-[#6A3E85] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#D5A6F1] mb-8 text-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onBuyNow={() => handleBuyNow(book.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksSection;