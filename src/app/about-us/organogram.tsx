"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import OrganogramCard from "./organogram-card";
import OnoHeader from "~/components/onoheader";
import AOS from "aos";
import "aos/dist/aos.css";
import { OrganogramCarousel } from "./organogram-carousel";
import { cardDataSekretaris,
         cardDataAcara,
         cardDataFundraising,
         cardDataKreatif,
         cardDataLapangan,
         cardDataManajemenPersonalia,
         cardDataOperasional,
         cardDataRelasi,
 } from "./dataorganogram";


const Organogram = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[url('/organogram/ono-bg.png')] bg-cover bg-center p-4">
      <div className="relative flex items-center justify-center mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        {/* Title background */}
        <div className="relative h-[100px] w-[250px] sm:h-[135px] sm:w-[330px] lg:h-[300px] lg:w-[765px]">
          <img src="/organogram/ono-title-bg.png" alt="titlebg" className="h-full w-full object-contain"/>
          <OnoHeader className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl lg:text-6xl">
            ORGANOGRAM
          </OnoHeader>
        </div>
        
        {/* Burung kiri */}
        <Image 
          src={'/organogram/ono-burung.png'} 
          alt='burung kiri' 
          width={160} 
          height={160} 
          className='absolute left-0 top-1/2 -translate-x-1/4 -translate-y-1/2 rotate-180 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]' 
        />
        
        {/* Burung kanan */}
        <Image 
          src={'/organogram/ono-burung.png'} 
          alt='burung kanan' 
          width={160} 
          height={160} 
          className='absolute right-0 top-1/2 translate-x-1/4 -translate-y-1/2 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]'
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Dimas Bintang P." title="KETUA PELAKSANA" batch="GD'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">KESEKJENAN</OnoHeader>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Rayhan Fadhil M." title="SEKRETARIS JENDERAL" batch="GD'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataSekretaris} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">PERSONALIA</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Rizma Dwinanda P." title="KETUA BIDANG" batch="ME'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Dwi Masitoh" title="WAKIL KETUA BIDANG" batch="ME'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Anjani Athaya R." title="SEKBEN BIDANG" batch="OS'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataManajemenPersonalia} />
      </div>


      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">ACARA</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Retta Tampubolon" title="KETUA BIDANG" batch="ET'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Marllyne Erythrina S." title="WAKIL KETUA BIDANG" batch="PG'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Christy Ixora M." title="SEKBEN BIDANG" batch="TI'23" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataAcara} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">LAPANGAN</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Andhika Prasetya A." title="KOORDINATOR LAPANGAN" batch="GD'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Elicia Hardiyanti" title="SEKRETARIS LAPANGAN 1" batch="GD'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Sabrina Fitra S." title="SEKRETARIS LAPANGAN 2" batch="KL'23" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataLapangan} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">FUNDRAISING</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Rachma Ayu W." title="KETUA BIDANG" batch="KI'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Hendri Saputra" title="WAKIL KETUA BIDANG" batch="MA'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Naufal Fauzan" title="SEKBEN BIDANG 1" batch="GL'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Mellisa Virginia B." title="SEKBEN BIDANG 2" batch="TI'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataFundraising} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">KREATIF</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Ahnaf Setya" title="KETUA BIDANG" batch="DKV'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Dimas Kurniawan" title="WAKIL KETUA BIDANG" batch="DI'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Maria P. Michelle" title="SEKBEN BIDANG" batch="DI'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataKreatif} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">RELASI</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Ijal" title="KETUA BIDANG" batch="MS'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Alda Aulia" title="WAKIL KETUA BIDANG" batch="TM'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Nayla Khansa A." title="SEKBEN BIDANG" batch="PG'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataRelasi} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center justify-center mb-8">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">OPERASIONAL</OnoHeader>
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Luthfi Yasser A." title="KETUA BIDANG" batch="ME'22" />
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Raju Imam S." title="WAKIL KETUA BIDANG" batch="GD'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Diva Aulia R." title="SEKBEN BIDANG 1" batch="ME'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="Masayu Arde L." title="SEKBEN BIDANG 2" batch="GD'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OrganogramCarousel cardsData={cardDataOperasional} />
      </div>
  
    </div>
  );
}

export default Organogram;