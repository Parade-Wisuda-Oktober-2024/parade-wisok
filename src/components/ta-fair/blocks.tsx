import {SearchInput} from "~/components/filter/search";
import {DropdownFaculty} from "~/components/filter/dropdown-faculty";
import {DropdownMajor} from "~/components/filter/dropdown-major";
import * as React from "react";
import CardDialog from "~/app/ta-fair/card-dialog";

function TABlocks() {
  const absss = "Kendaraan listrik (EV) telah muncul sebagai solusi inovatif untuk mengatasi masalah polusi udara dan ketergantungan pada bahan bakar fosil. Artikel ini membahas perkembangan teknologi EV, termasuk kemajuan dalam baterai lithium-ion dan sistem pengisian daya. Selain itu, analisis dilakukan terhadap dampak lingkungan EV dibandingkan dengan kendaraan konvensional, dengan penekanan pada pengurangan emisi gas rumah kaca. Penelitian ini juga mengeksplorasi tantangan yang dihadapi industri EV, seperti infrastruktur pengisian yang masih terbatas dan biaya produksi yang tinggi. Melalui pemahaman yang lebih baik tentang potensi dan hambatan, studi ini memberikan wawasan yang dapat membantu pembuat kebijakan dalam merumuskan strategi yang mendukung adopsi kendaraan listrik secara lebih luas."
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
        <CardDialog
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}
          abstrakTA={absss}/>
        <CardDialog
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}
          abstrakTA={absss}/>
        <CardDialog
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}
          abstrakTA={absss}/>
        <CardDialog
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"}
          abstrakTA={absss}/>

      </div>
    </div>
  );
}

export default TABlocks;
