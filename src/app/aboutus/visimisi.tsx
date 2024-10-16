import React from "react";
import Image from "next/image";
export default function Visi (){
    return(
        <div className="relative h-full md:h-screen overflow-y-hidden md:overflow-y-visible w-full overflow-x-hidden">
            {/* BACKGROUND  MOBILE*/}
            <div className=" relative md:hidden  w-full  z-0 ">
                 <Image  alt="about-us-bg-3" src ="/vismis/about-us-bg-1-mobile.svg" width={560} height={334} />      
            </div>
            <div className="relative md:hidden w-full -bottom-0   z-0 ">
                <Image className="h-full " alt="about-us-bg-3" src ="/vismis/about-us-bg-2-mobile.svg" width={560} height={334}/> 
            </div>

            {/* BACKGROUND desktop*/}
            <div className="relative w-full h-screen z-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/vismis/about-us-bg-1-desktop.svg')" }}/>
            <div className="relative w-full h-screen z-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/vismis/about-us-bg-2-desktop.svg')" ,    clipPath: "inset(0 0 61% 0)" } }/>


           {/* About intro*/}
           <div className="absolute flex flex-col top-1 md:top-0 md:top-20 justify-center h-1/4 md:h-1/3 md:left-1/4 md:right-1/4 md:min-h-1/3 z-10 md:w-1/2 ">
                <div className="flex justify-center item-center flex-row h-full md:h-1/4 w-full mb-12 top-32 relative md:top-0">
                    <div className="relative left-2 ">
                    <Image  alt ="butterfly-left" src={'/vismis/butterfly-left.svg'} width={72} height={72}/>
                    </div>
                    <h2 className=" relative font-header font-bold md:top-0 text-4xl md:text-6xl pt-4 pb-4 bg-gradient-text-aboutus">ABOUT US</h2>
                    <div className="relative right-2 ">
                    <Image  alt="butterfly-right" src={'/vismis/butterfly-right.svg'} width={72} height={72} />
                    </div>
                </div>
                <div className="md:h-3/4 py-20 w-full md:px-8">
                    <p style={{ color: '#D9D9D9' }} className="text-center relative md:top-20 px-12 md:px-6 md-p-0 text-xs md:text-3xl">Parade Wisuda Oktober 2024 merupakan wadah pemberian apresiasi kepada wisudawan melalui Kementerian Apresiasi dan Kolaborasi Massa dibawah Kementrian Koordinator Integrasi dan Dinamisasi Kampus. Namun tak hanya tentang apresiasi, tetapi parade wisuda juga tentang budaya mahasiswa sarjana ITB.</p>
                </div>
                
            </div>  
           {/* VISI MISI */}

           <div className="absolute h-1/2 md:h-full  bottom-16 md:bottom-0 md:top-96 scale-75 md:h-full w-full md:w-full  md:mt-72  md:scale-100 flex flex-col md:flex-row gap-x-10 md:gap-x-0  justify-center mx-auto ">
                <div className=" h-38 md:h-full flex  flex-col items-center w-72 md:w-1/3 mx-auto md:mx-0 ">
                    <h2 className="relative md:text-5xl mt-20 md:mt-0 text-3xl bg-gradient-text-aboutus pb-4">VISI</h2>
                    <div className="rounded-3xl h-64 md:h-96 overflow-hidden bg-gradient-vm">
                        <Image className="relative top-0  w-full " alt="cloud-vm-1" src={'/vismis/cloud-vm-1.svg'} width={181} height={516} style ={{objectFit : 'cover'}}/>
                        <p style={{ color: '#D9D9D9' }} className="absolute text-center text-sm z-0 pt-4 px-4 md:py-0 md:px-8 -top-8 md:top-44 md:text-2xl">Perayaan <br/> Wisuda Oktober 2024 <br/> sebagai wadah apresiasi wisudawan <br/> dan kolaborasi massa kampus yang inovatif,<br/>efektif, efisien, dan penuh <br/> kemeriahan</p>
                        <Image className="relative -bottom-14 md:-bottom-24 md:mt-8  md:top-0 w-full"  alt="cloud-vm-2" src={'/vismis/cloud-vm-2.svg'}width={181} height={516} style ={{objectFit : 'cover'}} />
                    </div>

                </div>
                <div className=" h-38 md:h-full flex relative md:static md:bottom-0 bottom-20 flex-col items-center w-72 md:w-1/3 mx-auto md:mx-0 ">
                    <h2 className="relative md:text-5xl mt-24  md:mt-0 text-3xl bg-gradient-text-aboutus pb-4">MISI</h2>
                    <div className="rounded-3xl h-64 md:h-96 overflow-hidden bg-gradient-vm">
                        <Image className="relative top-0 w-full md:h-42  z-10 " alt="cloud-vm-1" src={'/vismis/cloud-vm-1.svg'} width={181} height={516} style ={{objectFit : 'cover'}}/>
                        <p style={{ color: '#D9D9D9' }} className="absolute text-left z-0 h-36  md:h-72 overflow-y-scroll md:overflow-y-hidden md:px-4 md:w-1/3 md:px-8 md:pr-12 text-sm z-0 bottom-12 md:bottom-64 md:mb-32 px-4 md:h-96  md:pr-4      pl-6 md:my-0  md:text-2xl"> 
                        1.  Menciptakan wadah apresiasi yang meriah di Parade Wisuda Oktober 2024 <br/>
                        2.  Menciptakan wadah kolaborasi untuk setiap elemen KM ITB <br/>
                        3.  Merancang konsep Parade Wisuda Oktober 2024 yang inovatif, efektif, dan efisien <br/>
                        4.  Menciptakan lingkungan kepanitian Parade Wisuda Oktober 2024 yang ergonomis<br/>
                        </p>
                        <Image className="relative -bottom-14  md:-bottom-8 z-20 md:h-42 w-full"  alt="cloud-vm-2" src={'/vismis/cloud-vm-2.svg'}width={181} height={516} style ={{objectFit : 'cover'}} />
                    </div>

                </div>

            </div>

            {/* DECORATION */}
            <div className="absolute flex justify-between w-full overflow-hidden z-10 top-16 md:top-32">
                {/* Cloud Left */}
                <div className=" md:w-1/4 scale-75 md:scale-100 md:-left-0 -left-6  relative top-10 md:top-0">
                    <Image
                    alt="cloud-left"
                    src="/vismis/cloud-left.svg"
                    width={449}
                    height={567}
                    className="w-full h-auto"
                    />
                </div>

                {/* Cloud Right */}
                <div className="relative scale-75 md:scale-100  md:-right-0 -right-7 md:w-1/3 top-12 md:top-0">
                    <Image
                    alt="cloud-right"
                    src="/vismis/cloud-right.svg"
                    width={560}
                    height={567}
                    className="w-full h-auto"
                    />
                </div>
            </div>
           
            {/* Right decoration */}    
            <div className= "hidden md:block absolute  -top-52 -right-24 md:top-24 scale-50 md:w-1/6 overflow-hidden z-20 h-auto" style={{ clipPath: 'inset(0 0 37% 0)' }} >
                <Image  
                 alt="blue-leaf-1"
                 className="relative" 
                 src={'/vismis/blue-leaf-1.svg'} 
                 width={250} 
                 height={122} 
                 style={{objectFit:"cover"}}/>
                <Image  
                alt="blue-leaf-2"
                className="relative bottom-1" 
                src={'/vismis/blue-leaf-2.svg'} 
                width={250} 
                height={122} 
                style={{objectFit:"cover"}}/> 
            </div>
            <div className= " block md:hidden absolute -right-20 mt-20 top-1/3  md:top-36 h-auto w-1/3  md:w-1/6 overflow-hidden z-20 " >
                <Image 
                 alt="blue-leaf-1"
                 src={'/vismis/blue-leaf-1.svg'} 
                 width={60} 
                 height={30} 
                 style={{objectFit:"cover"}}/>
                <Image  
                alt="blue-leaf-2"
                className="relative bottom-1" 
                src={'/vismis/blue-leaf-2.svg'} 
                width={60} 
                height={30} 
                style={{objectFit:"cover"}}/> 
            </div>
        </div>
    )
}   