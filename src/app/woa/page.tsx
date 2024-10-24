"use client";

import React, {useEffect} from "react";
import Title from "~/components/title";
import {SearchInput} from "~/components/filter/search";
import {WoaCard} from "~/app/woa/woa-card";
import FormDialog from "~/app/woa/form-dialog";
import {useAction} from "next-safe-action/hooks";
import {searchWOA} from "~/app/actions/search-WOA";

export default function Page() {
  const [search, setSearch] = React.useState("");
  const {execute, result, isExecuting} = useAction(searchWOA);

  useEffect(() => {
    execute({nameOrNim: search, content: search});
  }, [execute, search])

  function update() {
    execute({nameOrNim: search, content: search});
  }

  return (
    <div
      className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-10 gap-6 md:gap-8 pb-8 md:pb-10">
      <FormDialog
      update={update}/>
      <div
        style={{backgroundImage: "url('/organogram/borderlight.png')"}}
        className="bg-center bg-cover w-full h-screen fixed top-0 -z-10 "></div>
      <Title className="mt-28 md:mt-36 text-center capitalize md:uppercase">
        {"Wall of Appreciation"}
      </Title>
      <div className="flex gap-4 max-w-full">
        <React.Suspense fallback={null}>
          <SearchInput setVal={setSearch} className='max-h-12 md:w-[50vw] w-min' data-aos="fade-up"
                       data-aos-delay="150"/>
        </React.Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center">
        {isExecuting && <div className="text-center">Loading...</div>}
        {result.data?.map((woa) => (
          <WoaCard key={woa.woaId} from={woa.senderName} to={woa.name} toFaculty={woa.major} toNIM={woa.nim}
                   message={woa.content}/>
        ))}
      </div>
    </div>
  );
}