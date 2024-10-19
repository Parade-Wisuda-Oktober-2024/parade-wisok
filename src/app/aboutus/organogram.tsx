import Image from "next/image";
import OrganogramCard from "./organogram-card";
import OnoHeader from "~/components/onoheader";

const Organogram = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/organogram/ono-bg.png')] bg-cover bg-center w-full p-4">
      <div className="flex flex-row items-center justify-center space-x-4">
        {/* Burung kiri */}
        <Image src={'/organogram/ono-burung.png'} alt='burung' width={80} height={80} className='rotate-180 w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[160px] lg:h-[160px]' />
        
        {/* Title */}
        <div className="relative h-[50px] w-[150px] sm:h-[135px] sm:w-[330px] lg:h-[300px] lg:w-[765px]">
          <img src="/organogram/ono-title-bg.png" alt="titlebg" className="h-full w-full object-contain"/>
          <OnoHeader className="absolute inset-0 flex items-center justify-center text-sm sm:text-2xl lg:text-6xl">
            ORGANOGRAM
          </OnoHeader>
        </div>
        
        {/* Burung kanan */}
        <Image src={'/organogram/ono-burung.png'} alt='burung' width={160} height={160} className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[160px] lg:h-[160px]'/>
      </div>

      <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="KETUA PELAKSANA" batch="TM'22" />
      <OnoHeader className="flex items-center justify-center text-sm sm:text-4xl lg:text-6xl lg:py-16 sm:py-16">KESEKJENAN</OnoHeader>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
      <OnoHeader className="flex items-center justify-center text-sm sm:text-4xl lg:text-6xl lg:py-16 sm:py-16">KESEKJENAN</OnoHeader>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
      <OnoHeader className="flex items-center justify-center text-sm sm:text-4xl lg:text-6xl lg:py-16 sm:py-16">KESEKJENAN</OnoHeader>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="dark" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
      <OnoHeader className="flex items-center justify-center text-sm sm:text-4xl lg:text-6xl lg:py-16 sm:py-16">KESEKJENAN</OnoHeader>
      <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-16">
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="WAKIL KETUA" batch="TM'22" />
        <OrganogramCard frameType="light" photo="/organogram/fotopanitia/fotodummy.jpeg" name="John Doe" title="SEKBEN BIDANG" batch="TM'22" />
      </div>
    </div>
  );
}

export default Organogram;
