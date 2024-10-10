// src/pages/page.tsx
import React from "react";
import FAQItem from "./FAQitem";
import {
  Accordion,
} from "../ui/accordion";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "FAQ 1",
      answer:
        "Jawaban 1",
      value: "item-1"
    },
    {
      question: "FAQ 2",
      answer:
        "Jawaban 2",
      value: "item-2"
    },
    {
      question: "FAQ 3",
      answer:
        "jawaban 3",
      value: "item-3"
    },
  ];

  return (
    <main className="z-10 flex h-max w-[80%] flex-col items-center md:w-screen">
      <Accordion className="w-full flex flex-col items-center" type="single" collapsible>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} value={faq.value}/>
        ))}
      </Accordion>
    </main>
  );
};

export default FAQPage;