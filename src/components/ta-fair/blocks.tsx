import {BlocksLayout} from "~/app/ta-fair/wrapper";
import {SearchInput} from "~/components/filter/search";
import {DropdownFaculty} from "~/components/filter/dropdown-faculty";
import {DropdownMajor} from "~/components/filter/dropdown-major";
import * as React from "react";

function TABlocks() {
  return (
    <div className="relative flex-col flex justify-center items-center">
      {/* INPUT PLACEHOLDER */}
      <div className="flex gap-4 max-w-full">
        <React.Suspense fallback={null}>
          <SearchInput className='max-h-12 md:w-[50vw] w-min' data-aos="fade-up" data-aos-delay="150"/>
          <DropdownFaculty className='max-h-12 w-28' data-aos="fade-up"
                           data-aos-delay="150"/>
          <DropdownMajor
            data-aos="fade-up"
            data-aos-delay="150"
            className='max-h-12 w-28'
          />
        </React.Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center my-6 md:my-8">
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}/>
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}/>
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}/>
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}/>
      </div>
    </div>
  );
}

export default TABlocks;
