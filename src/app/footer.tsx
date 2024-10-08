import instagram from "../../public/instagram.svg"
import youtube from "../../public/youtube.svg"
import tiktok from "../../public/tiktok.svg"
import twitter from "../../public/twitter.svg"
import Image from "next/image"
import logo from "../../public/logo.png"
import itb from "../../public/itb.png"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[url('/footer-bg.png')] h-[373.48px] xl:h-[412px] w-full bg-white bg-cover flex items-center justify-center px-[40px] bg-bottom">
      <div className="w-[256px] xl:w-full flex justify-between items-center flex-wrap gap-9 max-w-[1500px]">
        <div className="order-1 xl:order-2 w-[256px] xl:w-auto flex flex-col">
          <div className="text-[#FEE59A] font-semibold text-center text-[10px] p-[10px] xl:text-[28px]">Copyright © PARADE WISUDA OKTOBER 2024</div>
          <div className="flex gap-8 justify-center items-center w-full pt-1">
            <Link href="http://www.youtube.com/@ParadeWisudaAprilITB-rt2ss">
              <div className="w-[40px] xl:w-[58px]"><Image src={youtube} alt="yt" layout="responsive"/></div>
            </Link>
            <Link href="https://www.tiktok.com/@paradewisudaitb">
              <div className="w-[40px] xl:w-[58px]"><Image src={tiktok} alt="tt" layout="responsive"/></div>
            </Link>
            <Link href="https://x.com/paradewisudaitb?lang=id">
              <div className="w-[40px] xl:w-[58px]"><Image src={twitter} alt="twt" layout="responsive"/></div>
            </Link>
            <Link href="https://www.instagram.com/paradewisudaitb">
              <div className="w-[40px] xl:w-[58px]"><Image src={instagram} alt="ig" layout="responsive"/></div>
            </Link>
          </div>
        </div>
        <div className="order-2 w-[75px] xl:w-[250px] xl:order-1"><Image src={logo} alt="logo" objectFit="contain"/></div>
        <div className="order-3 w-[75px] xl:w-[250px]"><Image src={itb} alt="itb" objectFit="contain"/></div>
      </div>
    </div>
  )
}

export default Footer 