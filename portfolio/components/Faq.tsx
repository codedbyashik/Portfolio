// components/Faq.tsx

"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "I provide full-stack web development services including frontend, backend, and API integration.",
  },
  {
    question: "What technologies do you use?",
    answer: "I primarily work with React, Next.js, Tailwind CSS, Node.js, and MongoDB.",
  },
  {
    question: "Can I hire you for freelance work?",
    answer: "Absolutely! Feel free to contact me through the contact section or email.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left text-lg font-medium flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-all duration-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
