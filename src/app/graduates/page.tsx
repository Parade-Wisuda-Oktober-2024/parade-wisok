import { GraduateView } from "./graduates-view";
import { users } from "~/types/user";
import * as React from "react";

// static route
export const dynamic = "force-static";

// Page
const Page = () => {
  return (
    <main
      className="flex min-h-[calc(100vh-80px)] fixed inset-0 bg-[url('/Welcome.png')] items-start justify-center  bg-center bg-no-repeat z-[-1] bg-cover px-5 py-12 sm:p-12 lg:p-16 xl:min-h-[calc(100vh-96px)]"
    >
      <section className="z-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:max-w-xl lg:max-w-5xl lg:gap-6">
        {/* Title */}
        <div
          data-aos="fade-up"
          className="relative flex h-28 w-80 items-center justify-center lg:h-44 lg:w-[512px]"
        >
          <h1 className="title font-header relative bottom-5 z-10 inline-block bg-gradient-to-b from-text-alt to-text bg-clip-text text-5xl lg:bottom-4 lg:text-7xl">
            GRADUATES
          </h1>
        </div>

        {/* Subtitle */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="title text-center text-xl lg:text-3xl bg-gradient-to-b from-text-alt to-text"
        >
          KIRIM KAN WISOKFESS UNTUK ORANG TERSPESIAL KAMU!
        </h2>

        {/* Graduates Filters and Views */}
        <React.Suspense fallback={null}>
          <GraduateView graduates={users} />
        </React.Suspense>
      </section>
    </main>
  );
};

export default Page;
