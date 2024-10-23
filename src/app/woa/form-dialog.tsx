"use client";

import {Dialog, DialogContent, DialogTrigger} from "~/components/ui/dialog";
import Image from "next/image";
import {MenfessForm} from "~/components/graduates/menfess-form";
import * as React from "react";
import Link from "next/link";
import {Pencil, X} from "lucide-react";

export default function FormDialog() {

  const [isOpen, setIsOpen] = React.useState(false);
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
          className="flex max-h-[90vh] w-full max-w-[90vw] flex-col justify-center px-8 md:px-10 lg:px-12 bg-transparent border-none lg:aspect-[19/10] lg:h-full lg:max-h-[75vh] lg:w-auto">
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
            className="z-10 flex w-full flex-col items-center gap-2 px-1 sm:flex-row sm:items-start sm:gap-6 lg:items-center lg:gap-10">
            <div className="flex w-full flex-col gap-1 ">
              {/* Identity */}
              <MenfessForm
                setIsOpen={setIsOpen}
              />
            </div>
          </div>
        </DialogContent>
      </React.Suspense>
    </Dialog>
  );
}