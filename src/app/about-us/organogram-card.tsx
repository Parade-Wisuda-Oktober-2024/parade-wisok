import type { OrganogramData } from "~/types/organogram";
import Image from "next/image";

type OrganogramCardProps = Omit<OrganogramData, "division">;

const OrganogramCard: React.FC<OrganogramCardProps> = ({
    frameType,
    photo,
    name,
    title,
    batch,
}) => {
  const outerFrame = frameType === 'dark' ? '/organogram/borderdark.png' : '/organogram/borderlight.png';
  const innerFrame = frameType === 'dark' ? '/organogram/innerdark.png' : '/organogram/innerlight.png';

  return (
    <div
      className="relative h-[275px] w-[200px] lg:h-[350px] lg:w-[275px]"
    >
      {/* Outer frame */}
      <img
        src={outerFrame}
        alt="Outer frame"
        className="absolute inset-0 h-full w-full object-cover z-10 rounded-lg"
      />
      
      {/* Inner frame */}
      <div className="absolute inset-2 z-20">
        <img
          src={innerFrame}
          alt="Inner frame"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 z-30">
        {/* Photo */}
        <div className="relative h-[150px] w-[150px] lg:h-[190px] lg:w-[195px] mb-2">
            {/* Outer frame image */}
            <img src={outerFrame} alt="Outer frmae" className="absolute inset-0 h-full w-full object-cover z-10 rounded-lg" />

            {/* image panitia */}
            <div className="absolute inset-0 z-40 overflow-hidden rounded-lg">
              <Image src={photo} alt="photo" layout="fill" objectFit="cover" />
            </div>
        </div>
        
        {/* Text content */}
        <div className="text-center pb-2">
          <h1 className="font-header text-lg sm:text-lg lg:text-2xl bg-gradient-to-r from-[#FFF3D9] to-[#FFD787] bg-clip-text text-transparent [text-shadow:2px_2px_10px_#F4D38E]">
            {title}
          </h1>
          <p className="font-bold text-lg sm:text-lg lg:text-2xl bg-gradient-to-b from-[rgba(254,229,154,1)] to-[#f3d29b] bg-clip-text text-transparent [text-shadow:2px_2px_20px_rgba(255,191,81,1)]">
            {name}
          </p>
          <p className="font-bold text-lg sm:text-lg lg:text-2xl bg-gradient-to-b from-[rgba(254,229,154,1)] to-[#f8dba8] bg-clip-text text-transparent [text-shadow:2px_2px_20px_rgba(255,191,81,1)]">
            {batch}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganogramCard;

