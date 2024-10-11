'use client'
import Image from "next/image"
import logo from "../../public/logo.png"
import burger from "../../public/burger.svg"
import nav from "../../public/navbar-bg.png"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet"

const NavBar = () => {
  const pathname = usePathname()
  const [taFair, setTaFair] = useState(false)
  const [graduates, setGraduates] = useState(false)
  const [merchandise, setMerchandise] = useState(false)
  const [sponshorship, setSponsorship] = useState(false)
  const [aboutUs, setAboutUs] = useState(false)
  useEffect(()=> {
    setTaFair(false)
    setGraduates(false)
    setMerchandise(false)
    setSponsorship(false)
    setAboutUs(false)
    if (pathname == "/TaFair") setTaFair(true)
    else if (pathname == "/Graduates") setGraduates(true)
    else if (pathname == "/Merchandise") setMerchandise(true)
    else if (pathname == "/Sponsorship") setSponsorship(true)
    else if (pathname == "/AboutUs") setAboutUs(true)
  },[pathname])
  return(
    <div>
      <div className="h-[73px] xl:h-[83px] w-full">
        <div className="bg-[url('/navbar-bg.png')] w-full h-full bg-center relative bg-cover">
          <div className="bg-[url('/ornament.png')] w-full h-full bg-center bg-cover flex xl:justify-between px-4 xl:px-[40px] bg-opacity-60">
            <div className="flex items-center justify-between gap-2 w-full">
              <Link href="/">
                <div className="w-full flex items-center gap-2">
                  <div className="w-[68.124px] h-[61px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"><Image src={logo} alt="logo wisokto" objectFit="contain"/></div>
                  <div className="h-[28px] font-bold text-3xl text-[#F9BE6B] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap ">WISOKTO 2024</div>
                </div>
              </Link>
              <Sheet>
                <SheetTrigger><div className="w-[23.9px] h-[18.59px] xl:hidden"><Image src={burger} alt="dropdown" objectFit="contain"/></div></SheetTrigger>     
                <SheetContent className="px-[25px] pt-[60px] pb-[30px] text-[28px] text-[#FEE59A] font-header">
                  <div className="flex flex-col justify-between h-full text-center">
                    <div className="flex flex-col gap-[16px]">
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
                    <Image src={nav} objectFit="cover" alt="" fill className="-z-10"/>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden xl:flex gap-[12px] text-[#F9BE6B] font-bold text-[28px] items-center whitespace-nowrap">
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
              <div>
                <Link href="/Login">
                  <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none">
                    Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default NavBar;