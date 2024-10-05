import Title from "~/components/title";
import FAQ from "~/components/FAQ/FAQPage";
import Image from "next/image";

export default function HomePage() {
  return (
    <main
      className={`relative flex flex-col justify-end overflow-hidden font-header`}
    >
      <div className="max-h-dvh min-h-dvh bg-gradient-to-bl from-[#320166] to-[#42076a]">
        <div className="">
          <Image
            src={"/LOGOTYPE-1.png"}
            alt={"LOGOTYPE-1"}
            width={500}
            height={500}
            className="relative mx-auto h-max md:mt-[10vh]"
          />
          <Image
            src={"/v-1.png"}
            alt={"v-1"}
            width={1000}
            height={1000}
            className="relative mx-auto md:bottom-[10vh]"
          />
          <Image
            src={"/v-14.png"}
            alt={"v-14"}
            width={1000}
            height={1000}
            className="relative md:bottom-[70vh] md:min-w-full"
          />
          <Image
            src={"/v-16.png"}
            alt={"v-16"}
            width={1000}
            height={1000}
            className="relative md:bottom-[80vh] md:min-w-full"
          />
        </div>
      </div>
      <div className="flex bg-contain bg-center bg-no-repeat min-h-[280vh] flex-col bg-[url('/Rectangle-1.png')] md:h-[888dvh]">
        <div className="flex h-max flex-1 flex-col items-center justify-center bg-red-400">
          {/* welcome */}
          <Title>WELCOME</Title>
          <br></br>
          {/* komponen welcome disini */}
        </div>
        <div className="flex h-max flex-1 flex-col items-center justify-center bg-yellow-400">
          {/* merchandise */}
          <Title>MERCH</Title>
          <br></br>
          {/* komponen merch disini */}
        </div>
        <div className="flex h-max flex-1 flex-col items-center justify-center bg-green-400">
          {/* timeline */}
          <Title>TIMELINE</Title>
          <br></br>
          {/* komponen timeline disini */}
        </div>
        <div className="flex h-max flex-1 flex-col items-center justify-center bg-blue-400">
          {/* sponsor */}
          <Title>SPONSORS</Title>
          <br></br>
          {/* komponen sponsor disini */}
        </div>
        <div className="flex h-full flex-1 flex-col items-center relative">
          {/* FAQ */}
          <Title className="mb-10">FAQ</Title>
          <br></br>
          <FAQ></FAQ>
          <Image
            src={"/VIS-18.png"}
            alt={"VIS-18"}
            width={1000}
            height={1000}
            className="relative top-[39vh] md:top-[82vh] z-0 md:min-w-full"
          />
        </div>
      </div>
    </main>
  );
}
