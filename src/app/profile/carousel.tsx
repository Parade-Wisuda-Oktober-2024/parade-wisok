"use client";

import React, {useState} from "react";
import {
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel
} from "~/components/ui/carousel";
import {WoaCard} from "~/app/woa/woa-card";

export default function CarouselMessage() {
  const [api, setApi] = useState<CarouselApi>();
  // const [current, setCurrent] = useState(0);
  const [isPrevHidden, setIsPrevHidden] = useState(true);
  const [isNextHidden, setIsNextHidden] = useState(false);
  //
  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }
  //   setCurrent(api.selectedScrollSnap());
  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap());
  //   });
  // }, [api]);
  //
  // useEffect(() => {
  //   if (api) {
  //     setIsPrevHidden(!api.canScrollPrev());
  //     setIsNextHidden(!api.canScrollNext());
  //   }
  // }, [api]);

  const scrollPrev = () => {
    if (api) {
      const slidesToScroll = 1
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollPrev();
      }
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  };

  const scrollNext = () => {
    if (api) {
      const slidesToScroll = 1
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollNext();
      }
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative"
    >
      <CarouselContent>
        <CarouselItem className="grid place-items-center">
          <WoaCard to={"Adi Haditya"}
                   toFaculty={"Teknik Mesin"}
                   toNIM={"13122080"}
                   className="lg:w-3/4"
                   message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        </CarouselItem>
        <CarouselItem className="grid place-items-center">
          <WoaCard to={"Adi Haditya"}
                   toFaculty={"Teknik Mesin"}
                   toNIM={"13122080"}
                   className="lg:w-3/4"
                   message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        </CarouselItem>
        <CarouselItem className="grid place-items-center">
          <WoaCard to={"Adi Haditya"}
                   toFaculty={"Teknik Mesin"}
                   toNIM={"13122080"}
                   className="lg:w-3/4"
                   message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        </CarouselItem>
        <CarouselItem className="grid place-items-center">
          <WoaCard to={"Adi Haditya"}
                   toFaculty={"Teknik Mesin"}
                   toNIM={"13122080"}
                   className="lg:w-3/4"
                   message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        onClick={scrollPrev}
        className={`absolute left-6 top-[calc(100%_-_36px)] md:top-36 z-10 size-11 rounded-full bg-contain bg-center sm:-left-14 lg:-left-14 lg:top-48 lg:size-14 ${isPrevHidden ? "opacity-50" : ""}`}
      />
      <CarouselNext
        onClick={scrollNext}
        className={`absolute right-6 top-[calc(100%_-_36px)] md:top-36 z-10 size-11 rounded-full bg-contain bg-center sm:-right-14 lg:-right-14 lg:top-48 lg:size-14 ${isNextHidden ? "opacity-50" : ""}`}
      />
    </Carousel>
  );
}