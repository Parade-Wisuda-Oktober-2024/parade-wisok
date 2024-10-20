import Title from "~/components/title";
import BackgroundImage from "public/profile/bg-profile.png";
import ProfileCard from "~/components/profile/ProfileCard";
import Image from 'next/image';
import {BlocksLayout} from "~/app/ta-fair/wrapper";
import * as React from "react";
import {WoaCard} from "~/app/woa/woa-card";
import CarouselMessage from "~/app/profile/carousel";

export default function Profile() {
  return (
    <section
      className="w-full pb-16 pt-28 md:pt-36 flex flex-col items-center px-6 md:px-8 lg:px-10"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute translate-y-[-140px] z-0">
        <Image
          src="/profile/bg-top-profile.png"
          alt="Background"
          width={1920}
          height={1080}
          className="max-w-full overflow-hidden"
        />
      </div>
      <div className="flex flex-col items-center z-10 gap-5 mb-14">
        <Title>HAI PENAKLUK</Title>
        <Title>ITB</Title>
      </div>
      <ProfileCard/>
      <div className="flex flex-col items-center z-10 mt-14 gap-5 mb-14 ">
        <Title>YOUR</Title>
        <Title>ACHIEVEMENT</Title>
      </div>
      {/* COMPONENT TA FAIR */}
      <BlocksLayout
        judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
        penulisTA={"Muhammad Fadhlan Armon"}
        jurusanPenulis={"Manajemen"}
        jumlahLove={"6"}
        className="lg:w-3/4"
      />
      <div className="flex flex-col items-center z-10 mt-16 gap-5 mb-14 ">
        <Title>Pesan</Title>
      </div>
      {/* COMPONENT WOA + ARROW ICON */}
      <div className="z-10 mx-auto w-full md:w-3/4">
        <CarouselMessage/>
      </div>
    </section>
  );
}