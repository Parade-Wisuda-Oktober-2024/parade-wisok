import Title from "~/components/title";
import FAQ from "~/components/FAQ/FAQpage";
import Image from "next/image";
import WelcomePage from "~/components/welcome/WelcomePage";
import Details from "~/components/welcome/WelcomeDetails";
import MerchandiseCarousel from "~/components/Merch/Merchandise";
import MerchandisePage from "~/components/Merch/Merchandise";

export default function HomePage() {
  return (
    
    <main className="relative flex flex-col justify-end overflow-hidden font-header">
        Ta-fair
      <div className="fixed inset-0 bg-[url('/Welcome.png')] bg-center bg-containbg-no-repeat z-[-1] bg-cover"></div>
    </main>
  );
}
