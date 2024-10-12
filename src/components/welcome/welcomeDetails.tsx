import React from "react";
import Title1 from "./Title3";
import Title2 from "./Title2"; 

const Details: React.FC = () => {
    return (
        <div className="relative z-10 my-0 flex flex-col items-center gap-y-[70px] mt-[410px]">
            <img
                src="/IMG_2009 1.svg"
                alt="IMG_2009 1"
                className="absolute lg:bottom-[-340px] md:bottom-[-30px] bottom-[50px] lg:right-[-420px] md:right-[-275px] right-[-100px] lg:w-[600px] md:w-[400px] w-[155px] lg:h-[1000px] "
            />
            <img
                src="/IMG_2009 2.svg"
                alt="IMG_2009 2"
                className="absolute lg:top-[-230px] md:top-[-190px] top-[-239px] lg:left-[-430px] md:left-[-220px] left-[-80px] w-[140px] md:w-[350px] lg:w-[600px] "
            />
            <div className="flex flex-col items-center mt-[-360px] md:mt-[-300px] lg:mt-[-400px]">
                <Title1 className="text-[44px] md:text-[70px] lg:text-[120px]">WELCOME TO</Title1>
                <Title1 className="text-[44px] md:text-[70px] lg:text-[120px]">WISOKTO 2024</Title1>
            </div>
            <p className="lg:text-[55px] md:text-[30px] text-[20px] mb-4 lg:mt-[-40px] md:mt-[-30px] mt-[-50px] text-white font-['Fraunces']; font-medium">“Ad astra abyssosque”</p>
            <div className="flex flex-col items-center md:w-[575px] mb-4">
                <p className="text-wrap lg:w-[700px] md:w-[500px] w-[300px] h-[61px] text-center text-[#d9d9d9] lg:text-[25px] md:text-[20px] lg:mt-[-30px] md:mt-[-50px] mt-[-70px] font-['Fraunces'] font-medium md:leading-[30px]">
                    Parade wisuda adalah kegiatan yang ditujukan untuk memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan
                    dan sebagai wahana integrasi apresiasi massa kampus
                </p>
            </div>
            <div className="flex flex-col items-center lg:mb-0 md:mb-3 lg:mt-[-25px] md:mt-[0px] mt-[-70px]">
                <Title2 className="text-[44px] md:text-[70px] lg:text-[120px]">SUNDAY</Title2>
                <Title2 className="text-[44px] md:text-[70px] lg:text-[120px]">OCTOBER 29TH</Title2>
                <Title2 className="text-[44px] md:text-[70px] lg:text-[120px]">2024</Title2>
            </div>
                <img
                src="/VIS 16.svg"
                alt="VIS 16"
                className="absolute bottom-[-350px] left-1/2 transform -translate-x-1/2 w-screen max-w-none lg:mb-[40px] md:mb-[250px] mb-[304px]"/>
        </div>
    );
};
export default Details;
