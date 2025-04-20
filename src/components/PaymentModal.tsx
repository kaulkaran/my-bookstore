import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from 'emailjs-com';

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

  // Initialize EmailJS with your public key
  emailjs.init('0qK0_znp9dTfdruuL'); // Replace with your actual public key

  // Handle payment through Razorpay
  const handlePayment = async () => {
    const options = {
      key: 'rzp_live_k2ACXia3TFmEKC', // Your Razorpay key
      amount: parseFloat(book.price.replace('₹', '')) * 100, // Razorpay expects the amount in paise (1 INR = 100 paise)
      currency: 'INR',
      name: book.title,
      description: 'Payment for ' + book.title,
      image: 'https://yourwebsite.com/logo.png', // Optional: Add your logo
      handler: function (response: any) {
        console.log('Payment successful:', response);


       
        // Call EmailJS to send the PDF link after successful payment
        sendEmail(formData.email, book.pdfLink);
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
    razorpay.open();
  };

  // Send Email using EmailJS
  const sendEmail = (userEmail: string, pdfLink: string) => {
    const templateParams = {
      user_email: userEmail,
      book_title: book.title,
      book_link: book.pdfLink,
    };

   


    emailjs.send(
      'service_ovp0q3n', // Replace with your EmailJS service ID
      'template_vpo4wnh', // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Payment Successful! Check your email for the book link.');
      onClose(); // Close the modal after payment
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      alert('Payment successful, but failed to send the email. Please try again later.');
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
