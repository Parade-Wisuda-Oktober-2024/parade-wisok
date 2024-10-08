import Sponsor1 from "public/logo.png";
import Sponsor2 from "public/v-1.png";
import Sponsor3 from "public/v-14.png";
import Sponsor4 from "public/v-16.png";
import SponsorCard from "../../components/sponsorship/SponsorCard";
import InfiniteCarousel from "../../components/sponsorship/InfiniteCarousel";
import Title from "~/components/title";

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="w-full py-16 flex flex-col items-center sponsors-wrapper">
      <Title>Sponsorship</Title>
      <InfiniteCarousel>
        <SponsorCard sponsorImgUrl={Sponsor1} />
        <SponsorCard sponsorImgUrl={Sponsor2} />
        <SponsorCard sponsorImgUrl={Sponsor3} />
        <SponsorCard sponsorImgUrl={Sponsor4} />
      </InfiniteCarousel>
      <InfiniteCarousel>
        <SponsorCard sponsorImgUrl={Sponsor1} />
        <SponsorCard sponsorImgUrl={Sponsor2} />
        <SponsorCard sponsorImgUrl={Sponsor3} />
        <SponsorCard sponsorImgUrl={Sponsor4} />
      </InfiniteCarousel>
    </section>
  );
};

export default Sponsors;
