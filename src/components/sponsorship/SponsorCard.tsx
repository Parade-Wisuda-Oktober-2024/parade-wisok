import Image, { type StaticImageData } from 'next/image';

interface SponsorCardProps {
  sponsorImgUrl: StaticImageData; 
  altText?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  sponsorImgUrl,
  altText = "Sponsor Logo",
}) => {
  return (
    <div className="sponsor-card p-4 md:p-6 shadow-xl rounded-xl ml-0.5 sm:ml-1 lg:ml-2 mt-1 mb-1  ">
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={sponsorImgUrl} 
          alt={altText}
          width={100}
          height={100}
          objectFit="contain"
          className="m-auto w-[50px] sm:w-[75px] md:w-[100px]"
        />
      </div>
      
    </div>
  );
};

export default SponsorCard;
