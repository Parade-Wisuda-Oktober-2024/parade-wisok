// src/pages/page.tsx
import React from "react";
import FAQItem from "./FAQitem";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "FAQ 1",
      answer:
        "Jawaban 1",
    },
    {
      question: "FAQ 2",
      answer:
        "Jawaban 2",
    },
    {
      question: "FAQ 3",
      answer:
        "jawaban 3",
    },
  ];

  return (
    <main className="z-10 flex h-max w-[80%] flex-col items-center md:w-screen">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </main>
  );
};

export default FAQPage;