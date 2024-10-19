import Title from "~/components/title";
import FAQ from "~/components/FAQ/FAQpage";
import WelcomePage from "~/components/welcome/WelcomePage";
import Details from "~/components/welcome/welcomeDetails";
import MerchandisePage from "~/components/Merch/Merchandise";
import {Sponsor} from "~/app/sponsorship/page";
import SeparatorLanding from "~/components/separator-landing";

export default function HomePage() {
  return (
    <main className="relative flex flex-col justify-end overflow-hidden font-header">
      <div className="fixed inset-0 bg-[url('/Welcome.png')] bg-center bg-containbg-no-repeat z-[-1] bg-cover"></div>
      <WelcomePage/>
      <Details/>
      <MerchandisePage/>
      {/*<div className="flex flex-1 items-center justify-center">*/}
      {/*  <Timeline></Timeline>*/}
      {/*</div>*/}
      <div className="flex flex-1 relative items-center flex-col gap-10 md:gap-20 min-h-screen justify-center">
        <Title>SPONSORS</Title>
        <Sponsor />
        <SeparatorLanding />
      </div>
      <div className="flex flex-1 items-center justify-center relative flex-col min-h-screen">
        <Title className="mb-10">FAQ</Title>
        <br></br>
        <FAQ></FAQ>
        {/*<Image*/}
        {/*  src={"/VIS-18.png"}*/}
        {/*  alt={"VIS-18"}*/}
        {/*  width={1000}*/}
        {/*  height={1000}*/}
        {/*  className="absolute bottom-0 z-0 md:min-w-full"*/}
        {/*/>*/}
      </div>
    </main>
  );
}
