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
    <div className="h-[373.48px] xl:h-[412px] relative z-10">
      <Image src='/footer-bg.png' alt="navigation-1" className='w-full absolute h-full -z-10' objectFit="cover"
             objectPosition="bottom" width={1000} height={500}/>
      <div className="h-full w-full flex items-center justify-center px-[40px] z-10">
        <div className="w-[256px] xl:w-full flex justify-between items-center flex-wrap gap-9 max-w-[1500px]">
          <div className="order-1 xl:order-2 w-[256px] xl:w-auto flex flex-col">
            <div className="text-[#FEE59A] font-semibold text-center text-[10px] p-[10px] xl:text-[28px]">Copyright ©
              PARADE WISUDA OKTOBER 2024
            </div>
            <div className="flex gap-8 justify-center items-center w-full pt-1">
              <Link href="http://www.youtube.com/@ParadeWisudaAprilITB-rt2ss">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <div className="w-[40px] xl:w-[58px]"><Image src={youtube} alt="yt" layout="responsive"/></div>
              </Link>
              <Link href="https://www.tiktok.com/@paradewisudaitb">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <div className="w-[40px] xl:w-[58px]"><Image src={tiktok} alt="tt" layout="responsive"/></div>
              </Link>
              <Link href="https://x.com/paradewisudaitb?lang=id">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <div className="w-[40px] xl:w-[58px]"><Image src={twitter} alt="twt" layout="responsive"/></div>
              </Link>
              <Link href="https://www.instagram.com/paradewisudaitb">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <div className="w-[40px] xl:w-[58px]"><Image src={instagram} alt="ig" layout="responsive"/></div>
              </Link>
            </div>
          </div>
          <div className="order-2 w-[75px] xl:w-[250px] xl:order-1"><Image src={logo} alt="logo" objectFit="contain"/>
          </div>
          <div className="order-3 w-[75px] xl:w-[250px]"><Image src={itb} alt="logo" objectFit="contain"/></div>
        </div>
      </div>

    </div>
  )
}

export default Footer 