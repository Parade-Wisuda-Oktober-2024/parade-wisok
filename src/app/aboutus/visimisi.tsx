import React from "react";
import Image from "next/image";
export default function Visi (){
    return(
        <div className="relative h-full  md:h-screen overflow-y-hidden md:overflow-y-visible w-full overflow-x-hidden">
            {/* BACKGROUND */}

            <div className=" relative md:absolute w-full md:h-3/4 h-1/2 md:h-screen  z-0 ">
            <Image className="hidden md:block"  alt="about-us-bg-1" src ="/vismis/about-us-bg-1-desktop.svg" fill style={{ objectFit: 'cover' }}/>
            <Image className="block md:hidden" alt="about-us-bg-3" src ="/vismis/about-us-bg-1-mobile.svg" width={560} height={334} />      
            
            </div>
            <div className="relative md:absolute w-full md:top-1/2 md:mt-96 h-1/2 md:h-screen -bottom-0 md:top-screen z-0 ">
            <Image className="hidden md:block relative mt-16 " alt="about-us-bg-2" src ="/vismis/about-us-bg-2-desktop.svg" fill style={{ objectFit: 'cover' }}/> 
            <Image className="block md:hidden " alt="about-us-bg-3" src ="/vismis/about-us-bg-2-mobile.svg" width={560} height={334}/> 
            </div>
           {/* About intro*/}
           <div className="absolute flex flex-col top-10 md:top-0 md:top-20 justify-center h-1/4 md:h-1/3 md:left-1/4 md:right-1/4 md:min-h-1/3 z-10 md:w-1/2 ">
                <div className="flex justify-center item-center flex-row h-1/5 md:h-1/4 w-full mb-12 top-12 relative md:top-0">
                    <div className="relative bottom-2">
                    <Image  alt ="butterfly-left" src={'/vismis/butterfly-left.svg'} width={100} height={100}/>
                    </div>
                    <h2 className=" relative font-header font-bold md:top-0 top-4 text-4xl md:text-7xl pb-4 bg-gradient-text-aboutus">ABOUT US</h2>
                    <div className="relative bottom-2">
                    <Image  alt="butterfly-right" src={'/vismis/butterfly-right.svg'} width={100} height={100} />
                    </div>
                </div>
                <div className="md:h-3/4 py-20 w-full md:px-8">
                    <p style={{ color: '#D9D9D9' }} className="text-center relative md:top-20 px-12 md:px-6 md-p-0 text-sm md:text-3xl">Parade wisuda adalah kegiatan yang ditujukan untuk memaksimalkan hak dan  kesempatan dalam mengapresiasi wisudawan dan sebagai wahana integrasi  apresiasi massa kampus</p>
                </div>
                
            </div>  
           {/* VISI MISI */}

           <div className="absolute h-1/2 -top-1 scale-75 md:h-full mt-72  w-full md:scale-100 md:top-1/2 md:mt-48  flex flex-col md:flex-row gap-x-10 justify-center mx-auto ">
                <div className=" h-64 md:h-full flex  flex-col items-center w-60 md:w-1/3 mx-auto md:mx-0 ">
                    <h2 className="relative md:text-5xl text-3xl bg-gradient-text-aboutus pb-4">VISI</h2>
                    <div className="rounded-3xl overflow-hidden bg-gradient-vm">
                        <Image className="relative top-0 w-full " alt="cloud-vm-1" src={'/vismis/cloud-vm-1.svg'} width={181} height={516} style ={{objectFit : 'cover'}}/>
                        <p style={{ color: '#D9D9D9' }} className="relative text-center text-xs z-0 py-2 my-0 md:my-0 -top-10 md-top-0 md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <Image className="relative bottom-20  md:top-0 w-full"  alt="cloud-vm-2" src={'/vismis/cloud-vm-2.svg'}width={181} height={516} style ={{objectFit : 'cover'}} />
                    </div>

                </div>
                <div className=" h-64 md:h-full flex  flex-col items-center w-60 md:w-1/3 mx-auto md:mx-0 ">
                    <h2 className="md:text-5xl text-3xl  pt-2 bg-gradient-text-aboutus pb-4">MISI</h2>
                    <div className="rounded-3xl overflow-hidden bg-gradient-vm">
                        <Image className="relative top-0 w-full " alt="cloud-vm-1" src={'/vismis/cloud-vm-1.svg'} width={181} height={516} style ={{objectFit : 'cover'}}/>
                        <p style={{ color: '#D9D9D9' }} className="relative text-center text-xs z-0 py-2 my-0 md:my-0 -top-10 md-top-0 md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <Image className="relative bottom-20  md:top-0 w-full"  alt="cloud-vm-2" src={'/vismis/cloud-vm-2.svg'}width={181} height={516} style ={{objectFit : 'cover'}} />
                    </div>

                </div>

            </div>

            {/* DECORATION */}
            <div className="absolute flex justify-between w-full overflow-hidden z-10 top-28 md:top-34">
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
                <div className="relative scale-75 md:scale-100  md:-right-0 -right-7 md:w-1/3 top-14 md:top-0">
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
            <div className= "hidden md:block absolute -top-52 -right-24 md:top-36 scale-50 md:w-1/6 overflow-hidden z-20 h-auto" >
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
            <div className= " block md:hidden absolute -right-20 mt-20 top-1/3  md:top-36 h-auto w-1/3  md:w-1/6 overflow-hidden z-20 ">
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