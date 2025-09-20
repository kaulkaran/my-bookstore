import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
  book: {
    title: string;
    price: string;
    pdfLink: string;
  } | null;
  onClose: () => void;
}

const PaymentModal = ({ book, onClose }: PaymentModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  if (!book) return null;

  // Handle payment through Razorpay
  const handlePayment = async () => {
    const amountInPaise = parseFloat(book.price.replace('₹', '').replace(',', '')) * 100; // Convert to paise (INR in 100 units)
    console.log('Payment Amount (in paise):', amountInPaise);

    const options = {
      key: 'rzp_live_RGw7xtb4d9jPJ0', // Your Razorpay key
      amount: amountInPaise, // Razorpay expects the amount in paise (1 INR = 100 paise)
      currency: 'INR',
      name: book.title,
      description: 'Payment for ' + book.title,
      image: 'https://yourwebsite.com/logo.png', // Optional: Add your logo
      handler: function (response: any) {
        console.log('Razorpay Payment Response:', response);

        if (response && response.razorpay_payment_id) {
          console.log('Payment successful:', response);
          alert('Payment Successful!');
          onClose(); // Close the modal after successful payment
        } else {
          console.error('Payment failed, no payment ID received:', response);
          alert('Payment failed. Please try again.');
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: 'Address for payment processing',
      },
      theme: {
        color: '#5D2F6D', // Set the theme color for the Razorpay modal
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', function (response: any) {
      console.error('Payment Failed:', response);
      alert('Payment Failed. Error: ' + response.error.description);
    });
    razorpay.open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting payment form with data:', formData);
    handlePayment();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#5D2F6D] p-8 rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#D5A6F1] text-2xl font-semibold">Payment Details</h2>
          <button onClick={onClose} className="text-white hover:text-[#D5A6F1]">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-white text-lg mb-2">Order Summary</h3>
          <p className="text-[#D5A6F1]">{book.title}</p>
          <p className="text-white font-bold mt-2">{book.price}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#D5A6F1] mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white text-[#5D2F6D]"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-[#D5A6F1] mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white text-[#5D2F6D]"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-[#D5A6F1] mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white text-[#5D2F6D]"
              placeholder="9876543210"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8A47D0] text-white py-3 rounded-lg hover:bg-[#5D2F6D] transition-all duration-300"
          >
            Pay {book.price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
