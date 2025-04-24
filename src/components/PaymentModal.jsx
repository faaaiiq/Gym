import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCreditCard, FaLock } from 'react-icons/fa';

const PaymentModal = ({ isOpen, onClose, plan, onSuccess }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    try {
      // Replace with actual payment processing
      const response = await fetch('/api/payments/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...paymentDetails,
          amount: plan.price,
          subscriptionType: plan.name.toLowerCase()
        })
      });

      if (response.ok) {
        onSuccess();
        onClose();
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Complete Payment</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Plan</span>
                <span className="text-white font-semibold">{plan.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Amount</span>
                <span className="text-white font-semibold">${plan.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    maxLength="19"
                  />
                  <FaCreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    maxLength="5"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">CVV</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      maxLength="3"
                    />
                    <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="name"
                  value={paymentDetails.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg font-semibold ${
                  isProcessing
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                } text-white transition-colors`}
              >
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal; 