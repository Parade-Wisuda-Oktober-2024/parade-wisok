import radio8eh from "public/sponsorship/medpart/8eh-radio-itb.png";
import aiesec from "public/sponsorship/medpart/aiesec.png";
import eventdetect from "public/sponsorship/medpart/event-detect.png";
import eventmahasiswa8 from "public/sponsorship/medpart/event-mahasiswa8.png";
import ieeeitb from "public/sponsorship/medpart/ieeeitb.jpg";
import itbstory from "public/sponsorship/medpart/itb-story.png";
import itbreceh from "public/sponsorship/medpart/itbreceh.png";
import iyref from "public/sponsorship/medpart/iyref.png";
import ksep from "public/sponsorship/medpart/ksep.png";
import lfmitb from "public/sponsorship/medpart/lfm-itb.png";
import radioraka from "public/sponsorship/medpart/radio-raka.jpg";
import ruanganevent from "public/sponsorship/medpart/ruangan-event.jpg";
import sandbox from "public/sponsorship/medpart/sandbox.png";
import sre from "public/sponsorship/medpart/sre-itb.jpg";
import tec from "public/sponsorship/medpart/tec-itb.png";
import temanacara from "public/sponsorship/medpart/temanacara.png";
import tribunjabar from "public/sponsorship/medpart/tribunjabar.png";
import urbanradio from "public/sponsorship/medpart/urban-radio.png";
import eventbanget from "public/sponsorship/medpart/eventbanget.png";
import swararadio from "public/sponsorship/medpart/swararadio.jpg";
import bca from "public/sponsorship/sponsor/bca.png";
import esize from "public/sponsorship/sponsor/esize.png";
import frestea from "public/sponsorship/sponsor/frestea.png";
import mahakaX from "public/sponsorship/sponsor/mahakaX.png";
import propan from "public/sponsorship/sponsor/propan.jpg";
import SponsorCard from "../../components/sponsorship/SponsorCard";
import InfiniteCarousel from "../../components/sponsorship/InfiniteCarousel";
import Title from "~/components/title";
import BackgroundImage from "public/sponsorship/bg-sponsorship.png";

const Sponsors: React.FC = () => {
  return (
    <section
      className="flex w-full flex-col items-center py-16"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title className="mb-5">Sponsorship</Title>
      <div className="grid-col-1 md:grid-col-2 lg:grid-col-3 m-auto mb-10 mt-10 grid w-full max-w-7xl">
        <div className="flex flex-wrap justify-center">
          <SponsorCard sponsorImgUrl={bca} />
          <SponsorCard sponsorImgUrl={esize} />
          <SponsorCard sponsorImgUrl={frestea} />
          <SponsorCard sponsorImgUrl={mahakaX} />
          <SponsorCard sponsorImgUrl={propan} />
        </div>
      </div>
      <Title className="mb-5">Media Partner</Title>
      <InfiniteCarousel direction="left">
        <SponsorCard sponsorImgUrl={radio8eh} />
        <SponsorCard sponsorImgUrl={aiesec} />
        <SponsorCard sponsorImgUrl={eventdetect} />
        <SponsorCard sponsorImgUrl={eventmahasiswa8} />
        <SponsorCard sponsorImgUrl={eventbanget} />
        <SponsorCard sponsorImgUrl={ieeeitb} />
        <SponsorCard sponsorImgUrl={itbstory} />
        <SponsorCard sponsorImgUrl={itbreceh} />
        <SponsorCard sponsorImgUrl={iyref} />
        <SponsorCard sponsorImgUrl={ksep} />
        <SponsorCard sponsorImgUrl={lfmitb} />
        <SponsorCard sponsorImgUrl={radioraka} />
        <SponsorCard sponsorImgUrl={swararadio} />
        <SponsorCard sponsorImgUrl={ruanganevent} />
        <SponsorCard sponsorImgUrl={sandbox} />
        <SponsorCard sponsorImgUrl={sre} />
        <SponsorCard sponsorImgUrl={tec} />
        <SponsorCard sponsorImgUrl={temanacara} />
        <SponsorCard sponsorImgUrl={tribunjabar} />
        <SponsorCard sponsorImgUrl={urbanradio} />
        <SponsorCard sponsorImgUrl={radio8eh} />
        <SponsorCard sponsorImgUrl={aiesec} />
        <SponsorCard sponsorImgUrl={eventdetect} />
        <SponsorCard sponsorImgUrl={eventmahasiswa8} />
        <SponsorCard sponsorImgUrl={eventbanget} />
        <SponsorCard sponsorImgUrl={ieeeitb} />
        <SponsorCard sponsorImgUrl={itbstory} />
        <SponsorCard sponsorImgUrl={itbreceh} />
        <SponsorCard sponsorImgUrl={iyref} />
        <SponsorCard sponsorImgUrl={ksep} />
        <SponsorCard sponsorImgUrl={lfmitb} />
        <SponsorCard sponsorImgUrl={radioraka} />
        <SponsorCard sponsorImgUrl={swararadio} />
        <SponsorCard sponsorImgUrl={ruanganevent} />
        <SponsorCard sponsorImgUrl={sandbox} />
        <SponsorCard sponsorImgUrl={sre} />
        <SponsorCard sponsorImgUrl={tec} />
        <SponsorCard sponsorImgUrl={temanacara} />
        <SponsorCard sponsorImgUrl={tribunjabar} />
        <SponsorCard sponsorImgUrl={urbanradio} />
      </InfiniteCarousel>
      <InfiniteCarousel direction="right">
        <SponsorCard sponsorImgUrl={radio8eh} />
        <SponsorCard sponsorImgUrl={aiesec} />
        <SponsorCard sponsorImgUrl={eventdetect} />
        <SponsorCard sponsorImgUrl={eventmahasiswa8} />
        <SponsorCard sponsorImgUrl={eventbanget} />
        <SponsorCard sponsorImgUrl={ieeeitb} />
        <SponsorCard sponsorImgUrl={itbstory} />
        <SponsorCard sponsorImgUrl={itbreceh} />
        <SponsorCard sponsorImgUrl={iyref} />
        <SponsorCard sponsorImgUrl={ksep} />
        <SponsorCard sponsorImgUrl={lfmitb} />
        <SponsorCard sponsorImgUrl={radioraka} />
        <SponsorCard sponsorImgUrl={swararadio} />
        <SponsorCard sponsorImgUrl={ruanganevent} />
        <SponsorCard sponsorImgUrl={sandbox} />
        <SponsorCard sponsorImgUrl={sre} />
        <SponsorCard sponsorImgUrl={tec} />
        <SponsorCard sponsorImgUrl={temanacara} />
        <SponsorCard sponsorImgUrl={tribunjabar} />
        <SponsorCard sponsorImgUrl={urbanradio} />
        <SponsorCard sponsorImgUrl={radio8eh} />
        <SponsorCard sponsorImgUrl={aiesec} />
        <SponsorCard sponsorImgUrl={eventdetect} />
        <SponsorCard sponsorImgUrl={eventmahasiswa8} />
        <SponsorCard sponsorImgUrl={eventbanget} />
        <SponsorCard sponsorImgUrl={ieeeitb} />
        <SponsorCard sponsorImgUrl={itbstory} />
        <SponsorCard sponsorImgUrl={itbreceh} />
        <SponsorCard sponsorImgUrl={iyref} />
        <SponsorCard sponsorImgUrl={ksep} />
        <SponsorCard sponsorImgUrl={lfmitb} />
        <SponsorCard sponsorImgUrl={radioraka} />
        <SponsorCard sponsorImgUrl={swararadio} />
        <SponsorCard sponsorImgUrl={ruanganevent} />
        <SponsorCard sponsorImgUrl={sandbox} />
        <SponsorCard sponsorImgUrl={sre} />
        <SponsorCard sponsorImgUrl={tec} />
        <SponsorCard sponsorImgUrl={temanacara} />
        <SponsorCard sponsorImgUrl={tribunjabar} />
        <SponsorCard sponsorImgUrl={urbanradio} />
      </InfiniteCarousel>
    </section>
  );
};

export default Sponsors;
