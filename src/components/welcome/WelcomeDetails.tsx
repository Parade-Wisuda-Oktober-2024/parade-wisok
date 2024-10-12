import React from "react";
import Title1 from "./Title3"; // Import Title1
import Title2 from "./Title2"; // Import Title2

const Details: React.FC = () => {
    return (
        <div className="relative z-10 my-0 flex flex-col items-center gap-y-[70px] mt-[410px]">
            <img
                src="/IMG_2009 1.svg"
                alt="IMG_2009 1"
                className="absolute lg:bottom-[-300px] md:bottom-[-30px] lg:right-[-420px] md:right-[-275px] lg:w-[600px] md:w-[400px] lg:h-[1000px]"
            />
            <img
                src="/IMG_2009 2.svg"
                alt="IMG_2009 2"
                className="absolute lg:top-[50px] md:top-[-190px] lg:left-[-350px] md:left-[-220px] md:w-[350px] lg:w-[600px] "
            />
            <div className="flex flex-col items-center md:mt-[-300px] lg:mt-[-200px]">
                <Title1 className="lg:text-[150px]">WELCOME TO</Title1>
                <Title1 className="lg:text-[150px]">WISOKTO 2024</Title1>
            </div>
            <p className="lg:text-[65px] md:text-[40px] mb-4 lg:mt-0 md:mt-[-60px] text-white font-['Fraunces']; font-medium">“Ad astra abyssosque”</p>
            <div className="flex flex-col items-center md:w-[575px] mb-4">
                <p className="text-wrap lg:w-[700px] md:w-[500px] h-[61px] text-center text-[#d9d9d9] lg:text-[25px] md:text-[20px] md:mt-[-30px] font-['Fraunces'] font-medium leading-[30px]">
                    Parade wisuda adalah kegiatan yang ditujukan untuk memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan
                    dan sebagai wahana integrasi apresiasi massa kampus
                </p>
            </div>
            <div className="flex flex-col items-center lg:mb-0 md:mb-3">
                <Title2 className="lg:text-[150px]">SUNDAY</Title2>
                <Title2 className="lg:text-[150px]">OCTOBER 29TH</Title2>
                <Title2 className="lg:text-[150px]">2024</Title2>
            </div>
                <img
                src="/VIS 16.svg"
                alt="VIS 16"
                className="absolute bottom-[-350px] left-1/2 transform -translate-x-1/2 w-screen max-w-none lg:mb-[63px] md:mb-[240px]"/>
        </div>
    );
};
export default Details;
