import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Title from "~/components/Merch/MerchandiseTitle";
import Image from "next/image";
import { Fraunces } from "next/font/google";

// Fraunces Font
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
});
const MerchandiseCarousel = () => {
  return (
    <div
      className={`flex h-screen w-full flex-col items-center justify-center p-8 ${fraunces.className}`}
    >
      {/* Header */}
      <div className="relative mb-10 flex flex-col items-center">
        <Image
          src="/VIS-11.png"
          alt="Left Icon"
          width={236}
          height={111}
          className="absolute left-[-4rem] top-[6rem] -translate-x-1/2 rotate-180 transform"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 140, 217, 0.8))",
          }}
        />
        <Image
          src="/VIS-11.png"
          alt="Right Icon"
          width={369}
          height={174}
          className="absolute right-[-3.5rem] top-[1rem] translate-x-1/2 transform"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 140, 217, 0.8))",
          }}
        />

        <div className="flex flex-col items-center">
          <Title>GET YOUR</Title>
          <Title>MERCHANDISE</Title>
        </div>
      </div>

      {/* Carousel */}
      <Carousel className="w-full max-w-[400px]">
        <CarouselContent className="h-[416px]">
          {[...Array(5)].map((_, index) => (
            <CarouselItem key={index}>
              <div className="rounded-lg p-1">
                <div
                  className="flex h-[400px] w-full items-end justify-center rounded-[1.7rem] bg-[url(/merchandise/background-merch.png)] bg-cover bg-center bg-no-repeat pb-12 text-[2rem] font-semibold text-[#FEE59A] ring-4 ring-black ring-opacity-40"
                  style={{ textShadow: "4.71px 7.07px 20px #FFBF51" }}
                >
                  &lt;Merchandise&gt;
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous/Next Button */}
        <CarouselPrevious className="flex items-center justify-center">
          <Image
            src="/testbutton.png"
            alt="Previous"
            width={40}
            height={40}
            objectFit="contain"
          />
        </CarouselPrevious>

        <CarouselNext className="flex items-center justify-center">
          <Image
            src="/testbutton.png"
            alt="Next"
            width={40}
            height={40}
            objectFit="contain"
          />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default MerchandiseCarousel;
