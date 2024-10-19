"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = ({ ...props }) => {
  // Pathname
  const pathname = usePathname();

  // Router
  const router = useRouter();

  // READONLY search params
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Debounce search input **ONCHANGE**
  const debounced = useDebouncedCallback((value) => {
    //  Get all search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Set page to 1 (reset)
    newSearchParams.set("page", "1");

    // Set search param
    if (value) {
      newSearchParams.set("search", value);
    } else {
      newSearchParams.delete("search");
    }

    // Push new search params
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  }, 500);

  return (
    <div
      className="flex h-12 flex-row flex-grow rounded-xl border-4 border-[#F4D38E] bg-[#401571] font-paragraph text-base font-semibold text-[#F4D38E]"
      {...props}
    >
      <input
        className="font-paragraph ml-4 mr-2 flex-grow bg-transparent placeholder-[#F4D38E] outline-none"
        placeholder="Cari wisudawan"
        defaultValue={search ?? ""}
        onChange={(v) => debounced(v.target.value)}
        spellCheck={false}
      />
      <Search className="my-auto mr-4" />
    </div>
  );
};

export { SearchInput };
