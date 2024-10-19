'use client'
import Image from "next/image"
import logo from "../../../public/logo.png"
import burger from "../../../public/burger.svg"
import navPrimary from "../../../public/navbar-bg.png"
import navSecondary from "../../../public/ornament.png"
import profile from "../../../public/user-profile.svg"
import border from "../../../public/border.png"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "~/components/ui/menubar"
import foot from "../../../public/footer-bg.png"

const NavBar = () => {
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   // Assuming the session is globally available, for example, window.session
  //   const globalSession = window.session; // Replace with the actual global session variable
  //   setSession(globalSession);
  // }, []); // This only runs once when the component mounts
  const pathname = usePathname()
  const [taFair, setTaFair] = useState(false)
  const [graduates, setGraduates] = useState(false)
  const [merchandise, setMerchandise] = useState(false)
  const [sponshorship, setSponsorship] = useState(false)
  const [aboutUs, setAboutUs] = useState(false)
  // DUMMY STATE BUAT HOLD STATE ADA ATAU TIDAKNYA SESSION
  // ELEMENT YANG DIRENDER BASED ON STATE SESSION: PROFIL dan TOMBOL LOGIN, both di navbar dan slidebar
  const [session, setSession] = useState(true)

  useEffect(()=> {
    setTaFair(false)
    setGraduates(false)
    setMerchandise(false)
    setSponsorship(false)
    setAboutUs(false)
    if (pathname == "/ta-fair") setTaFair(true)
    else if (pathname == "/graduates") setGraduates(true)
    else if (pathname == "/merchandise") setMerchandise(true)
    else if (pathname == "/sponsorship") setSponsorship(true)
    else if (pathname == "/about-us") setAboutUs(true)
  },[pathname])
  return(
    <div>
      <div className="h-[73px] xl:h-[83px] w-full relative">
        <div className="flex items-center absolute h-full w-full overflow-hidden">
          <Image src={navPrimary} alt="navigation-1" objectFit="cover" fill/>
        </div>
        <div className="flex items-center absolute h-full w-full overflow-hidden">
          <Image src={navSecondary} alt="navigation-1" objectFit="cover" fill className="opacity-60"/>
        </div>
        <div className="flex justify-between px-4 xl:px-[40px] items-center gap-2 h-full w-full">
          <Link href="/">
            <div className="w-full flex items-center gap-2">
              <div className="w-[68.124px] h-[61px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"><Image src={logo} alt="logo wisokto" objectFit="contain"/></div>
              <div className="h-[28px] font-bold text-3xl text-[#F9BE6B] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap ">WISOKTO 2024</div>
            </div>
          </Link>
          <Sheet>
            <SheetTrigger className="z-10"><div className="w-[23.9px] h-[18.59px] xl:hidden"><Image src={burger} alt="dropdown" objectFit="contain"/></div></SheetTrigger>     
            <SheetContent className="px-[25px] pt-[60px] pb-[30px] text-[28px] text-[#FEE59A] font-header">
              <div className="flex flex-col justify-between h-full text-center">
                <div className="flex flex-col gap-[16px]">
                  <Link href="/ta-fair">
                    <div className={`p-[10px] ${!taFair ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>TA Fair<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${taFair ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
                  </Link>
                  <Link href="/graduates">
                    <div className={`p-[10px] ${!graduates ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Graduates<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${graduates ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
                  </Link>
                  <Link href="/merchandise">
                    <div className={`p-[10px] ${!merchandise ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Merchandise<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${merchandise ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
                  </Link>
                  <Link href="/sponsorship">
                    <div className={`p-[10px] ${!sponshorship ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Sponsorship<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${sponshorship ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
                  </Link>
                  <Link href="/about-us">
                    <div className={`p-[10px] ${!aboutUs ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>About us<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${aboutUs ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
                  </Link>
                </div>
                <div className="flex flex-col gap-[16px]">
                  {!session &&
                    <Link href="/login">
                      <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
                        Login
                      </div>
                    </Link>
                  }
                  {session &&
                  <>
                    <Link href="/profile">
                      <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
                        Profile
                      </div>
                    </Link>
                    <Link href="/log-out">
                      <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
                        Log Out
                      </div>
                    </Link>
                  </>
                  }
                </div>
                <Image src={navPrimary} objectFit="cover" alt="" fill className="-z-10"/>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden xl:flex gap-[12px] text-[#F9BE6B] font-bold text-[28px] items-center whitespace-nowrap z-20">
            <Link href="/ta-fair">
              <div className={`p-[10px] ${!taFair ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>TA Fair<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${taFair ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
            </Link>
            <Link href="/graduates">
              <div className={`p-[10px] ${!graduates ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Graduates<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${graduates ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
            </Link>
            <Link href="/merchandise">
              <div className={`p-[10px] ${!merchandise ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Merchandise<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${merchandise ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
            </Link>
            <Link href="/sponsorship">
              <div className={`p-[10px] ${!sponshorship ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>Sponsorship<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${sponshorship ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
            </Link>
            <Link href="/about-us">
              <div className={`p-[10px] ${!aboutUs ? 'hover:bg-[#FF8CD926]': ''} rounded-lg transition-all`}>About us<div className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${aboutUs ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div></div>
            </Link>
            <div>
            {!session &&
              <Link href="/login">
                <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none">
                  Login
                </div>
              </Link>  
            }
            {session &&
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <div className="flex items-center justify-center h-[54px] w-[54px] overflow-clip rounded-full object-center relative">
                    <Image src={profile} alt="navigation-1" objectFit="cover" fill className="rounded-full"/>
                  </div>
                </MenubarTrigger>
                <MenubarContent className="font-header font-semibold">
                  <div className="absolute inset-0">
                    <Image 
                      src={border} 
                      alt="navigation-border" 
                      objectFit="cover" 
                      fill 
                      objectPosition="center" 
                    />
                  </div>
                  <div className="inset-0 relative h-full w-full flex items-center justify-center flex-col">
                    <Link href="/profile">
                      <MenubarItem className="z-10 text-[28px] w-[300px] cursor-pointer flex justify-center">
                        <div className="bg-gradient-to-r from-[#FEE59A] to-[#FFD787] inline-block text-transparent bg-clip-text">
                          Profile
                        </div>
                      </MenubarItem>
                    </Link>
                    <Link href="/log-out">
                      <MenubarItem className="z-10 text-[28px] w-[300px] cursor-pointer flex justify-center">
                        <div className="bg-gradient-to-r from-[#FEE59A] to-[#FFD787] inline-block text-transparent bg-clip-text">
                          Log Out
                        </div>
                      </MenubarItem>
                    </Link>
                    <div className="absolute inset-0 h-full w-full">
                      <Image 
                        src={foot} 
                        alt="navigation-image" 
                        objectFit="cover"  
                        objectPosition="center" 
                        fill
                        className="rounded-[14px]"
                      />
                    </div>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            }
          </div>  
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;