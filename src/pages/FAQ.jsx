import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your membership options?',
      answer: 'We offer various membership options including monthly, quarterly, and annual plans. Each plan comes with different benefits and access levels. You can find detailed information about our membership options on the Membership page.',
    },
    {
      question: 'Do you offer personal training sessions?',
      answer: 'Yes, we offer personal training sessions with our certified trainers. You can book sessions through your member dashboard or by contacting our front desk. Our trainers specialize in different areas including strength training, cardio, and rehabilitation.',
    },
    {
      question: 'What are your operating hours?',
      answer: 'Our gym is open Monday through Friday from 6:00 AM to 10:00 PM, Saturday from 7:00 AM to 8:00 PM, and Sunday from 8:00 AM to 6:00 PM. We are closed on major holidays.',
    },
    {
      question: 'Do you have locker rooms and showers?',
      answer: 'Yes, we provide locker rooms with showers for both men and women. Lockers are available for daily use, and you can rent a locker for long-term use. Please bring your own lock for daily use.',
    },
    {
      question: 'What equipment do you have available?',
      answer: 'Our gym is equipped with state-of-the-art cardio machines, strength training equipment, free weights, and functional training areas. We also have dedicated spaces for group classes and personal training.',
    },
    {
      question: 'Do you offer group fitness classes?',
      answer: 'Yes, we offer a variety of group fitness classes including yoga, cycling, HIIT, and more. You can view the class schedule and book classes through your member dashboard.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Memberships can be cancelled with a 30-day notice. Personal training sessions can be cancelled up to 24 hours before the scheduled time without penalty. Please refer to our terms and conditions for detailed information.',
    },
    {
      question: 'Do you have parking available?',
      answer: 'Yes, we provide free parking for our members. The parking lot is located behind the building and is accessible 24/7 for members with valid access cards.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/faq-hero.jpg)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Find answers to common questions about our gym
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {openIndex === index ? (
                      <FaChevronUp className="text-indigo-600" />
                    ) : (
                      <FaChevronDown className="text-indigo-600" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            If you can't find the answer you're looking for, please feel free to contact us.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 