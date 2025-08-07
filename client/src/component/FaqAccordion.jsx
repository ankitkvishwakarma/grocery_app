import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import BlogSection from './BlogSection';

const faqData = [
  {
    question: "Are the products fresh and of high quality?",
    answer: "Yes, we ensure all products are sourced from trusted vendors and delivered fresh every day.",
  },
  {
    question: "What are your delivery hours?",
    answer: "We deliver from 8:00 AM to 10:00 PM on all days including weekends.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer: "Yes, we regularly run discount campaigns. Stay tuned to our homepage!",
  },
  {
    question: "How can I provide feedback about my experience?",
    answer: "You can fill out the feedback form under your account page or email us directly.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm font-medium">News & Blogs</p>
        <h2 className="text-3xl font-bold">
          Our Latest <span className="text-green-600">News & Blogs</span>
        </h2>
      </div>

      <div className="space-y-4">
        <BlogSection/>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                isOpen ? "bg-green-600 text-white" : "bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between transition duration-300"
              >
                <span className="font-medium">{item.question}</span>
                {isOpen ? <FaMinus /> : <FaPlus />}
              </button>

              {/* Animated Answer */}
              <div
                className={`transition-all duration-500 ease-in-out px-6 text-sm ${
                  isOpen ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqAccordion;
