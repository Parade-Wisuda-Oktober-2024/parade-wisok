import Title from "~/components/title";
import FAQ from "~/components/FAQ/FAQpage";
import Image from "next/image";
import WelcomePage from "~/components/welcome/WelcomePage";
import Details from "~/components/welcome/WelcomeDetails";
import MerchandiseCarousel from "~/components/Merch/Merchandise";
import MerchandisePage from "~/components/Merch/Merchandise";
import Timeline from "~/components/Timeline/TLpage";

export default function HomePage() {
  return (
    <main className="relative flex flex-col justify-end overflow-hidden font-header">
      <div className="fixed inset-0 bg-[url('/Welcome.png')] bg-center bg-containbg-no-repeat z-[-1] bg-cover"></div>
      <WelcomePage />
      <div className="flex flex-col bg-[url('/Rectangle-1.png')] bg-cover bg-center bg-no-repeat min-h-[280vh] md:h-[888dvh]">
        <div className="flex flex-1 items-center justify-center">
          <Details/>
        </div>
        <div className="flex flex-1 items-center justify-center bg-red-400">
          <Title>MERCH</Title>
          <MerchandisePage />
        </div>
      <div className="flex flex-1 items-center justify-center">
        <Timeline></Timeline>
      </div>
      <div className="flex flex-1 items-center justify-center">
          <Title>SPONSORS</Title>
        </div>
      <div className="flex flex-1 items-center justify-center relative">
          <Title className="mb-10">FAQ</Title>
          <br></br>
          <FAQ></FAQ>
          <Image
            src={"/VIS-18.png"}
            alt={"VIS-18"}
            width={1000}
            height={1000}
            className="absolute bottom-0 z-0 md:min-w-full"
          />
        </div>
      </div>
    </main>
  );
}
