"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { faculties} from "~/lib/faculty-major";

interface DropdownFacultyProps {
  className?: string;
}

// FOR /graduates AND /ta-fair PAGE
export function DropdownFaculty({ className, ...props }: DropdownFacultyProps) {
  // Pathname
  const pathname = usePathname();

  // Router
  const router = useRouter();

  // Open / close state
  const [open, setOpen] = React.useState(false);

  // Options
  const options = ["Semua", ...faculties] as const;

  // Get faculty from search params
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");
  const selected = faculty ?? "Fakultas";

  // On select
  const onSelect = (faculty: (typeof options)[number]) => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Set page to 1 (reset)
    newSearchParams.set("page", "1");

    // Set faculty
    if (faculty == "Semua") {
      newSearchParams.delete("faculty");
    } else {
      newSearchParams.set("faculty", faculty);
    }
    newSearchParams.delete("major"); // Remove major if faculty changed

    // Push new search params
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <DropdownMenu modal={false} onOpenChange={(o: boolean | ((prevState: boolean) => boolean)) => setOpen(o)}>
      <DropdownMenuTrigger className="outline-none" {...props}>
        <div
          className={cn(
            "flex h-12 w-40 select-none flex-row items-center justify-center gap-2 overflow-hidden rounded-t-xl border-2 border-[#F4D38E] bg-[#401571] p-1 font-paragraph text-base font-semibold leading-none text-[#F4D38E] transition-all",
            open ? undefined : "rounded-b-xl",
            className
          )}
        >
          <span>{selected}</span>
          <ChevronDown
            className={cn(
              "size-5 transition-all duration-200 ease-in-out",
              open ? "rotate-0" : "rotate-180"
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={-4}
        avoidCollisions={false}
        className="z-[60] w-[var(--radix-dropdown-menu-trigger-width)] rounded-none rounded-b-xl border-2 border-t-2 border-[#F4D38E] bg-[#401571] font-paragraph font-semibold text-[#F4D38E]"
      >
        {options.map((option) => (
          <DropdownMenuItem key={option} onClick={() => onSelect(option)}>
            <div
              className={cn(
                "font-paragraph h-full w-full cursor-pointer p-2 text-center transition-all duration-200 ease-in-out hover:bg-[#6C159E] hover:text-[#FEE59A]",
                option == selected
                  ? "bg-[#6C159E] text-[#FEE59A]"
                  : "bg-[#401571] text-[#FEE59A]"
              )}
            >
              {option}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
