'use client'
import Image from "next/image"
import logo from "../../public/logo.png"
import navPrimary from "../../public/navbar-bg.png"
import navSecondary from "../../public/ornament.png"
import border from "../../public/border.png"
import burger from "../../public/burger.svg"
import profile from "../../public/user-profile.svg"
import {usePathname} from "next/navigation"
import Link from "next/link"
import {useState} from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "~/components/ui/menubar"
import foot from "../../public/footer-bg.png"
import type {Session} from "@auth/core/types";
import {signOut} from "next-auth/react";

const NavBar = ({session}: { session: Session | null }) => {
  const pathname = usePathname()
  // DUMMY STATE BUAT HOLD STATE ADA ATAU TIDAKNYA SESSION
  // ELEMENT YANG DIRENDER BASED ON STATE SESSION: PROFIL dan TOMBOL LOGIN, both di navbar dan slidebar

  const taFair = pathname == "/ta-fair"
  const merchandise = pathname == "/merchandise"
  const sponshorship = pathname == "/sponsorship"
  const aboutUs = pathname == "/about-us"
  const woa = pathname == "/woa"

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-[73px] xl:h-[83px] w-full fixed top-0 z-50 font-header">
      <div className="flex items-center absolute h-full w-full overflow-hidden">
        <Image src={navPrimary} alt="navigation-1" objectFit="cover" fill/>
      </div>
      <div className="flex items-center absolute h-full w-full overflow-hidden">
        <Image src={navSecondary} alt="navigation-1" objectFit="cover" fill className="opacity-60"/>
      </div>
      <div className="flex justify-between px-4 xl:px-[40px] items-center gap-2 h-full w-full">
        <Link href="/">
          <div className="w-full flex items-center gap-2">
            <div className="w-[68.124px] h-[61px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"><Image src={logo}
                                                                                                   alt="logo wisokto"
                                                                                                   objectFit="contain"/>
            </div>
            <div
              className="h-[28px] font-bold text-xl md:text-2xl text-[#F9BE6B] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap ">WISOKTO
              2024
            </div>
          </div>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="z-10">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <div className="w-[23.9px] h-[18.59px] md:hidden"><Image src={burger} alt="dropdown" objectFit="contain"/>
            </div>
          </SheetTrigger>
          <SheetContent className="px-[25px] pt-[60px] pb-[30px] text-xl text-[#FEE59A] font-header">
            <div className="flex flex-col justify-between h-full text-center">
              <div className="flex flex-col gap-[16px]">
                <Link onClick={() => setIsOpen(false)} href="/ta-fair">
                  <div className={`p-[10px] ${!taFair ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>TA Fair
                    <div
                      className={`h-0.5 bg-[#F9BE6B] rounded-lg translate-y-0.5 transform origin-top transition-all ease-out duration-300 ${taFair ? '-scale-y-100 h-0.5 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
                  </div>
                </Link><Link onClick={() => setIsOpen(false)} href="/woa">
                <div
                  className={`p-[10px] ${!woa ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>WoA
                  <div
                    className={`h-0.5 bg-[#F9BE6B] rounded-lg translate-y-0.5 transform origin-top transition-all ease-out duration-300 ${woa ? '-scale-y-100 h-0.5 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
                </div>
              </Link>
                <Link onClick={() => setIsOpen(false)} href="/merchandise">
                  <div
                    className={`p-[10px] ${!merchandise ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>Merchandise
                    <div
                      className={`h-0.5 bg-[#F9BE6B] rounded-lg translate-y-0.5 transform origin-top transition-all ease-out duration-300 ${merchandise ? '-scale-y-100 h-0.5 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
                  </div>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/sponsorship">
                  <div
                    className={`p-[10px] ${!sponshorship ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>Sponsorship
                    <div
                      className={`h-0.5 bg-[#F9BE6B] rounded-lg translate-y-0.5 transform origin-top transition-all ease-out duration-300 ${sponshorship ? '-scale-y-100 h-0.5 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
                  </div>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/about-us">
                  <div className={`p-[10px] ${!aboutUs ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>About
                    Us
                    <div
                      className={`h-0.5 bg-[#F9BE6B] rounded-lg translate-y-0.5 transform origin-top transition-all ease-out duration-300 ${aboutUs ? '-scale-y-100 h-0.5 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-[16px]">
                {!session &&
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                        <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
                            Login
                        </div>
                    </Link>
                }
                {!!session &&
                    <>
                        <Link href="/profile">
                            <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
                                Profile
                            </div>
                        </Link>
                        <button onClick={() => signOut()}>
                            <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none font-bold">
                                Log Out
                            </div>
                        </button>
                    </>
                }
              </div>
              <Image src={navPrimary} objectFit="cover" alt="" fill className="-z-10"/>
            </div>
          </SheetContent>
        </Sheet>
        <div
          className="hidden md:flex gap-[12px] text-[#F9BE6B] font-bold text-[28px] items-center whitespace-nowrap z-20 text-xl">
          <Link href="/ta-fair">
            <div className={`p-[10px] ${!taFair ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>TA Fair
              <div
                className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${taFair ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
            </div>
          </Link>
          <Link href="/woa">
          <div className={`p-[10px] ${!woa ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>WoA
            <div
              className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${woa ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
          </div>
        </Link>
          <Link href="/merchandise">
            <div
              className={`p-[10px] ${!merchandise ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>Merchandise
              <div
                className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${merchandise ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
            </div>
          </Link>
          <Link href="/sponsorship">
            <div
              className={`p-[10px] ${!sponshorship ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>Sponsorship
              <div
                className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${sponshorship ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
            </div>
          </Link>
          <Link href="/about-us">
            <div className={`p-[10px] ${!aboutUs ? 'hover:bg-[#FF8CD926]' : ''} rounded-lg transition-all`}>About Us
              <div
                className={`h-1 bg-[#F9BE6B] rounded-lg transform origin-top transition-all ease-out duration-300 ${aboutUs ? '-scale-y-100 h-1 opacity-100' : 'scale-y-0 h-0 opacity-0'}`}></div>
            </div>
          </Link>
          <div>
            {!session &&
                <Link href="/login">
                    <div className="py-[12px] px-[32px] bg-[#210B3A] rounded-lg border-none">
                        Login
                    </div>
                </Link>
            }
            {!!session &&
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <div
                                className="flex items-center justify-center h-[54px] w-[54px] overflow-clip rounded-full object-center relative">
                              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                <Image src={profile} alt="navigation-1" objectFit="cover" fill
                                       className="rounded-full"/>
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
                                    <MenubarItem
                                        className="z-10 text-[28px] w-[300px] cursor-pointer flex justify-center">
                                        <div
                                            className="bg-gradient-to-r from-[#FEE59A] to-[#FFD787] inline-block text-transparent bg-clip-text">
                                            Profile
                                        </div>
                                    </MenubarItem>
                                </Link>
                                <button onClick={() => signOut()}>
                                    <MenubarItem
                                        className="z-10 text-[28px] w-[300px] cursor-pointer flex justify-center">
                                        <div
                                            className="bg-gradient-to-r from-[#FEE59A] to-[#FFD787] inline-block text-transparent bg-clip-text">
                                            Log Out
                                        </div>
                                    </MenubarItem>
                                </button>
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
  );
};

export default NavBar;