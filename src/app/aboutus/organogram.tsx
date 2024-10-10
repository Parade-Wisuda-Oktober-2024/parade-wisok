"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import OrganogramCard from "./organogram-card";
import OnoHeader from "~/components/onoheader";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="KETUA PELAKSANA" batch="TM'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">KESEKJENAN</OnoHeader>
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-left" data-aos-delay="200">
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">KESEKJENAN</OnoHeader>
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">KESEKJENAN</OnoHeader>
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <OnoHeader className="flex items-center justify-center text-2xl sm:text-4xl lg:text-6xl py-12 sm:py-16 lg:py-20">KESEKJENAN</OnoHeader>
      </div>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="200">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
    </div>
  );
}

export default Organogram;