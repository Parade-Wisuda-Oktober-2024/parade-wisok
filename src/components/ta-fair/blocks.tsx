"use client";

import {SearchInput} from "~/components/filter/search";
import * as React from "react";
import {useAction} from "next-safe-action/hooks";
import {searchAllTA} from "~/app/actions/search-TA";
import {useEffect, useState} from "react";
import {Dialog, DialogContent} from "~/components/ui/dialog";
import {BlocksLayout} from "~/app/ta-fair/wrapper";
import {cn} from "~/lib/utils";
import Image from "next/image";
import {Heart} from "lucide-react";

function TABlocks() {
  const {execute, result, isExecuting} = useAction(searchAllTA);

  useEffect(() => {
    execute({nameOrTitle: "", faculty: "", major: ""});
  }, [execute])
  const [selectedTA, setSelectedTA] = useState<{
    abs: string,
    name: string,
    title: string,
    likes: number | string,
    major: string,
    isLiked: boolean,
    id?: string
  } | null>(null);

  const [open, setOpen] = useState(false);
  const [nameOrTitle, setNameOrTitle] = useState("");

  useEffect(() => {
    execute({nameOrTitle});
  }, [nameOrTitle, execute
  ]);

  function updateData() {
    execute({nameOrTitle});
  }

  return (
    <div className="relative flex-col flex justify-center items-center">
      {/* INPUT PLACEHOLDER */}
      <div className="flex gap-4 max-w-full">
        <React.Suspense fallback={null}>
          <SearchInput setVal={setNameOrTitle} className='max-h-12 md:w-[50vw] w-min' data-aos="fade-up"
                       data-aos-delay="150"/>
        </React.Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center my-6 md:my-8"
           data-aos="fade-up"
           data-aos-delay="150">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className='p-0 bg-transparent border-0 w-[90vw] md:min-w-[75vw]'>
            <div
              className={cn("bg-[url('/organogram/innerlight.png')] border border-purple-500 bg-cover bg-center object-center rounded-[20px] w-full h-[75vh] md:h-[60vh] p-1")}>
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
                <h2 className="font-serif text-center z-10 my-1.5 md:text-2xl text-lg">
                  {selectedTA?.title}
                </h2>
                <h4 className="text-center z-10 my-1.5 text-lg italic font-sub-header">
                  {selectedTA?.name}
                </h4>
                <h4 className="font-serif z-10 my-1.5 text-lg">
                  {selectedTA?.major}
                </h4>
                <h4 className="font-serif z-10 my-1.5 text-sm md:text-base lg:text-lg overflow-y-scroll text-justify">
                  {selectedTA?.abs}
                </h4>
                <h4 className="font-serif flex items-center z-10 my-1.5">
                  <Heart fill={selectedTA?.isLiked ? "white" : "transparent"} className="w-5 h-5 mr-2"/>
                  {selectedTA?.likes}
                </h4>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        { isExecuting && result.data?.length === 0 && <div className="text-center">Loading...</div>}
        {result.data?.map((ta) => (
          <div className="" key={ta.title} onClick={() => {
            setSelectedTA({
              abs: ta.abstrak,
              name: ta.wisudawanName,
              title: ta.title,
              likes: ta.likeCount,
              major: ta.major,
              isLiked: ta.isLiked,
              id: ta.id
            });
            setOpen(true);
          }}>
            <BlocksLayout
              key={ta.title}
              judulTA={ta.title}
              penulisTA={ta.wisudawanName}
              jurusanPenulis={ta.major}
              jumlahLove={ta.likeCount}
              id={ta.id}
              isLiked={ta.isLiked}
              update={updateData}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TABlocks;
