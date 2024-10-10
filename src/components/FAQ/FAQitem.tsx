"use client";

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => {
    return (
        <div className="md:w-[70%] w-[80%] flex flex-col items-center justify-center rounded-xl border-[3px] border-[#9803f591] bg-gradient-to-b from-[#10092b4a] to-[#03010823] mb-4">            
                <AccordionItem className="w-full" value={value}>
                    <AccordionTrigger className="px-5 text-2xl font-[Fraunces] text-[#D9D9D9] font-bold">{question}</AccordionTrigger>
                        <AccordionContent className="px-5 font-[Fraunces] text-[#D9D9D9]">
                        {answer}
                        </AccordionContent>
                </AccordionItem>
        </div>
    );
};

export default FAQItem;

