import React from "react";
import Image from "next/image";

export default function Visi() {
  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden z-10 py-16 pt-28 md:pt-36 flex flex-col items-center">
      {/* About intro*/}
      <div
        className="flex z-10 flex-col top-1 justify-center md:min-h-1/3 md:w-3/4">
        <div className="flex justify-center item-center flex-row w-full">
          <div className="relative left-2 ">
            <Image alt="butterfly-left" src={'/vismis/butterfly-left.svg'} width={72} height={72}/>
          </div>
          <h2
            className=" font-header font-bold text-4xl md:text-6xl pt-4 pb-4 bg-gradient-text-aboutus">ABOUT
            US</h2>
          <div className="relative right-2 ">
            <Image alt="butterfly-right" src={'/vismis/butterfly-right.svg'} width={72} height={72}/>
          </div>
        </div>
        <div className=" w-full md:px-8">
          <p style={{color: '#D9D9D9'}}
             className="text-center px-12 md:px-6 text-xs md:text-3xl sm:text-xl">Parade Wisuda Oktober
            2024 merupakan wadah pemberian apresiasi kepada wisudawan melalui Kementerian Apresiasi dan Kolaborasi Massa
            dibawah Kementrian Koordinator Integrasi dan Dinamisasi Kampus. Namun tak hanya tentang apresiasi, tetapi
            parade wisuda juga tentang budaya mahasiswa sarjana ITB.</p>
        </div>
      </div>
      {/* VISI MISI */}
      <div
        className="md:h-full w-full flex md:mt-16 flex-col md:flex-row gap-x-10 md:gap-x-12 justify-center ">
        <div className=" h-38 md:h-full flex  flex-col items-center w-72 md:w-1/3 mx-auto md:mx-0 ">
          <h2 className="md:text-5xl mt-20 md:mt-0 text-3xl bg-gradient-text-aboutus pb-4">VISI</h2>
          <div className="rounded-3xl relative h-64 md:h-96 overflow-hidden bg-gradient-vm flex items-center">
            <Image className="w-full absolute top-0 " alt="cloud-vm-1" src={'/vismis/cloud-vm-1.svg'} width={181}
                   height={516} style={{objectFit: 'cover'}}/>
            <p style={{color: '#D9D9D9'}}
               className="text-center text-sm px-4 md:px-8 md:text-2xl">Perayaan <br/> Wisuda
              Oktober 2024 <br/> sebagai wadah apresiasi wisudawan <br/> dan kolaborasi massa kampus yang inovatif,<br/>efektif,
              efisien, dan penuh <br/> kemeriahan</p>
            <Image className="absolute bottom-0 w-full" alt="cloud-vm-2"
                   src={'/vismis/cloud-vm-2.svg'} width={181} height={516} style={{objectFit: 'cover'}}/>
          </div>
        </div>
        <div
          className="h-38 md:h-full flex relative md:static md:bottom-0 flex-col items-center w-72 md:w-1/3 mx-auto md:mx-0 ">
          <h2 className="relative md:text-5xl mt-24 md:mt-0 text-3xl bg-gradient-text-aboutus pb-4">MISI</h2>
          <div className="rounded-3xl relative h-64 md:h-96 overflow-hidden bg-gradient-vm flex items-center">
            <Image className="absolute top-0 w-full md:h-42" alt="cloud-vm-1" src={'/vismis/cloud-vm-1.svg'}
                   width={181} height={516} style={{objectFit: 'cover'}}/>
            <p style={{color: '#D9D9D9'}}
               className="text-center text-sm px-4 md:px-8 md:text-xl z-10">
              1. Menciptakan wadah apresiasi yang meriah di Parade Wisuda Oktober 2024 <br/>
              2. Menciptakan wadah kolaborasi untuk setiap elemen KM ITB <br/>
              3. Merancang konsep Parade Wisuda Oktober 2024 yang inovatif, efektif, dan efisien <br/>
              4. Menciptakan lingkungan kepanitian Parade Wisuda Oktober 2024 yang ergonomis<br/>
            </p>
            <Image className="absolute bottom-0 md:h-42 w-full" alt="cloud-vm-2"
                   src={'/vismis/cloud-vm-2.svg'} width={181} height={516} style={{objectFit: 'cover'}}/>
          </div>
        </div>
      </div>
      {/* DECORATION */}
      {/*<div className="absolute -z-[5] flex justify-between w-full overflow-hidden top-16 md:top-32">*/}
      {/*  /!* Cloud Left *!/*/}
      {/*  <div className=" md:w-1/4 scale-75 md:scale-100 md:left-0 -left-12 relative top-10 md:top-0">*/}
      {/*    <Image*/}
      {/*      alt="cloud-left"*/}
      {/*      src="/vismis/cloud-left.svg"*/}
      {/*      width={449}*/}
      {/*      height={567}*/}
      {/*      className="w-full h-auto"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  /!* Cloud Right *!/*/}
      {/*  <div className="relative scale-75 md:scale-100  md:-right-0 -right-7 md:w-1/3 top-12 md:top-0">*/}
      {/*    <Image*/}
      {/*      alt="cloud-right"*/}
      {/*      src="/vismis/cloud-right.svg"*/}
      {/*      width={560}*/}
      {/*      height={567}*/}
      {/*      className="w-full h-auto"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* Right decoration */}
      {/*<div*/}
      {/*  className="hidden md:block absolute -right-24 -top-52 md:top-24 scale-50 md:w-1/6 overflow-hidden -z-[5] h-auto"*/}
      {/*  style={{clipPath: 'inset(0 0 37% 0)'}}>*/}
      {/*  <Image*/}
      {/*    alt="blue-leaf-1"*/}
      {/*    className="relative"*/}
      {/*    src={'/vismis/blue-leaf-1.svg'}*/}
      {/*    width={250}*/}
      {/*    height={122}*/}
      {/*    style={{objectFit: "cover"}}/>*/}
      {/*  <Image*/}
      {/*    alt="blue-leaf-2"*/}
      {/*    className="relative bottom-1"*/}
      {/*    src={'/vismis/blue-leaf-2.svg'}*/}
      {/*    width={250}*/}
      {/*    height={122}*/}
      {/*    style={{objectFit: "cover"}}/>*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className=" block md:hidden absolute -right-20 mt-20 top-1/3  md:top-36 h-auto w-1/3  md:w-1/6 overflow-hidden z-20 ">*/}
      {/*  <Image*/}
      {/*    alt="blue-leaf-1"*/}
      {/*    src={'/vismis/blue-leaf-1.svg'}*/}
      {/*    width={60}*/}
      {/*    height={30}*/}
      {/*    style={{objectFit: "cover"}}/>*/}
      {/*  <Image*/}
      {/*    alt="blue-leaf-2"*/}
      {/*    className="relative bottom-1"*/}
      {/*    src={'/vismis/blue-leaf-2.svg'}*/}
      {/*    width={60}*/}
      {/*    height={30}*/}
      {/*    style={{objectFit: "cover"}}/>*/}
      {/*</div>*/}
    </div>
  )
}   