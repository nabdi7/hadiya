"use client"
import React from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday through Friday from 7:00 AM to 6:00 PM."
    },
    {
      question: "What is your teacher-to-child ratio?",
      answer: "We maintain low ratios: 1:4 for infants, 1:6 for toddlers, and 1:8 for preschoolers."
    },
    {
      question: "Do you provide meals?",
      answer: "Yes, we provide nutritious breakfast, lunch, and two snacks daily."
    },
    {
      question: "What is your sick child policy?",
      answer: "Children must be fever-free for 24 hours without medication before returning."
    },
    {
      question: "How do you handle allergies?",
      answer: "We maintain detailed allergy plans and our staff is trained in allergy management."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? 
                  <Minus className="text-[#A9B5F9]" /> : 
                  <Plus className="text-[#A9B5F9]" />
                }
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;