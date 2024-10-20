"use client";

import {
  isFacultyValid,
  isMajorValid,
  isPageValid,
} from "../../components/filter/validate-filter";
import { GraduateCard } from "./graduates-card";
import { ClientPagination } from "~/components/filter/client-pagination";
import { DropdownFaculty } from "~/components/filter/dropdown-faculty";
import { DropdownMajor } from "~/components/filter/dropdown-major";
import { SearchInput } from "~/components/filter/search";
import { UserPublic, users} from "~/types/user";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

interface GraduateViewProps {
  graduates: UserPublic[];
}

export function GraduateView({ graduates }: GraduateViewProps) {
  // Router
  const router = useRouter();

  // Get filter state from search params (READ ONLY, to mutate use router.push()
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");
  const major = searchParams.get("major");
  const search = searchParams.get("search");
  const page = searchParams.get("page"); // Pagination state
  console.log(searchParams.get("faculty"));
  console.log(searchParams.get("major"));
  console.log(searchParams.get("search"));

  // Filtered graduates
  const totalPerPage = 6;
  const startIdx = (parseInt(page ?? "1") - 1) * totalPerPage; // Include start index
  const endIdx = startIdx + totalPerPage; // Exclude end index
  const filteredGraduates = graduates.filter((g) => {
    return (
      (!faculty || faculty == g.faculty) && // Faculty filter
      (!major || major == g.major) && // Major filter
      (!search || g.name.toLowerCase().includes(search.toLowerCase())) // Search filter
    );
  });
  console.log(graduates); 
  console.log(filteredGraduates);
  const total = filteredGraduates.length; // Total graduates after filtering

  // Validate filter search params everytime the data changes
  // For each params, if valid push to the array
  // After all params validated, router.push() with the new search params
  React.useEffect(() => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Validate faculty
    if (!isFacultyValid(faculty)) newSearchParams.delete("faculty");

    // Validate major
    if (!isMajorValid(faculty, major)) newSearchParams.delete("major");

    // Validate search
    if (!search) newSearchParams.delete("search");

    // Validate page
    if (!isPageValid(page, total, totalPerPage))
      newSearchParams.set("page", "1");

    // Push new search params to router
    router.replace(`/graduates?${newSearchParams.toString()}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faculty, major, search, page]);

  return (
    <div className="flex w-full flex-col gap-5 lg:gap-7">
      <div className="z-10 flex flex-row justify-between gap-4 lg:gap-6">
        {/* Search Input */}
        <SearchInput data-aos="fade-up" data-aos-delay="150" />
        {/* Dropdowns */}
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-6">
          {/* Faculty */}
          <DropdownFaculty
            data-aos="fade-up"
            data-aos-delay="150"
            className="w-full sm:w-40"
          />
          {/* Major */}
          <DropdownMajor
            data-aos="fade-up"
            data-aos-delay="150"
            className="w-full sm:w-56"
          />
        </div>
      </div>
      {/* Cards Grid */}
      {filteredGraduates.length === 0 ? (
        <div className="animate-in-fadetop-8 flex h-52 flex-col items-center justify-center gap-2 text-center text-[#F4D38E] lg:gap-4">
          <p className="font-paragraph text-xl lg:text-3xl">
            Wisudawan tidak ditemukan
          </p>
          <p className="font-paragraph text-base font-semibold lg:text-xl">
            Pastikan kata kunci pencarian benar atau coba dengan kata kunci
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {filteredGraduates.slice(startIdx, endIdx).map((d, idx) => (
            <GraduateCard
              data-aos="fade-up"
              data-aos-delay={idx < 3 ? "200" : "0"}
              graduate={d}
              key={d.id}
              isPriority={idx === 0}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <ClientPagination
        total={total}
        totalPerPage={totalPerPage}
        data-aos="fade-up"
      />
    </div>
  );
}
