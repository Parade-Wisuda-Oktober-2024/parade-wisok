"use client"

import Image from 'next/image';
import BackgroundProfileCard from "public/profile/bg-profile-card.png";
import { useState } from 'react';

export default function ProfileCard() {
  const [password, setPassword] = useState('');

  return (
    <section
      className="w-full py-16 flex flex-col items-center md:max-w-[700px] md:w-3/4 lg:max-w-[900px] xl:max-w-[1100px] rounded-xl shadow-md z-10"
      style={{
        backgroundImage: `url(${BackgroundProfileCard.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="m-auto px-6 md:px-20 w-full bg-transparent rounded-md">
        <h2 className="font-header text-3xl md:text-5xl font-bold mb-4">Nama</h2>
        <p className="font-header font-semibold text-xl md:text-2xl mb-6">Muhammad Fadhlan Armen</p>

        <h2 className="font-header text-3xl md:text-5xl font-bold mb-4">NIM</h2>
        <p className="font-header font-semibold text-xl md:text-2xl mb-6">18223115</p>

        <h2 className="font-header text-3xl md:text-5xl font-bold mb-4">Jurusan</h2>
        <p className="font-header font-semibold text-xl md:text-2xl mb-6">Sistem Teknologi Informasi</p>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2 className="font-header text-3xl md:text-5xl font-bold mb-4">Password</h2>
            <Image 
              src="/profile/pencil.svg"
              alt="Pencil"
              width={50} 
              height={50} 
              className="md:ml-10" 
            />
          </div>
          <div className='relative bg-[#401571AD] bg-opacity-60 max-w-full md:max-w-[800px] rounded-xl flex items-center shadow-none'>
            <input
              type="password"
              className="px-4 py-2 w-full bg-transparent font-sub-sub-header text-[#FEE59A] placeholder-[#FEE59A] text-lg md:text-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="absolute right-2 flex items-center space-x-2 md:space-x-4">
              <Image 
                src='/profile/close.svg' 
                alt="Close Icon" 
                width={20} 
                height={20} 
                className="cursor-pointer"
                onClick={() => setPassword('')}
              />
              <Image 
                src='/profile/centang.svg' 
                alt="Check Icon" 
                width={30} 
                height={30} 
                className="cursor-pointer"
                onClick={() => setPassword('')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
