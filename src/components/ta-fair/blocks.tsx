import Title from "~/components/title";
import Image from "next/image";
import { BlocksLayout, NumberCarouselActive, NumberCarouselInactive } from "~/app/ta-fair/layout";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";




function TAblocks() {
  return (

    <div className="relative flex-col justify-center items-center">

      <div className="flex flex-row flex-1 justify-center items-center space-x-4 h-full"> {/* container */}
        {/* INPUT PLACEHOLDER */}
        <div className="relative h-full flex justify-between items-center w-[90%] bg-[#401571cc] border-[#fee59a] border-solid border-2 rounded">

          <div className="flex m-2 z-10">
            <Image
              src={'/search.svg'}
              alt='/search.svg'
              width={30}
              height={30} />
          </div>

          <div className="relative h-full flex justify-center items-center w-full m-2">
            <input placeholder="Cari wisudawan" className="bg-[#401571cc] placeholder-[#fee59a] font-sub-sub-header rounded-md flex-1" />
          </div>

        </div>

        <div className="relative flex w-[10%] h-full justify-center items-center bg-[#401571cc] border-[#fee59a] border-solid border-2 rounded p-2">
          <DropdownMenu>
            <DropdownMenuTrigger>Fakultas</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator className="flex justify-center items-center" />
              <DropdownMenuItem className="flex justify-center items-center m-2">STEI</DropdownMenuItem>
              <DropdownMenuItem className="flex justify-center items-center m-2">FTMD</DropdownMenuItem>
              <DropdownMenuItem className="flex justify-center items-center m-2">Team</DropdownMenuItem>
              <DropdownMenuItem className="flex justify-center items-center m-2">Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <section>
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"} />
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"} />
        <BlocksLayout
          judulTA={"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
          penulisTA={"Muhammad Fadhlan Armon"}
          jurusanPenulis={"Manajemen"}
          jumlahLove={"6"} />

      </section>

      <div className="flex space-x-2 justify-center items-center">

        <div className="bg-[rgb(250,230,149)] z-0 justify-center items-center rounded-full w-10 h-10">

          <div className="relative inset-0 flex z-10 bg-[url('/back-vector.png')] bg-contain bg-no-repeat w-10 h-10 justify-center items-center text-[rgba(45,37,73,255)]"></div>
        </div>


        <NumberCarouselActive
          children={1} />

        <NumberCarouselInactive
          children={2} />
        <NumberCarouselInactive
          children={3} />
        <NumberCarouselInactive
          children={4} />
        <NumberCarouselInactive
          children={5} />
        <NumberCarouselInactive
          children={6} />
        <NumberCarouselInactive
          children={7} />
        <NumberCarouselInactive
          children={8} />
        <NumberCarouselInactive
          children={9} />


        <div className="bg-[rgb(250,230,149)] z-0 justify-center items-center rounded-full w-10 h-10">

          <div className="relative inset-y-2.5 inset-x-3.5 flex z-10 bg-[url('/next-vector.png')] bg-contain bg-no-repeat w-5 h-5 justify-center items-center" style={{ transform: 'scaleY(-1)' }}></div>
        </div>
      </div>
    </div>
  );
}

export default TAblocks;
