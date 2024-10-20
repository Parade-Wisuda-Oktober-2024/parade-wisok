"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import merchbg from "../../../public/merchandise/merch-bg.png";

interface MerchCardProps {
  title: string;
  photo: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ title, photo }) => {
  useEffect(() => {
    AOS.init(
      {
        offset: 70,
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic'
      });
  }, []);

  return (
    <div className="relative w-[207px] h-[207px] sm:w-[353px] sm:h-[353px] group cursor-pointer" data-aos="fade-down" data-aos-delay="100">
      <div className="absolute inset-0 bg-[#FFE6B2] opacity-75 blur-md rounded-xl group-hover:opacity-100 transition-opacity duration-300"></div>
      <Image src={merchbg} alt="merchbg" fill className="object-cover z-10 rounded-xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 z-30">
        {/* Foto Merch */}
        <div className="w-3/5 aspect-square relative mb-8">
          <Image src={photo} alt="merch photo" fill className="object-cover rounded-lg" />
        </div>
        {/* Merch Title */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h1 className="font-header bg-gradient-to-b from-text-alt to-text shadow-rose-600 from-65% to-0% text-lg sm:text-2xl lg:text-4xl bg-clip-text text-transparent [text-shadow:2px_2px_15px_#F4D38E]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;