"use client";

import "~/styles/globals.css";
import Image from "next/image";
import {cn} from "~/lib/utils";
import {Heart} from "lucide-react";
import {useAction} from "next-safe-action/hooks";
import {updateLikeTA} from "~/app/actions/likeTA";
import {toast} from "sonner";

export function BlocksLayout({
                               judulTA,
                               penulisTA,
                               jurusanPenulis,
                               jumlahLove,
                               className,
                               id,
                               update,
                               isLiked
                             }: Readonly<{
  judulTA: string;
  penulisTA: string;
  jurusanPenulis: string;
  jumlahLove: string | number;
  className?: string;
  id: string;
  isLiked: boolean;
  update: () => void;
}>) {
  const {execute, isExecuting} = useAction(updateLikeTA, {
    onSuccess: ({data}) => {
      update();
      toast.success(data?.message);
    },
    onExecute: () => {
      update();
    },
    onError: () => {
      toast.error("Gagal menyukai TA");
    }
  });

  return (
    <div
      className={cn("bg-[url('/organogram/innerlight-sm.png')] border border-purple-500 bg-cover bg-center object-center rounded-[20px] w-full md:w-3/4 lg:w-full h-96 p-1", className)}>
      <div
        className="relative flex z-0 h-full flex-col bg-[url('/blocks-bg-sm.png')] justify-center items-center p-6 rounded-[16px]">
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
          <button disabled={isExecuting} onClick={(e) => {
            execute({taId: id})
            e.stopPropagation();
          }}>
            <Heart fill={isLiked ? "white" : "transparent"} className="w-5 h-5 mr-2"/>
          </button>
          {jumlahLove}
        </h4>
      </div>
    </div>
  );
}