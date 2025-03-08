"use client"; // Mark as a client component for interactivity
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "What types of car parts do you offer?",
      answer:
        "We offer a wide range of car parts, including engine components, brake systems, suspension parts, and more. All our products are sourced from trusted manufacturers.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through our website by adding products to your cart and completing the checkout process. Alternatively, you can contact our sales team for assistance.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused and undamaged products. Please contact our support team to initiate a return.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@dsg7.com or by calling +880 1234 567890. We're available 24/7 to assist you.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            {/* FAQ Header */}
            <div
              className="p-4 flex justify-between items-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-gray-600">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {/* FAQ Answer */}
            {activeIndex === index && (
              <div className="p-4 border-t bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;