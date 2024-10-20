import React from "react";
import Title from "~/components/title";
import {SearchInput} from "~/components/filter/search";
import {DropdownFaculty} from "~/components/filter/dropdown-faculty";
import {WoaCard} from "~/app/woa/woa-card";
import FormDialog from "~/app/woa/form-dialog";

export default function Page() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-10 gap-6 md:gap-8 pb-8 md:pb-10">
      <FormDialog/>
      <div
        style={{backgroundImage: "url('/organogram/borderlight.png')"}}
        className="bg-center bg-cover w-full h-screen fixed top-0 -z-10 "></div>
      <Title className="mt-28 md:mt-36 text-center capitalize md:uppercase">
        {"Wall of Appreciation"}
      </Title>
      <div className="flex gap-4 max-w-full">
        <React.Suspense fallback={null}>
          <SearchInput className='max-h-12 md:w-[50vw] w-min' data-aos="fade-up" data-aos-delay="150"/>
          <DropdownFaculty className='max-h-12 w-28' data-aos="fade-up"
                           data-aos-delay="150"/>
        </React.Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center">
        <WoaCard to={"Adi Haditya"}
                 toFaculty={"Teknik Mesin"}
                 toNIM={"13122080"}
                 message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        <WoaCard to={"Adi Haditya"}
                 toFaculty={"Teknik Mesin"}
                 toNIM={"13122080"}
                 message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        <WoaCard to={"Adi Haditya"}
                 toFaculty={"Teknik Mesin"}
                 toNIM={"13122080"}
                 message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
        <WoaCard to={"Adi Haditya"}
                 toFaculty={"Teknik Mesin"}
                 toNIM={"13122080"}
                 message={"Mau bilang terima kasih banget buat jadi orang yang super baik! Kamu selalu bisa jadi inspirasi buat kita semua. Dengan sikap dan kebaikanmu, kamu bikin perjalanan kita lebih mudah dan menyenangkan. Semoga kamu terus bersinar dan bawa semangat positif ke semua orang. Kita semua menghargai semua yang kamu lakukan. Keep inspiring us, ya!"}/>
      </div>
    </div>
  );
}