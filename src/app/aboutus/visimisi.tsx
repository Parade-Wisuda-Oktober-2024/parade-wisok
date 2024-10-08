import React from "react";
import Image from "next/image";
export default function Visi (){
    return(
        <div className="relative h-full  md:h-screen overflow-y-hidden md:overflow-y-visible w-full overflow-x-hidden">
            {/* BACKGROUND */}

            <div className=" relative md:absolute w-full md:h-3/4 h-1/2 md:h-screen  z-0 ">
            <Image className="hidden md:block"  alt="about-us-bg-1" src ="/test1/about-us-bg-1-desktop.svg" fill style={{ objectFit: 'cover' }}/>
            <Image className="block md:hidden" alt="about-us-bg-3" src ="/test1/about-us-bg-1-mobile.svg" width={560} height={334} />      
            
            </div>
            <div className="relative md:absolute w-full md:top-1/2 md:mt-96 h-1/2 md:h-screen -bottom-0 md:top-screen z-0 ">
            <Image className="hidden md:block relative mt-16 " alt="about-us-bg-2" src ="/test1/about-us-bg-2-desktop.svg" fill style={{ objectFit: 'cover' }}/> 
            <Image className="block md:hidden " alt="about-us-bg-3" src ="/test1/about-us-bg-2-mobile.svg" width={560} height={334}/> 
            </div>

        </div>
    )
}   