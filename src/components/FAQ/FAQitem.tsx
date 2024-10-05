"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="md:w-[70%] w-[80%] flex flex-col items-center justify-center rounded-xl border-[3px] border-[#9803f591] bg-gradient-to-b from-[#10092b4a] to-[#03010823] mb-4">
            <Collapsible open={isOpen} onOpenChange={toggleOpen} className="w-full">
                <CollapsibleTrigger className="w-full px-[3em] flex flex-row items-center justify-between cursor-pointer">
                    <p className="text-2xl opacity-100">{question}</p>
                    <img 
                        src={isOpen ? '/keyboard_arrow_up.png' : '/keyboard_arrow_down.png'} 
                        alt="Toggle" 
                    />
                </CollapsibleTrigger>
                <CollapsibleContent className="opacity-100 w-full px-[3em] pb-[1em] flex flex-col items-start">
                    <div>{answer}</div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
};

export default FAQItem;

