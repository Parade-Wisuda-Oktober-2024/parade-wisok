import React from "react";
import Image from "next/image";
import Title1 from "./Title3"; // Import Title1
import Title2 from "./Title2"; // Import Title2

const Details: React.FC = () => {
    return (
        <div className="relative z-10 my-0 flex flex-col items-center gap-y-[70px]">
            <img
                src="/IMG_2009 1.svg"
                alt="IMG_2009 1"
                className="absolute bottom-[-400px] right-[-500px] md:w-[600px] h-[1000px]"
            />
            <img
                src="/IMG_2009 2.svg"
                alt="IMG_2009 2"
                className="absolute top-[-50px] left-[-480px] "
            />
            <div className="flex flex-col items-center mt-[-200px]">
                <Title1 className="text-[104px]">WELCOME TO</Title1>
                <Title1 className="text-[104px]">WISOKTO 2024</Title1>
            </div>
            <p className="text-[45px] mb-4">“Ad astra abyssosque”</p>
            <div className="flex flex-col items-center md:w-[575px] mb-4">
                <p className="text-wrap w-[575px] h-[61px] text-center text-[#d9d9d9] text-xl font-normal font-['Fraunces'] leading-[30px]">
                    Parade wisuda adalah kegiatan yang ditujukan untuk memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan
                    dan sebagai wahana integrasi apresiasi massa kampus
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Title2 className="text-[104px]">SUNDAY</Title2>
                <Title2 className="text-[104px]">OCTOBER 29TH</Title2>
                <Title2 className="text-[104px]">2024</Title2>
            </div>
        </div>
    );
};
export default Details;
