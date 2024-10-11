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
    <div className="sponsor-card p-4 md:p-6 shadow-xl rounded-xl ">
      <Image
        src={sponsorImgUrl} 
        alt={altText}
        width={100}
        objectFit="contain"
        className="m-auto w-[50px] sm:w-[75px] md:w-[100px]"
      />
    </div>
  );
};

export default SponsorCard;
