import * as React from "react";

const WelcomePage: React.FC = () => {
    return (
        <div className="relative z-10 my-0 flex flex-col">
            <div className="relative"> 
                <div className="flex flex-row relative"> 
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
                        className="p-0 mx-auto w-[240px] mt-[7vh] lg:mt-[10vh] lg:w-[750px] lg:h-[780px] md:w-[420px] md:mt-[10vh]"
                    />
                </div>
                <img 
                    src="/v-1.png"
                    alt="v-1"
                    className="p-0 mx-auto w-[90%] mt-[-40px] lg:w-[1040px] md:w-[730px] md:mt-[-70px] h-auto lg:mt-[-135px]"
                />   
                <img
                    src="/VIS 14.svg"
                    alt="v-14"
                    className="p-0 mx-auto mt-[-115px] w-full h-auto lg:mt-[-480px] md:mt-[-240px]"
                />
                <img
                    src="/VIS 16.svg"
                    alt="v-16"
                    className="p-0 mx-auto w-full h-auto mt-[-15px] lg:mt-[-150px] lg:mb-[-63px] md:mt-[-28px] md:mb-[-31px]"
                />
                <img 
                    src="/VIS 4.svg"
                    alt="VIS 4"
                    className="w-screen mx-auto mt-[-15px] mb-[-104px] lg:mb-[-470px] md:mb-[-233px]"
                />
            </div>
        </div>
    );
};

export default WelcomePage;
