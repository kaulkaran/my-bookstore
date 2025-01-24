import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import PaymentModal from './PaymentModal';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  price: string;
  pdfLink: string;
}

const BookCard = ({ title, author, description, coverUrl, price, pdfLink }: BookCardProps) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <div className="bg-[#5D2F6D] rounded-lg overflow-hidden shadow-lg hover:scale-105 
                    transition-all duration-300 hover:shadow-purple-400/20">
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-[#D5A6F1] text-xl font-semibold mb-2">{title}</h3>
          <p className="text-[#B0B0B0] mb-2">{author}</p>
          <p className="text-white mb-4 line-clamp-3">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-[#D5A6F1] text-lg font-bold">{price}</span>
            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-[#8A47D0] text-white px-4 py-2 rounded-lg 
                       flex items-center space-x-2
                       hover:bg-[#5D2F6D] transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          book={{ title, price, pdfLink }}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </>
  );
};

export default BookCard;