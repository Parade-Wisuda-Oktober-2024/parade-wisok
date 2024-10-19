import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {eagleLake, fraunces, medieval} from "~/styles/font";
import Image from "next/image";
import { transform } from "next/dist/build/swc";

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

          <h4 className="font-serif z-10 my-1.5">
              {penulisTA}
          </h4>

          <h4 className="font-serif z-10 my-1.5">
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