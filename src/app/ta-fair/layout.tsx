import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {eagleLake, fraunces, medieval} from "~/styles/font";
import Image from "next/image";
import { transform } from "next/dist/build/swc";
import Title from "~/components/title";

export const metadata: Metadata = {
  title: "Parade Wisokto ITB 2024",
  description: "Official website of Parade Wisokto ITB 2024",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${eagleLake.variable} ${fraunces.variable}`}>
      <body className={`${medieval.variable}`}>{children}</body>
    </html>
  );
}

export function BlocksLayout ({
  judulTA, 
  penulisTA, 
  jurusanPenulis,
  jumlahLove
}: Readonly <{
  judulTA : React.ReactNode;
  penulisTA : React.ReactNode;
  jurusanPenulis : React.ReactNode;
  jumlahLove : React.ReactNode;}>) {
  return (
    <div className="relative z-0 flex flex-1 my-3.5 border-yellow-300 border-solid border-2 rounded-lg">
        <div className= "relative flex z-0 flex-col bg-[url('/blocks-bg.png')] justify-center items-center py-20 px-2.5 rounded-md">
          {/* ornaments */}
          <div className="absolute top-1/3 right-0 z-0 w-auto h-1/3">
            <Image
              src={'/VIS-SWIRL-2.png'}
              alt="/VIS-SWIRL-2.png"
              width={200}
              height={0}
            />
          </div>

          <div className="absolute top-2/3 left-0 z-0 w-auto h-1/5">
            <Image
              src={'/VIS-SWIRL-2.png'}
              alt="/VIS-SWIRL-2.png"
              width={100}
              height={50}
              style={{transform :'scaleX(-1)'}}
            />
          </div>

          <div className="absolute top-2/3 left-10 z-0 w-auto h-1/5">
            <Image
              src={'/VIS-25-3.png'}
              alt="/VIS-SWIRL-2.png"
              width={40}
              height={40}
              className="-rotate-45"
              // style={{rotate : 2}}
            />
          </div>

          {/* main content */}
          <h2 className="font-serif text-center z-10 my-1.5 mx-32 text-2xl">
            {judulTA}
          </h2>

          <h4 className="font-serif z-10 my-1.5 text-lg">
              {penulisTA}
          </h4>

          <h4 className="font-serif z-10 my-1.5 text-lg">
              {jurusanPenulis}
          </h4>

          <h4 className="font-serif flex items-center z-10 my-1.5">
              <Image
                  src={"/heart.png"}
                  alt={"Heart"}
                  width={18}
                  height={0}
                  className="h-5/6 mx-2"
              />                   
              {jumlahLove}
          </h4>
      </div>
    </div>
  );
}


export function NumberCarouselInactive({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-[rgba(45,37,73,255)] z-0 justify-center items-center rounded-full w-10 h-10">

      <div className="relative inset-0 flex z-10 bg-[url('/Ellipse-1.png')] bg-contain bg-no-repeat w-10 h-10 justify-center items-center text-[rgb(250,230,149)]">
          {children}
      </div>
    </div>
  );
}

export function NumberCarouselActive({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-[rgb(250,230,149)] z-0 justify-center items-center rounded-full w-10 h-10">

      <div className="relative inset-0 flex z-10 bg-[url('/Ellipse-1.png')] bg-contain bg-no-repeat w-10 h-10 justify-center items-center text-[rgba(45,37,73,255)]">
          {children}
      </div>
    </div>
  );
}

export function TADetailLayout({
  judulTA,
  penulisTA,
  jurusanPenulis,
  jumlahLove,
  contentAbstrak
}: Readonly<{ judulTA : React.ReactNode;
  penulisTA : React.ReactNode;
  jurusanPenulis : React.ReactNode;
  jumlahLove : React.ReactNode;
  contentAbstrak : React.ReactNode;}>) {
  return (
    <div className="relative bg-[url('/tafair.png')] bg-no-repeat z-0 justify-center items-center flex flex-col w-full min-h-screen rounded-2xl">

          {/* Ornaments */}
          <div className="absolute left-[4%] top-[10%] h-1/2 z-0">
                  <Image
                  src={'/VIS 12 8.svg'}
                  alt="/VIS 12 8.svg"
                  width={80}
                  height={80}
                  />
          </div>

          <div className="absolute left-[1%] top-[20%] h-1/2 z-0">
                  <Image
                  src={'/VIS 12 9.svg'}
                  alt="/VIS 12 9.svg"
                  width={50}
                  height={50}
                  />
          </div>

          <div className="absolute right-[4%] top-[10%] h-1/2 z-0">
                  <Image
                  src={'/VIS 12 8.svg'}
                  alt="/VIS 12 8.svg"
                  width={80}
                  height={80}
                  />
          </div>

          <div className="absolute right-[1%] top-[20%] h-1/2 z-0">
                  <Image
                  src={'/VIS 12 9.svg'}
                  alt="/VIS 12 9.svg"
                  width={50}
                  height={50}
                  />
          </div>

          {/* MAIN CONTENT */}

          <h2 className="font-serif text-center z-10 mt-16 mb-1 mx-24 text-3xl text-[rgba(254, 229, 154, 1)]">
            {judulTA}
          </h2>

          <h4 className="font-serif z-10 my-1 text-[rgba(254, 229, 154, 1)] text-lg">
              {penulisTA}
          </h4>

          <h4 className="font-serif z-10 mt-1 mb-2 text-[rgba(254, 229, 154, 1)] text-lg">
              {jurusanPenulis}
          </h4>

          <section className="flex-col flex-1 mt-4 justify-center items-center mx-28">  {/* container */}
            {/* ABSTRAK and ornaments */}
            <div className="w-full mt-4 mb-2 font-serif text-2xl">
              ABSTRAK
            </div>

            {/* content abstrak */}
            <div className="text-[rgba(254, 229, 154, 1)] font-serif mt-4">
              {contentAbstrak}
            </div>
          </section>

          {/* BACA ABSTRAK */}
          <section className="flex-col flex-1 mt-16 mb-10 justify-center items-center mx-20">
            <div className="justify-center items-center font-serif underline-offset-1 underline my-6">
                <h2 className="font-serif tracking-wide">
                  <a href="#">
                  Baca Abstrak Lengkap  
                  </a>
                </h2>
            </div>

            <div className="flex-col flex-1 justify-center items-center">
              <h4 className="justify-center font-serif flex items-center z-10 text-[rgba(254, 229, 154, 1)]">
                <Image
                    src={"/heart.png"}
                    alt={"Heart"}
                    width={18}
                    height={0}
                    className="h-5/6 mx-2"
                />                   
                {jumlahLove}
              </h4>
            </div>
          </section> 

          {/* Swirl Ornaments */}
          <div className="relative flex flex-1 flex-col h-1/3 right-0 z-0 w-full justify-center items-end">
              <Image
              src={'/VIS-SWIRL-2.png'}
              alt="/VIS-SWIRL-2.png"
              width={300}
              height={300}
              />
          </div>
    </div>
  );
}