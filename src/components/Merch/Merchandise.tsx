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
import {Fraunces} from "next/font/google";
import SeparatorLanding from "~/components/separator-landing";

// Fraunces Font
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
});

const MerchandisePage = () => {
  return (
    <div
      className={`flex relative min-h-screen w-full flex-col items-center justify-center bg-[url(/merchandise/background-merch.png)] bg-cover bg-no-repeat p-8 ${fraunces.className} md:py-20`}
    >
      {/* Header */}
      <div className="relative flex flex-col items-center md:mb-10">
        <Image
          src="/VIS-11.png"
          alt="Left Icon"
          width={236}
          height={111}
          className="absolute left-[-2rem] top-[3rem] h-[76px] w-[118px] -translate-x-1/2 rotate-180 transform md:left-[-4rem] md:top-[6rem] md:h-[111px] md:w-[236px]"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 140, 217, 1))",
          }}
        />
        <Image
          src="/VIS-11.png"
          alt="Right Icon"
          width={369}
          height={174}
          className="absolute right-[-2rem] top-[1rem] h-[107px] w-[202px] translate-x-1/2 transform md:right-[-3.5rem] md:top-[1rem] md:h-[174px] md:w-[369px]"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 140, 217, 1))",
          }}
        />
        <div className="flex flex-col items-center">
          <Title>GET YOUR</Title>
          <Title>MERCHANDISE</Title>
        </div>
      </div>
      {/* Carousel */}
      <div className="relative flex w-full items-center justify-center">
        <Carousel className="w-full max-w-[250px] md:max-w-[416px]">
          <CarouselContent>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            {[...Array(5)].map((_, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square overflow-hidden rounded-[1.7rem] p-4">
                  <div
                    className="flex h-full w-full items-end justify-center rounded-[1.7rem] border-[7px] border-black border-opacity-30 bg-[url(/merchandise/background-merch.png)] bg-cover bg-center bg-no-repeat pb-8 font-semibold text-[#FEE59A] ring-4 ring-black ring-opacity-40 md:text-[2rem]"
                    style={{
                      textShadow: "4.71px 7.07px 20px #FFBF51",
                      boxShadow: "0px 0px 15px 3px rgba(255, 230, 178, 1)",
                    }}
                  >
                    &lt;Merchandise&gt;
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Previous/Next Button */}
          <CarouselPrevious
            className="absolute left-[-4rem] top-[8rem] flex items-center justify-center md:left-[-8rem] md:top-[12rem]"></CarouselPrevious>

          <CarouselNext
            className="absolute right-[-4rem] top-[8rem] flex items-center justify-center md:right-[-8rem] md:top-[12rem]"></CarouselNext>
        </Carousel>
      </div>
      <SeparatorLanding />
    </div>
  );
};

export default MerchandisePage;
