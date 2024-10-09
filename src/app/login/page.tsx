"use client";
import React, { useState } from 'react';
import Image from 'next/image';


const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    /*const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setErrorMessage(null);
      setSuccessMessage(null);

      try {
        const response = await axios.post('http://localhost:3000/login', {
          username,
          password,
        });

        setSuccessMessage('Login berhasil!');
        localStorage.setItem('token', response.data.token); // Simpan token JWT di local storage
      } catch (error: any) {
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Terjadi kesalahan, coba lagi.');
        }
      }
    };*/
  return (
    <div
    className="h-screen flex items-center justify-center bg-opacity-80"
    style={{ background: 'linear-gradient(to right,  #92007F,#542980)' }}
  >
        <div className="max-w-2xl w-full h-[75%] max-h-[500px] px-20 pb-15 relative bg-[#3a0758] bg-opacity-35 rounded-lg shadow-lg text-center z-10">
            <div className="relative flex flex-col items-center justify-center mb-10 mt-12">
                {/* Burung kiri */}
                <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120} className='absolute bottom-[-60px] left-[170px] rotate-[140deg] sm:bottom-[-25px] sm:left-[130px] md:bottom-[-35px] md:left-[100px] lg:bottom-[-60px] lg:left-[75px] w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[125px] lg:h-[125px]' />
                
                {/* Title */}
                <h1 className="title bg-gradient-to-b from-text-alt to-text bg-clip-text text-transparent font-bold m-0 relative z-10 [text-shadow:2px_2px_10px_#FFF3D9] ">LOGIN
                </h1>
                
                
                {/* Burung kanan */}
                <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120} className='absolute top-[-80px] right-[150px] rotate-[-50deg] sm:top-[-35px] sm:right-[115px] md:top-[-45px] md:right-[85px] lg:top-[-65px] lg:right-[50px] w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] m-0'/>
            </div>
            <form id="loginForm" className="space-y-1 py-2 relative h-[230px]">
                <p className='text-left text-white text-lg'>Username</p>
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-1  font-paragraph text-xl bg-[#8063bb] bg-opacity-60 text-white rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></input>
                <p className='text-left text-white text-lg'>Password</p>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-1 font-paragraph text-xl bg-[#8063bb] bg-opacity-60 text-white rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></input>
                <button type="submit" className="absolute bottom-[10px] left-[350px] w-1/4  text-[#3a0758] bg-[#FFD866] bg-opacity-85 py-2 rounded-lg font-paragraph sm:left-[180px] sm:bottom-[15px] md:left-[190px] lg:left-[200px] lg:bottom-[20px] hover:bg-opacity-100 transition duration-300">
                <Image src={'/login/VIS 11.png'} alt='burung' width={80} height={120} className='absolute bottom-[-60px] left-[170px] opacity-70 rotate-[135deg] sm:bottom-[-5px] sm:left-[-5px] md:bottom-[-8px] md:left-[-8px] lg:bottom-[-10px] lg:left-[-15px] w-[30px] h-[30px] sm:w-[70px] sm:h-[30px] md:w-[75px] md:h-[35px] lg:w-[100px] lg:h-[40px]' />
                <Image src={'/login/VIS 12.png'} alt='bintang' width={120} height={120} className='absolute top-[-80px] right-[150px] opacity-70 sm:top-[22px] sm:right-[55px] md:top-[22px] md:right-[60px] lg:top-[21px] lg:right-[55px] w-[40px] h-[40px] sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] m-0'/>
                LOGIN
                <Image src={'/login/VIS 12.png'} alt='bintang' width={120} height={120} className='absolute top-[-80px] right-[150px] opacity-70 sm:top-[0px] sm:right-[45px] md:top-[-2px] md:right-[45px] lg:top-[-2px] lg:right-[45px] w-[40px] h-[40px] sm:w-[15px] sm:h-[15px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] m-0'/>
                <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120} className='absolute top-[-80px] right-[150px] opacity-70 rotate-[-50deg] sm:top-[-6px] sm:right-[-5px] md:top-[-9px] md:right-[-10px] lg:top-[-12px] lg:right-[-20px] w-[40px] h-[40px] sm:w-[70px] sm:h-[30px] md:w-[75px] md:h-[35px] lg:w-[100px] lg:h-[40px] m-0'/>
                </button>
            </form>
        </div>
        <Image src={'/login/VIS 4.png'} alt='swirl' width={1500} height={1500} className='absolute top-0 right-1/12 w-[200vw] translate-y-[-12rem] rotate-[-3deg] opacity-50'></Image>
    </div>

  );
};

export default Login;