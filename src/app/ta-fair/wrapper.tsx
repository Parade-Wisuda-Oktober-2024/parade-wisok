import "~/styles/globals.css";
import Image from "next/image";
import {cn} from "~/lib/utils";

export function BlocksLayout({
                               judulTA,
                               penulisTA,
                               jurusanPenulis,
                               jumlahLove,
                               className
                             }: Readonly<{
  judulTA: string;
  penulisTA: string;
  jurusanPenulis: string;
  jumlahLove: string | number;
  className?: string;
}>) {
  return (
    <div
      className={cn("bg-[url('/organogram/innerlight.png')] border border-purple-500 bg-cover bg-center object-center rounded-[20px] w-full md:w-3/4 lg:w-full h-96 p-1", className)}>
      <div
        className="relative flex z-0 h-full flex-col bg-[url('/blocks-bg.png')] justify-center items-center p-6 rounded-[16px]">
        {/* ornaments */}
        <div className="absolute top-1/3 right-0 z-0 w-auto h-1/3 opacity-60">
          <Image
            src={'/VIS-SWIRL-2.png'}
            alt="/VIS-SWIRL-2.png"
            width={200}
            height={0}
          />
        </div>
        <div className="absolute top-2/3 left-0 z-0 w-auto h-1/5 opacity-60">
          <Image
            src={'/VIS-SWIRL-2.png'}
            alt="/VIS-SWIRL-2.png"
            width={100}
            height={50}
            style={{transform: 'scaleX(-1)'}}
          />
        </div>
        <div className="absolute top-2/3 left-10 z-0 w-auto h-1/5">
          <Image
            src={'/VIS-25-3.png'}
            alt="/VIS-SWIRL-2.png"
            width={40}
            height={40}
            className="-rotate-45"
          />
        </div>
        {/* main content */}
        <h2 className="font-serif text-center z-10 my-1.5 md:text-2xl text-lg line-clamp-5">
          {judulTA}
        </h2>
        <h4 className="text-center z-10 my-1.5 text-lg italic font-sub-header">
          {penulisTA}
        </h4>
        <h4 className="font-serif z-10 my-1.5 text-lg">
          {jurusanPenulis}
        </h4>
        <h4 className="font-serif flex items-center z-10 my-1.5">
          <Image
            src={"/heart.png"}
            alt={"Heart"}
            width={18}
            height={0}
            className="h-5/6 mx-2"
          />
          {jumlahLove}
        </h4>
      </div>
    </div>
  );
}