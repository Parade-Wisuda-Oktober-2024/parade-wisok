"use client";

import {Search} from "lucide-react";
import {useSearchParams} from "next/navigation";
import * as React from "react";
import {useDebouncedCallback} from "use-debounce";
import type {HTMLAttributes} from "react";
import {cn} from "~/lib/utils";

const SearchInput = ({className, placeholder, children, onBlur, onFocus, onInput, val, setVal, ...props}: HTMLAttributes<HTMLInputElement> & {
  placeholder?: string,
  val?: string,
  setVal: (val: string) => void,
}) => {
  // READONLY search params
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Debounce search input **ONCHANGE**
  const debounced = useDebouncedCallback((value) => {
    setVal(value as string);
  }, 500);

  return (
    <div
      className={cn("flex h-12 flex-row relative flex-grow rounded-xl min-w-0 border-2 border-[#F4D38E] bg-[#401571] font-paragraph text-base font-semibold text-[#F4D38E]", className)}
      {...props}
    >
      {children}
      <input
        className={cn("font-paragraph ml-4 mr-2 flex-grow bg-transparent placeholder-[#F4D38E] outline-none min-w-0")}
        placeholder={placeholder ?? "Cari wisudawan"}
        defaultValue={search ?? ""}
        onChange={(v) => debounced(v.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onInput}
        spellCheck={false}
      />
      <Search className="my-auto mr-4"/>
    </div>
  );
};

export {SearchInput};
