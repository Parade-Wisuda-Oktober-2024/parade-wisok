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
    <div className="sponsor-card p-6 shadow-xl rounded-xl bg-[#fbfbfb]">
      <Image
        src={sponsorImgUrl} 
        alt={altText}
        width={100}
        height={100}
        objectFit="contain"
        className="m-auto"
      />
    </div>
  );
};

export default SponsorCard;
