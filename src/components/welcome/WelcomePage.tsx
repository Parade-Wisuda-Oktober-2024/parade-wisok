import * as React from "react";
import SeparatorLanding from "~/components/separator-landing";

const WelcomePage: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <div className="flex flex-row relative  mt-[25vh] md:mt-[10vh]">
        <img
          src="/VIS 12 6.svg"
          alt="VIS 12 6"
          className="absolute w-[70px] top-[130px] lg:w-[300px] md:w-[150px] lg:top-[200px] md:top-[190px] left-[0%]"
        />
        <img
          src="/VIS 12 6.svg"
          alt="VIS 12 6"
          className="absolute w-[70px] top-[80px] lg:w-[300px] md:w-[150px] lg:top-[0px] md:top-[110px] right-[0%]"
        />
        <img
          src="/VIS 12 6.svg"
          alt="VIS 12 6"
          className="absolute w-[70px] top-[280px] right-[300px] lg:w-[300px] md:w-[150px] lg:top-[600px] md:top-[445px] lg:right-[10%] md:right-[9%]"
        />
        <img
          src="/VIS 12 6.svg"
          alt="VIS 12 6"
          className="absolute w-[70px] top-[290px] left-[300px] lg:w-[300px] md:w-[150px] lg:top-[700px] md:top-[480px] lg:left-[14%] md:left-[5%]"
        />
        <img
          src="/LOGOTYPE 1.svg"
          alt="Parade Wisuda Oktober 2024"
          className="p-0 mx-auto w-[70%] max-w-[500px]"
          data-aos="fade-up" data-aos-delay="150"
        />
      </div>
      <img
        src="/v-1.png"
        alt="v-1"
        className="p-0 absolute mx-auto w-[90%] md:w-auto h-auto md:h-[40%] bottom-0 left-1/2 -translate-x-1/2 "
      />
      <img
        src="/VIS 14.svg"
        alt="v-14"
        className="p-0 absolute mx-auto w-full h-auto bottom-0"
      />
      <SeparatorLanding className="bottom-0"/>
    </div>
  );
};

export default WelcomePage;
