"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {type SubmitHandler, useForm} from 'react-hook-form';
import {toast} from "sonner";
import {Eye, EyeOff} from "lucide-react";
import type {Session} from "@auth/core/types";

interface LoginInput {
  username: string;
  password: string;
}

export default function Login({session}: { session: Session | null }) {
  const router = useRouter();

  const {register, handleSubmit} = useForm<LoginInput>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginInput> = async (data, event) => {
    event?.preventDefault()
    const result = await signIn('credentials', {
      redirect: false,
      nim: data.username,
      password: data.password,
    });

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success("Login Berhasil")
      router.push('/profile');
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }

  if (!!session) {
    router.back();
    return null;
  }

  return (
    <div
      className="max-w-screen h-screen flex items-center justify-center bg-opacity-80 overflow-hidden box-border"
      style={{background: 'linear-gradient(to right,  #92007F,#542980)'}}
    >
      <div
        className="w-max sm:w-full h-min sm:max-w-2xl sm:h-min px-8 md:px-20 py-12 md:pb-15 md:pt-[0] relative bg-[#3a0758] bg-opacity-35 rounded-lg shadow-lg text-center z-10">
        <div
          className="relative flex flex-col items-center justify-center sm:h-[50px] sm:mb-2 sm:mt-3 md:h-[60px] md:mb-3 md:mt-10 lg-[80px] lg:mb-12 lg:mt-14 xl:h-[100px] xl:mb-18 xl:mt-18">
          {/* Burung kiri */}
          <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120}
                 className='absolute bottom-[15px] left-[15px] w-[60px] h-[30px] rotate-[140deg] sm:bottom-[-10px] sm:left-[120px] md:bottom-[-35px] md:left-[100px] lg:bottom-[-60px] lg:left-[75px] sm:w-[80px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[125px] lg:h-[125px]'/>
          {/* Title */}
          <h1
            className="title bg-gradient-to-b from-text-alt to-text bg-clip-text text-transparent font-bold m-0 relative z-10 [text-shadow:2px_2px_10px_#FFF3D9] ">LOGIN
          </h1>
          {/* Burung kanan */}
          <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120}
                 className='absolute top-[15px] right-[15px]  w-[60px] h-[30px] rotate-[-50deg] sm:top-[-10px] sm:right-[115px] md:top-[-45px] md:right-[85px] lg:top-[-65px] lg:right-[50px] sm:w-[80px] sm:h-[60px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] m-0'/>
        </div>
        <form id="loginForm" onSubmit={(e) => handleSubmit(onSubmit)(e)}
              className="space-y-1 py-2 relative h-[230px] sm:h-[13rem] md:h-[13rem] lg:h-[15rem] xl:h-[15rem] md:mb-10">
          <p className='text-left text-white text-lg'>NIM</p>
          <input type="text" id="username"
                 placeholder="NIM" {...register('username', {required: 'username is required'})}
                 className="w-full px-4 py-1 text-lg bg-[#8063bb] bg-opacity-60 text-white rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></input>
          <p className='text-left text-white text-lg'>Password</p>
          <div className='relative'>
            <input type={showPassword ? 'text' : 'password'} id="password"
                   placeholder="Password"  {...register('password', {required: 'Password is required'})}
                   className="w-full px-4 py-1 text-lg bg-[#8063bb] bg-opacity-60 text-white rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"></input>
            <button type="button" onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1 p-1 bg-transparent transition-all text-gray-500 hover:text-gray-300">
              {showPassword ? (<Eye/>) : (
                <EyeOff/>)}
            </button>
          </div>
          <button type="submit"
                  className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-1/3  text-[#3a0758] bg-[#FFD866] bg-opacity-85 py-2 rounded-lg font-paragraph hover:bg-opacity-100 transition duration-300">
            <Image src={'/login/VIS 11.png'} alt='burung' width={80} height={120}
                   className='absolute bottom-[0px] left-[-10px] w-[40px] h-[20px] opacity-70 rotate-[135deg] sm:bottom-[-5px] sm:left-[15px] md:bottom-[-8px] md:left-[20px] lg:bottom-[-10px] lg:left-[5px] sm:w-[70px] sm:h-[30px] md:w-[75px] md:h-[35px] lg:w-[100px] lg:h-[40px]'/>
            <Image src={'/login/VIS 12.png'} alt='bintang' width={120} height={120}
                   className='absolute bottom-[-2px] left-[20px]  w-[20px] h-[20px] opacity-70 sm:top-[22px] sm:left-[65px] md:top-[22px] md:left-[75px] lg:top-[21px] lg:left-[75px] sm:w-[15px] sm:h-[15px] md:w-[25px] md:h-[20px] lg:w-[30px] lg:h-[20px] m-0'/>
            LOGIN
            <Image src={'/login/VIS 12.png'} alt='bintang' width={120} height={120}
                   className='absolute top-[0px] right-[20px] w-[20px] h-[20px] opacity-70 sm:top-[0px] sm:right-[65px] md:top-[-2px] md:right-[65px] lg:top-[-2px] lg:right-[65px] sm:w-[15px] sm:h-[15px] md:w-[25px] md:h-[20px] lg:w-[30px] lg:h-[20px] m-0'/>
            <Image src={'/login/VIS 11.png'} alt='burung' width={120} height={120}
                   className='absolute top-[0px] right-[-10px] w-[40px] h-[20px] opacity-70 rotate-[-50deg] sm:top-[-8px] sm:right-[15px] md:top-[-9px] md:right-[15px] lg:top-[-12px] lg:right-[0px] sm:w-[70px] sm:h-[30px] md:w-[75px] md:h-[35px] lg:w-[100px] lg:h-[40px] m-0'/>
          </button>
        </form>
      </div>
      <div className='overflow-x-hidden box-border'>
        <Image src={'/login/VIS 4.png'} alt='swirl' width={1500} height={1500}
               className='absolute top-0 right-1/4 w-full translate-x-[6rem] translate-y-[-1rem] sm:translate-x-[10rem] sm:translate-y-[-5rem] md:translate-x-[14rem]  md:translate-y-[-6rem]  lg:translate-x-[16rem]  xl:translate-x-[21rem] opacity-50'></Image>
      </div>
    </div>

  );
};
