import * as React from "react";
import Image from "next/image";
import {cn} from "~/lib/utils";

export default function SeparatorLanding({className}: { className?: string }) {
  return (
    <Image
      src="/v-16.png"
      width={1000}
      height={100}
      className={cn("p-0 absolute mx-auto w-full h-[50px] sm:h-[10%] max-h-[100px] bottom-0 shadow-blue-400 shadow-lg ", className)}
      alt="v-16"/>
  );
}