import {cn} from "~/lib/utils";

interface WoaCardProps {
  from?: string;
  to: string;
  toFaculty: string;
  toNIM: string;
  message: string;
  className?: string;
}

export function WoaCard({from, to, toFaculty, toNIM, message, className}: WoaCardProps) {
  return (
    <div
      className={cn("bg-[url('/organogram/borderlight.png')] border border-purple-500 bg-cover bg-center object-center rounded-[20px] w-full md:w-3/4 lg:w-full h-96 p-1", className)}>
      <div
        className="relative overflow-hidden bg-[url('/organogram/ono-bg.png')] p-6 md:p-8 flex items-center flex-col justify-between bg-cover bg-center object-center rounded-[16px] w-full h-full">
        <div className='absolute w-full h-full bg-blue-950/20 top-0 z-0'>
        </div>
        <div className="flex flex-col items-center z-10">
          <h3 className="">{`From ${from ?? "Anon"}`}</h3>
          <h1
            className="title text-lg md:text-xl lg:text-2xl bg-gradient-to-b from-text-alt to-text from-65% to-0%">{`To ${to}`}</h1>
          <h4 className="">{toFaculty}</h4>
          <h4 className="">{toNIM}</h4>
        </div>
        <p className="text-justify z-10 text-sm md:text-base lg:text-lg min-h-[65%] max-h-[65%] md:min-h-[62.5%] md:max-h-[62.5%] overflow-y-scroll">
          {message}
        </p>
      </div>
    </div>
  );
}