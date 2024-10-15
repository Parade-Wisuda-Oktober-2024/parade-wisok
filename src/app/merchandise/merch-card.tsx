import Image from "next/image";
import merchbg from "../../../public/merchandise/merch-bg.png";

interface MerchCardProps {
  title: string;
  photo: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ title, photo }) => {
  return (
    <div className="relative w-[207px] h-[207px] sm:w-[353px] sm:h-[353px] group">
      <div className="absolute inset-0 bg-[#FFE6B2] opacity-75 blur-md rounded-xl group-hover:opacity-100 transition-opacity duration-300"></div>
      <Image src={merchbg} alt="merchbg" fill className="object-cover z-10 rounded-xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 z-30">
        {/* Foto Merch */}
        <div className="w-1/2 aspect-square relative mb-8">
          <Image src={photo} alt="merch photo" fill className="object-cover rounded-lg" />
        </div>
        {/* Merch Title */}
        <div className="text-center">
          <h1 className="font-header text-lg sm:text-2xl lg:text-4xl bg-gradient-to-r from-[#FFF3D9] to-[#FFD787] bg-clip-text text-transparent [text-shadow:2px_2px_10px_#F4D38E]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;