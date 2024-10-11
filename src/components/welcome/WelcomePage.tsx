import * as React from "react";

const WelcomePage: React.FC = () => {
    return (
        <div className="relative z-10 my-0 flex flex-col">
            <div className="relative"> 
                <div className="flex flex-row relative"> 
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] lg:w-[300px] md:w-[200px] lg:top-[200px] md:top-[240px] left-[0%]"
                    />
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] lg:w-[300px] md:w-[200px] lg:top-[0px] md:top-[110px] right-[0%]"
                    />
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] lg:w-[300px] md:w-[200px] lg:top-[600px] md:top-[600px] lg:right-[10%] md:right-[8%]"
                    />
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] lg:w-[300px] md:w-[200px] lg:top-[700px] md:top-[640px] lg:left-[14%] md:left-[5%]"
                    />
                    <img 
                        src="/LOGOTYPE 1.svg"
                        alt="Parade Wisuda Oktober 2024"
                        className="p-0 mx-auto w-[70%] lg:mt-[10vh] lg:w-[667px] lg:h-[725px] md:w-[540px] md:mt-[15vh]"
                    />
                </div>
                <img 
                    src="/v-1.png"
                    alt="v-1"
                    className="p-0 mx-auto w-[90%] lg:w-[1040px] md:w-[830px] md:mt-[-70px] h-auto lg:mt-[-135px]"
                />   
                <img
                    src="/VIS 14.svg"
                    alt="v-14"
                    className="p-0 mx-auto w-full h-auto lg:mt-[-480px] md:mt-[-240px]"
                />
                <img
                    src="/VIS 16.svg"
                    alt="v-16"
                    className="p-0 mx-auto w-full h-auto lg:mt-[-150px] lg:mb-[-70px] md:mt-[-43px] md:mb-[-35px]"
                />
                <img 
                    src="/VIS 4.svg"
                    alt="VIS 4"
                    className="w-screen mx-auto lg:mb-[-470px] md:mb-[-233px]"
                />
            </div>
        </div>
    );
};

export default WelcomePage;
