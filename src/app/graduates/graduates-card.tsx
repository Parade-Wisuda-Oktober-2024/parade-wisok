"use client";

import { MenfessForm } from "./menfess-form";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
} from "~/components/ui/dialog";
import { UserPublic } from "~/types/user";
import { X } from "lucide-react";
import Image from "next/image";
import * as React from "react";

type GraduateCardProps = {
  graduate: UserPublic;
  isPriority?: boolean;
};

export function GraduateCard({
  graduate,
  isPriority,
  ...props
}: GraduateCardProps) {
  // Portrait or Landscape
  const portrait =
    typeof window !== "undefined"
      ? window.innerHeight > window.innerWidth
      : false;

  // Dialog open state
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild data-aos="fade-up">
        {/* Card */}
        <button
          {...props}
          className="relative flex aspect-[3/4] gap-4 md:gap-6 h-full w-full overflow-hidden px-4 pb-4 pt-10 "
        >
          {/* Avatar */}
          <div className="absolute inset-0 z-30 flex pb-11 pt-8 justify-center">
          <Avatar className="inset-0 z-30 size-8/12 rounded-full">
            <AvatarImage
              width={400}
              height={500}
              src={graduate.image ?? ""}
              alt={`Photo Profile ${graduate.name}`}
              className="object-cover object-center"
              sizes="(max-width: 640px) 290px, (max-width: 1024px) 110px, 280px"
            />
            <AvatarFallback className="rounded-full">
              <Image
                src="/components/default-avatar.png"
                alt="Default Avatar"
                className="size-full object-cover object-center"
                width={200}
                height={267}
                sizes="(max-width: 640px) 290px, (max-width: 1024px) 240px, 280px"
              />
            </AvatarFallback>
          </Avatar>
          </div>
          {/* Card */}
          <Image
            width={400}
            height={500}
            className="absolute inset-0 z-10 h-full w-full"
            src={"/graduates/card.png"}
            alt="photo profile"
            draggable={false}
            priority={isPriority}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 270px, 310px"
          />
          <div className="relative top-[65%] z-20 flex max-h-32 w-full flex-col items-center font-paragraph text-[#F4D38E]">
            <p className="text-lg font-bold lg:text-xl">{graduate.name}</p>
            <p className="text-base font-medium lg:text-lg">{graduate.major}</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="flex h-full max-h-[90vh] w-full max-w-[95vw] flex-col justify-center border-none bg-transparent px-10 py-20 sm:px-20 sm:py-12 lg:aspect-[19/10] lg:h-full lg:max-h-[60vh] lg:lg:w-auto lg:px-36 lg:py-16">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <Image
            width={10000}
            height={10000}    
            src="/graduates/PopUp.png"
            alt="Center Background"
            className="h-auto w-auto max-w-full max-h-full"
            objectFit="contain" // Ensures the image scales properly within the container
          />
        </div>
        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center gap-2 overflow-y-auto px-1 sm:flex-row sm:items-start sm:gap-6 lg:items-center lg:gap-10">
          {/* Close button
          <DialogClose asChild>
            <button className="absolute right-10 top-14 sm:right-14 sm:top-10 lg:right-20 lg:top-16">
              <X strokeWidth={3} className="size-7 text-lg text-[#F4D38E]" />
            </button>
          </DialogClose> */}


          <div className="flex w-full flex-col gap-1 ">
            {/* Identity */}
            <div className="flex w-full flex-col items-center font-paragraph text-[#F4D38E]">
              <p className="text-6xl font-paragraph font-bold drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]  xs:text-lg">
                {graduate.name}
              </p>
              <p className="text-lg font-paragraph font-bold drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]  xs:text-sm">
                {graduate.nim}
              </p>
              <p className="text-base font-paragraph font-bold xs:text-xs drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]">
                {graduate.major}
              </p>
            </div>

            {/* Menfess Form */}
            <MenfessForm
              targetUserId={graduate.id}
              onFinishSubmit={() => setIsOpen(false)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
