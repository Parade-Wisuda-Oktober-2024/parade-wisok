"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
  return (
    <div
    className="h-screen flex items-center justify-center bg-opacity-80"
    style={{ background: 'linear-gradient(to right,  #92007F,#542980)' }}
  >
        <div className="max-w-4xl w-full h-[60%] px-20 pb-15 relative bg-[#3a0758] bg-opacity-35 rounded-lg shadow-lg text-center">
            <div className="relative flex flex-col items-center justify-center mb-10 mt-12">
                {/* Burung kiri */}
                <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120} className='absolute bottom-[-60px] left-[170px] rotate-[140deg] sm:bottom-[-25px] sm:left-[130px] md:bottom-[-35px] md:left-[130px] lg:bottom-[-75px] lg:left-[175px] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[80px] md:h-[80px] lg:w-[125px] lg:h-[125px]' />
                
                {/* Title */}
                <h1 className="title bg-gradient-to-b from-text-alt to-text bg-clip-text text-transparent font-bold m-0 relative z-10 [text-shadow:2px_2px_10px_#FFF3D9] ">LOGIN
                </h1>
                
                
                {/* Burung kanan */}
                <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120} className='absolute top-[-80px] right-[150px] rotate-[-50deg] sm:top-[-35px] sm:right-[105px] md:top-[-45px] md:right-[105px] lg:top-[-65px] lg:right-[125px] w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] m-0'/>
            </div>
            <form id="loginForm" className="space-y-3 py-2">
                <p className='text-left text-white text-2xl'>Username</p>
                <input type="text" id="username" placeholder="Username" value={username} onChange={handleInputChange} className="w-full px-4 py-3 font-paragraph text-2xl bg-[#8063bb] bg-opacity-60 text-white rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></input>
                <p className='text-left text-white text-2xl'>Password</p>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 font-paragraph text-2xl bg-[#8063bb] bg-opacity-60 text-white rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></input>
                <button type="submit" className="absolute bottom-[30px] left-[350px] w-1/5 bg-[#FFD866] bg-opacity-85 py-2 rounded-lg text-black font-paragraph sm:left-[250px] md:left-[320px] lg:left-[360px] hover:bg-opacity-100 transition duration-300">LOGIN</button>
            </form>
        </div>
        <Image src={'/login/VIS 4.png'} alt='swirl' width={1500} height={1500} className='absolute top-0 right-1/12 w-[200vw] translate-y-[-12rem] rotate-[-3deg] opacity-50'></Image>
    </div>

  );
};

export default Login;