import React from "react";
import Title from "~/components/Merch/MerchandiseTitle";
import Image from "next/image";

const TLPage: React.FC = () => {
  return (
    <main className="relative flex w-full flex-col items-center justify-center">
      <Image
        src={"/VIS 4.svg"}
        alt={"VIS 4"}
        width={1000}
        height={1000}
        className="absolute top-0 md:min-w-full"
      />
      <Image
        src={"/Rectangle 6.png"}
        alt={"Rectangle 6"}
        width={1400}
        height={1800}
        className="absolute top-0 z-10 mt-[4vh] bg-auto md:w-[70%]"
      />
      <div className="relative z-20 mt-[8vh] flex h-full flex-col items-center justify-center md:w-[50%]">
        <Title className="relative z-20">TIMELINE</Title>
        <div className="relative flex h-[200vh] w-full flex-col">
          <div className="flex max-h-[20vh] min-h-[10vh] flex-row md:max-h-[30vh] md:min-h-[5vh]">
            <div className="relative w-full">
              <Image
                src={"/vis box 1.png"}
                alt={"vis box 1"}
                width={1400}
                height={1800}
                className="relative z-10 w-[80%] md:translate-y-[13%]"
              ></Image>
            </div>
            <div className="relative w-full md:mt-[3vh]">
              <Image
                src={"/vis box 3.png"}
                alt={"vis box 3"}
                width={1400}
                height={1800}
                className="relative z-10 translate-y-[10%] md:translate-y-[0%]"
              ></Image>
            </div>
            <div className="absolute w-full">
              <Image
                src={"/vis penyambung.png"}
                alt={"vis penyambung"}
                width={1400}
                height={1800}
                className="z-5 relative w-[50%] translate-x-[30%] translate-y-[8%] md:translate-y-[23%]"
              ></Image>
            </div>
          </div>
          <div className="flex max-h-[20vh] min-h-[10vh] flex-row md:max-h-[23vh] md:min-h-[10vh]">
            <div>
              <Image
                src={"/vis box 4.png"}
                alt={"vis box 4"}
                width={1400}
                height={1800}
                className="relative z-10 w-[80%] translate-y-[-30%] md:translate-y-[-20%]"
              ></Image>
            </div>
            <div className="absolute w-full">
              <Image
                src={"/vis penyambung.png"}
                alt={"vis penyambung"}
                width={1400}
                height={1800}
                className="z-5 relative w-[50%] translate-x-[80%] translate-y-[-50%] -rotate-[40deg]"
              ></Image>
            </div>
          </div>
          <div>
            <div className="absolute w-full">
              <Image
                src={"/vis penyambung.png"}
                alt={"vis penyambung"}
                width={1400}
                height={1800}
                className="z-5 absolute w-[80%] translate-x-[10%] translate-y-[-15vh] rotate-[33deg] md:translate-y-[-12vh]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TLPage;
