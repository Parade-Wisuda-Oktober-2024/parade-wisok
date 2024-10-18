import Title from "~/components/title";
import BackgroundImage from "public/profile/bg-profile.png";
import ProfileCard from "~/components/profile/ProfileCard";
import Image from 'next/image';

export default function Profile() {
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
      <div className="absolute translate-y-[-140px] z-0">
        <Image 
          src="/profile/bg-top-profile.png"
          alt="Background"
          width={1920}
          height={1080}
          className="max-w-full overflow-hidden"
        />
      </div>
      
      <div className="flex flex-col items-center z-10 mt-52 gap-5 mb-28">
        <Title>HAI PENAKLUK</Title>
        <Title>ITB</Title>
      </div>
      
      <ProfileCard/>
      
      <div className="flex flex-col items-center z-10 mt-14 gap-5 mb-14 ">
        <Title>YOUR</Title>
        <Title>ACHIEVEMENT</Title>
      </div>

      {/* COMPONENT TA FAIR */}
      <ProfileCard/>

      <div className="flex flex-col items-center z-10 mt-16 gap-5 mb-14 ">
        <Title>Pesan</Title>
      </div>

      {/* COMPONENT WOA + ARROW ICON */}
      <ProfileCard/>

    </section>
  );
}