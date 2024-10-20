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
    {name: "Ardito Ramadhan", major: "Teknik Informatika", NIM: "13520123", id: "hjasy12"},
    {name: "Ardito Pramono", major: "Teknik Perminyakan", NIM: "13520123", id: "hjasy13"},
    {name: "Pajarotan Hasibuan", major: "Teknik Mesin", NIM: "13520123", id: "dsjdss"},
    {name: "Simanungsong Silalahi", major: "Teknik Material", NIM: "13520123", id: "hjasy15"},
    {name: "Gibran Raditya", major: "Teknik Elektro", NIM: "13520123", id: "hjasy16"},
    {name: "Baharudin Harahap", major: "Teknik Geologi", NIM: "13520123", id: "hjasy17"},];
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const [selectedGraduates, setSelectedGraduates] = React.useState<typeof graduates[number] | undefined>(undefined);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild data-aos="fade-up">
        <Link href=""
              className="rounded-full text-purple-700 aspect-square h-12 w-12 grid place-items-center fixed bottom-6 right-4 md:right-8 z-30 bg-[#F4D38E]">
          <Pencil/>
        </Link>
      </DialogTrigger>
      <React.Suspense fallback={null}>
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
                  className={`absolute w-full grid [transition-property:_height,_top,_border-width] rounded-md [transition-delay:_200ms,_0s,_200s] duration-300 border-[#F4D38E] min-h-0 overflow-hidden ${isTyping ? " top-14 border-2" : "border-0 top-12"}`}
                  style={{
                    height: isTyping ? "200px" : "0",
                  }}>
                  <div
                    className={`bg-[#421370] overflow-y-scroll min-h-0 w-full rounded-md ${isTyping && "first:mt-2 last:mb-2"} px-4 divide-amber-300 divide-y-2 `}>
                    {graduates.map(({name, major, NIM, id}, i) => (
                      <div className="flex py-2 w-full text-[#F4D38E] justify-between" key={i + id}
                           onClick={() => {
                             setSelectedGraduates({name, major, NIM, id});
                             setIsTyping(false);
                           }}>
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
              {!!selectedGraduates && (
                <h4 className="text-base md:text-xl italic mt-4 underline">{`To: ${selectedGraduates.name} - ${selectedGraduates.major}`}</h4>
              )}
              <MenfessForm
                targetUserId={"hjasy12"}
                onFinishSubmit={() => setIsOpen(false)}
              />
            </div>
          </div>
        </DialogContent>
      </React.Suspense>
    </Dialog>
  );
}