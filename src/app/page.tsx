import Title from "~/components/title";
import Image from "next/image";
import NavBar from "./navbar";
import Footer from "./footer";

export default function HomePage() {

  return (
    <main
      className={`flex flex-col relative justify-end min-h-dvh max-h-dvh overflow-hidden font-header bg-gradient-to-bl from-[#320166] to-[#42076a]`}>
      <NavBar/>
      <div className="flex flex-col items-center flex-1 h-full justify-center">
        <Title>
          PARADE
        </Title>
        <Title>
          WISUDA OKTOBER
        </Title>
        <Title>
          2024
        </Title>
      </div>
      <Image src={'/v-1.png'} alt={'v-1'} width={1000} height={1000} className='md:h-[45%] md:min-w-[auto] min-w-[150vw] relative left-1/2 -translate-x-1/2 md:min-w-auto'/>
      <Image src={'/v-14.png'} alt={'v-1'} width={1000} height={1000} className='min-w-[140%] md:min-w-full h-[33%] md:h-auto bottom-0 absolute'/>
      <Image src={'/v-16.png'} alt={'v-1'} width={1000} height={1000} className='md:min-w-full min-w-[200vw] bottom-0 translate-y-1/2 absolute'/>
      <div className="fixed z-10 w-full">
        <Footer/>
      </div>
    </main>
  );
}