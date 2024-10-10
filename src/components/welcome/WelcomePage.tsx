import * as React from "react";

const WelcomePage: React.FC = () => {
    return (
        <div className="relative z-10 my-0 flex flex-col">
            <div className="relative"> 
                <div className="flex flex-row relative"> 
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] md:w-[300px] top-[200px] left-[0%]"
                    />
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] md:w-[300px] top-[0px] right-[0%]"
                    />
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] md:w-[300px] top-[600px] right-[10%]"
                    />
                    <img
                        src="/VIS 12 6.svg"
                        alt="VIS 12 6"
                        className="absolute w-[40%] md:w-[300px] top-[700px] left-[14%]"
                    />
                    <img 
                        src="/LOGOTYPE 1.svg"
                        alt="Parade Wisuda Oktober 2024"
                        className="p-0 mx-auto w-[70%] md:mt-[10vh] md:w-[667px] md:h-[725px]"
                    />
                </div>
                <img 
                    src="/v-1.png"
                    alt="v-1"
                    className="p-0 mx-auto w-[90%] md:w-[1040px] h-auto mt-[-135px]"
                />   
                <img
                    src="/VIS 14.svg"
                    alt="v-14"
                    className="p-0 mx-auto w-full h-auto mt-[-450px]"
                />
                <img
                    src="/VIS 16.svg"
                    alt="v-16"
                    className="p-0 mx-auto w-full h-auto md:mt-[-150px] mb-[-100px]"
                />
                <img 
                    src="/VIS 4.svg"
                    alt="VIS 4"
                    className="w-screen mx-auto mt-[37px] mb-[-424px]"
                />
            </div>
        </div>
    );
};

export default WelcomePage;
