import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Genova AI?",
      answer: "Genova AI is a state-of-the-art AI image generator that uses advanced machine learning to create stunning, high-quality images from text descriptions."
    },
    {
      question: "How do I use Genova AI?",
      answer: "Simply enter a text description of the image you want to create, select your preferred style and settings, and let our AI do the rest. You'll receive your generated image within seconds."
    },
    {
      question: "What types of images can I create?",
      answer: "You can create a wide variety of images including landscapes, portraits, abstract art, product visualizations, and more. The possibilities are limited only by your imagination."
    },
    {
      question: "Are the generated images free to use?",
      answer: "Yes, all images generated through Genova AI are free for personal and commercial use. You own the rights to any images you create using our platform."
    }
  ];

  return (
    <section className="py-16 px-4" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-white">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-purple-400" />
              ) : (
                <FiChevronDown className="text-purple-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-800/30">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
