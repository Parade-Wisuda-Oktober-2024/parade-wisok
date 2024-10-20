import Title from "~/components/title";
import FAQ from "~/components/FAQ/FAQpage";
import Image from "next/image";
import NavBar from "~/components/header-footer/header";
import Footer from "~/components/header-footer/footer";
import TAblocks from "~/components/ta-fair/blocks";

const Page = () => {
  return (
  <main>
      <NavBar/>
    <div className="relative inset-0 bg-[url('/tafair.png')] z-0 bg-contain bg-center bg-no-repeat min-h-screen size-110%">
      <div className="relative flex flex-col flex-1 items-center justify-center my-5  ">

        
        <div className="relative flex justify-center items-center w-full py-16">
          {/* ornaments */}
          <div className="absolute top-1/3 left-[30%] z-0 h-1/3">
            <Image
              src={'/VIS-11-2-1.svg'}
              alt="/VIS-11-2-1.svg"
              width={150}
              height={0}
            />
          </div>

          <Title>TA Fair</Title>
          
          {/* ornaments */}
          <div className="absolute top-0 right-[30%] z-0 h-1/3">
            <Image
              src={'/VIS-11-2.svg'}
              alt="/VIS-11-2.svg"
              width={150}
              height={0}
              className="rotate-180"
            />
          </div>
        </div>


        <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="title text-center text-xl lg:text-3xl bg-gradient-to-b from-text-alt to-text my-3"
        >
          JANGAN LUPA UNTUK BERIKAN LIKE DAN COMMENT PADA TA FAVORIT-MU!
        </div>

        {/* CARI WISUDAWAN : SEARCH ENTRIES */}
      </div>

      <div className="my-3.5 mx-6 justify-center items-center flex-col">
        <TAblocks/>

      </div>
  </div>
      <Footer/>
  </main>
  );
};

export default Page;
