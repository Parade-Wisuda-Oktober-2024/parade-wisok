"use client";

import {Dialog, DialogContent, DialogTrigger} from "~/components/ui/dialog";
import Image from "next/image";
import {MenfessForm} from "~/app/graduates/menfess-form";
import * as React from "react";
import Link from "next/link";
import {Pencil} from "lucide-react";
import {SearchInput} from "~/components/filter/search";

export default function FormDialog() {
  const graduates = [
    {name: "Ardito Ramadhan", major: "Teknik Informatika", NIM: "13520123"},
    {name: "Ardito Ramadhan", major: "Teknik Informatika", NIM: "13520123"},
    {name: "Ardito Ramadhan", major: "Teknik Informatika", NIM: "13520123"},];
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild data-aos="fade-up">
        <Link href=""
              className="rounded-full text-purple-700 aspect-square h-12 w-12 grid place-items-center fixed bottom-6 right-4 md:right-8 z-30 bg-[#F4D38E]">
          <Pencil/>
        </Link>
      </DialogTrigger>
      <DialogContent
        className="flex h-[65vh] max-h-[90vh] w-full max-w-[95vw] flex-col justify-center px-8 md:px-10 lg:px-12 bg-transparent border-none lg:aspect-[19/10] lg:h-full lg:max-h-[60vh] lg:w-auto">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <Image
            width={10000}
            height={10000}
            src="/graduates/PopUp.png"
            alt="Center Background"
            className="h-full w-full max-w-full max-h-full"
            objectFit="contain" // Ensures the image scales properly within the container
          />
        </div>
        {/* Content */}
        <div
          className="z-10 flex w-full flex-col items-center gap-2 overflow-y-auto px-1 sm:flex-row sm:items-start sm:gap-6 lg:items-center lg:gap-10">
          <div className="flex w-full flex-col gap-1 ">
            {/* Identity */}
            <SearchInput className='max-h-12 w-full' data-aos="fade-up" data-aos-delay="50"
                         onInput={() => setIsTyping(true)}
                         onFocus={() => setIsTyping(true)}
                         onBlur={() => setIsTyping(false)}>
              <div
                className={`absolute w-full grid transition-all duration-[2000] min-h-0 overflow-hidden ${isTyping ? "[grid-template-rows:_1fr] top-14 " : "[grid-template-rows:_0fr] top-12"}`}>
                <div
                  className={`bg-[#421370] h-max min-h-0 w-full rounded-md transition-all duration-[2000] border-[#F4D38E] ${isTyping && "first:mt-2 border-2 last:mb-2"} px-4 divide-amber-300 divide-y-2 `}>
                  {graduates.map(({name, major, NIM}) => (
                    <div className="flex py-2 w-full text-[#F4D38E] justify-between" key={name + major}>
                      <div className="">
                        <h4 className='capitalize'>{name}</h4>
                        <h4 className='capitalize'>{NIM}</h4>
                      </div>
                      <h4 className="capitalize">{major}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </SearchInput>
            <MenfessForm
              targetUserId={"hjasy12"}
              onFinishSubmit={() => setIsOpen(false)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}