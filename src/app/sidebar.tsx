'use client'
import Image from "next/image";
import close from "../../public/close.png"
import Link from "next/link";

const Sidebar = ({setSidebar,taFair,graduates,merchandise,sponshorship,aboutUs}) => {
  return(
    <div className="fixed top-0 right-0 h-svh w-[236px] bg-[url('/navbar-bg.png')] z-50 bg-center px-[25px] pt-[20px] pb-[30px] text-[28px] text-[#FEE59A] transition-all bg-cover">
      <div className="w-full flex flex-col justify-between h-full text-center">
        <div className="flex flex-col gap-[16px]">
          <div onClick={()=>setSidebar(false)} className="flex justify-end"><Image src={close} alt="close-button"/></div>
          <Link href="/TaFair">
            <div className={`p-[10px] ${!taFair ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>TA Fair<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${taFair ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
          </Link>
          <Link href="/Graduates">
            <div className={`p-[10px] ${!graduates ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Graduates<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${graduates ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
          </Link>
          <Link href="/Merchandise">
            <div className={`p-[10px] ${!merchandise ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Merchandise<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${merchandise ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
          </Link>
          <Link href="/Sponsorship">
            <div className={`p-[10px] ${!sponshorship ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Sponsorship<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${sponshorship ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
          </Link>
          <Link href="/AboutUs">
            <div className={`p-[10px] ${!aboutUs ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>About us<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${aboutUs ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
          </Link>
        </div>
        <Link href="/Login">
          <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
            Login
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;