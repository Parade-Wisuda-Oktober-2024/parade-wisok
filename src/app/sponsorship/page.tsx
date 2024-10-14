import Sponsor1 from "public/logo.png";
import Sponsor2 from "public/v-1.png";
import Sponsor3 from "public/v-14.png";
import Sponsor4 from "public/v-16.png";
import SponsorCard from "../../components/sponsorship/SponsorCard";
import InfiniteCarousel from "../../components/sponsorship/InfiniteCarousel";
import Title from "~/components/title";
import BackgroundImage from "public/sponsorship/bg-sponsorship.png";

const Sponsors: React.FC = () => {
  return (
    
    <section 
      className="w-full py-16 flex flex-col items-center" 
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        }} 
    >
      <Title className="mb-5">Sponsorship</Title>

      <div className="grid grid-row-1 sm:grid-row-2 lg:grid-row-3 m-auto mt-10 mb-10 w-full max-w-7xl">
        <div className="flex flex-wrap justify-center">
          <SponsorCard sponsorImgUrl={Sponsor1} />
          <SponsorCard sponsorImgUrl={Sponsor2} />
          <SponsorCard sponsorImgUrl={Sponsor3} />
          <SponsorCard sponsorImgUrl={Sponsor4} />
          <SponsorCard sponsorImgUrl={Sponsor1} />
          <SponsorCard sponsorImgUrl={Sponsor2} />
          <SponsorCard sponsorImgUrl={Sponsor3} />
          <SponsorCard sponsorImgUrl={Sponsor4} />
        </div>
      </div>
      <Title className="mb-5">Media Partner</Title>
      <InfiniteCarousel direction="left">
        <SponsorCard sponsorImgUrl={Sponsor1} />
        <SponsorCard sponsorImgUrl={Sponsor2} />
        <SponsorCard sponsorImgUrl={Sponsor3} />
        <SponsorCard sponsorImgUrl={Sponsor4} />
        <SponsorCard sponsorImgUrl={Sponsor1} />
        <SponsorCard sponsorImgUrl={Sponsor2} />
        <SponsorCard sponsorImgUrl={Sponsor3} />
        <SponsorCard sponsorImgUrl={Sponsor4} />
      </InfiniteCarousel>
      <InfiniteCarousel direction="right">
        <SponsorCard sponsorImgUrl={Sponsor1} />
        <SponsorCard sponsorImgUrl={Sponsor2} />
        <SponsorCard sponsorImgUrl={Sponsor3} />
        <SponsorCard sponsorImgUrl={Sponsor4} />
        <SponsorCard sponsorImgUrl={Sponsor1} />
        <SponsorCard sponsorImgUrl={Sponsor2} />
        <SponsorCard sponsorImgUrl={Sponsor3} />
        <SponsorCard sponsorImgUrl={Sponsor4} />
      </InfiniteCarousel>
    </section>
  );
};

export default Sponsors;
