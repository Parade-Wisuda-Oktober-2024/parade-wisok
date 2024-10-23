import Title from "~/components/title";
import TABlocks from "~/components/ta-fair/blocks";
import React from "react";

const Page = () => {
  return (
    <div
      className="relative inset-0 z-0 bg-contain bg-center bg-no-repeat min-h-screen mt-28 md:mt-36 px-6 md:px-8 lg:px-10">
      <div
        style={{backgroundImage: "url('/organogram/ono-bg.png')"}}
        className="bg-center bg-cover w-full h-screen fixed top-0 left-0 -z-10 "></div>
      <div className="relative flex flex-col flex-1 items-center justify-center">
        <div className="relative flex justify-center items-center w-full">
          {/* ornaments */}
          <Title>TA Fair</Title>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="title text-center text-xl lg:text-3xl bg-gradient-to-b from-text-alt to-text my-5 mb-5"
        >
          JANGAN LUPA UNTUK BERIKAN LIKE DAN COMMENT PADA TA FAVORIT-MU!
        </div>
        {/* CARI WISUDAWAN : SEARCH ENTRIES */}
      </div>
      <div className="mt-4 justify-center items-center flex-col w-full">
        <TABlocks/>
      </div>
    </div>
  );
};

export default Page;
