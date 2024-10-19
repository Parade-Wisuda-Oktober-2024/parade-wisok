import Title from "~/components/title";
import Image from "next/image";
import NavBar from "../header-footer/header";
import Footer from "../header-footer/footer";
import { inherits } from "util";
import { Heading4 } from "lucide-react";
import { BlocksLayout, NumberCarouselActive, NumberCarouselInactive } from "~/app/ta-fair/layout";

const TAblocks = () => {
  return (
    
    <div className="relative flex-col justify-center items-center">
      <div className="flex flex-col w-full">
          <input placeholder="Cari wisudawan" className="font-sub-sub-header p-2 rounded-md flex-1 w-full"/>
        </div>

      <section>
          <BlocksLayout
            judulTA = {"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
            penulisTA = {"Muhammad Fadhlan Armon"}
            jurusanPenulis = {"Manajemen"}
            jumlahLove = {"6"}
          />          
          <BlocksLayout
            judulTA = {"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
            penulisTA = {"Muhammad Fadhlan Armon"}
            jurusanPenulis = {"Manajemen"}
            jumlahLove = {"6"}
          />          
          <BlocksLayout
            judulTA = {"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
            penulisTA = {"Muhammad Fadhlan Armon"}
            jurusanPenulis = {"Manajemen"}
            jumlahLove = {"6"}
          />          
          
        </section>

        <div className="flex space-x-2 justify-center items-center">
            
          <div className="bg-[rgb(250,230,149)] z-0 justify-center items-center rounded-full w-10 h-10">

            <div className="relative inset-0 flex z-10 bg-[url('/back-vector.png')] bg-contain bg-no-repeat w-10 h-10 justify-center items-center text-[rgba(45,37,73,255)]"></div>
          </div>


            <NumberCarouselActive
              children = {1}
            />

            <NumberCarouselInactive
              children = {2}
            />
            <NumberCarouselInactive
              children = {3}
            />
            <NumberCarouselInactive
              children = {4}
            />
            <NumberCarouselInactive
              children = {5}
            />
            <NumberCarouselInactive
              children = {6}
            />
            <NumberCarouselInactive
              children = {7}
            />
            <NumberCarouselInactive
              children = {8}
            />
            <NumberCarouselInactive
              children = {9}
            />
           

           <div className="bg-[rgb(250,230,149)] z-0 justify-center items-center rounded-full w-10 h-10">

              <div className="relative inset-y-2.5 inset-x-3.5 flex z-10 bg-[url('/next-vector.png')] bg-contain bg-no-repeat w-5 h-5 justify-center items-center" style={{transform :'scaleY(-1)'}}></div>
            </div>
        </div>
    </div>
  );
}

export default TAblocks;
