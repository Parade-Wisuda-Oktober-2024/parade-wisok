import React from "react";
import Title1 from "./Title3";
import Title2 from "./Title2";
import SeparatorLanding from "~/components/separator-landing";

const Details: React.FC = () => {
    return (
      <div className="relative z-10 flex flex-col items-center min-h-screen h-screen justify-center md:py-20">
        <img
          src="/VIS 4.svg"
          alt="VIS 4"
          className="w-screen mx-auto absolute top-0 z-0"
        />
        <img
          src="/IMG_2009 1.svg"
          alt="IMG_2009 1"
          className="absolute bottom-[10vh] w-48 md:w-96 right-0 z-0"
        />
        <img
          src="/IMG_2009 2.svg"
          alt="IMG_2009 2"
          className="absolute bottom-[10vh] w-40 md:w-96 left-0 z-0"
        />
        <div className="flex flex-col items-center z-10 mb-10 md:mb-14">
          <Title1 className="text-4xl md:text-6xl lg:text-8xl">WELCOME TO</Title1>
          <Title1 className="text-4xl md:text-6xl lg:text-8xl">WISOKTO 2024</Title1>
        </div>
        <p
          className="lg:text-3xl md:text-2xl text-xl mb-2 text-white font-['Fraunces']; font-medium">“Lands of The Legends”</p>
        <div className="flex flex-col items-center md:w-[575px] mb-4">
          <p
            className="text-wrap lg:w-[700px] md:w-[500px] w-[300px] text-center text-[#d9d9d9] md:text-lg font-medium">
            Parade Wisuda Oktober 2024 merupakan wadah pemberian apresiasi kepada wisudawan
            melalui Kementerian Apresiasi dan Kolaborasi Massa dibawah Kementrian Koordinator
            Integrasi dan Dinamisasi Kampus. Namun tak hanya tentang apresiasi, tetapi parade
            wisuda juga tentang budaya mahasiswa sarjana ITB.
          </p>
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-6 z-10">
          <Title2 className="text-3xl md:text-5xl lg:text-6xl">SUNDAY OCTOBER</Title2>
          <Title2 className="text-3xl md:text-5xl lg:text-6xl">27TH 2024</Title2>
        </div>
        <SeparatorLanding />
      </div>
    );
};
export default Details;
