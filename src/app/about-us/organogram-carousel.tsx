"use client";

import React, { useState, useEffect } from "react";
import OrganogramCard from "./organogram-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { type CarouselApi } from "~/components/ui/carousel";
import type { OrganogramData } from "~/types/organogram";
import OnoHeader from "~/components/onoheader";

type CarouselSpacingProps = {
  cardsData: OrganogramData[];
};

export function OrganogramCarousel({ cardsData }: CarouselSpacingProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPrevHidden, setIsPrevHidden] = useState(true);
  const [isNextHidden, setIsNextHidden] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (api) {
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  }, [api]);

  const isSmScreen = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth >= 640;
  };

  const scrollPrev = () => {
    if (api) {
      const slidesToScroll = isSmScreen() ? 2 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollPrev();
      }
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  };

  const scrollNext = () => {
    if (api) {
      const slidesToScroll = isSmScreen() ? 2 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollNext();
      }
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  };

  return (
    <div className="z-20 mx-auto flex w-full max-w-xs flex-col gap-6 sm:max-w-md lg:max-w-2xl lg:gap-8" data-aos="fade-up">
      {cardsData[current]?.division && (
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl sm:py-8 lg:py-10">{cardsData[current].division}</OnoHeader>
      )}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="relative"
      >
        <CarouselContent>
          {cardsData.map((card, index) => (
            <CarouselItem key={index} className="sm:basis-1/2">
              <div className="flex items-center justify-center">
                <OrganogramCard
                  frameType={card.frameType}
                  photo={card.photo}
                  name={card.name}
                  title={card.title}
                  batch={card.batch}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={scrollPrev}
          className={`absolute left-1 top-36 z-10 size-11 rounded-full bg-contain bg-center sm:-left-14 lg:-left-14 lg:top-48 lg:size-14 ${isPrevHidden ? "opacity-50" : ""}`}
        />
        <CarouselNext
          onClick={scrollNext}
          className={`absolute right-1 top-36 z-10 size-11 rounded-full bg-contain bg-center sm:-right-14 lg:-right-14 lg:top-48 lg:size-14 ${isNextHidden ? "opacity-50" : ""}`}
        />
      </Carousel>
    </div>
  );
}

export default OrganogramCarousel;