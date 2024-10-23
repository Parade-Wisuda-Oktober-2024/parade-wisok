import {GraduateView} from "./graduates-view";
import {users} from "~/types/user";
import * as React from "react";
import Title from "~/components/title";

// static route
export const dynamic = "force-static";

// Page
const Page = () => {
  return (
    <main
      className="flex min-h-screen inset-0 bg-[url('/Welcome.png')] items-start justify-center bg-center bg-no-repeat z-[-1] bg-cover px-5 py-16 pt-28 md:pt-36"
    >
      <section
        className="z-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:max-w-xl lg:max-w-5xl lg:gap-6">
        {/*/!* Title *!/*/}
        {/*<div*/}
        {/*  data-aos="fade-up"*/}
        {/*  className="relative flex w-80 items-center justify-center lg:w-[512px]"*/}
        {/*>*/}
        {/*  <Title*/}
        {/*    className="title font-header z-10 inline-block bg-gradient-to-b from-text-alt to-text bg-clip-text">*/}
        {/*    GRADUATES*/}
        {/*  </Title>*/}
        {/*</div>*/}
        {/*/!* Subtitle *!/*/}
        {/*<h2*/}
        {/*  data-aos="fade-up"*/}
        {/*  data-aos-delay="100"*/}
        {/*  className="title text-center text-xl lg:text-3xl bg-gradient-to-b from-text-alt to-text"*/}
        {/*>*/}
        {/*  KIRIM KAN WISOKFESS UNTUK ORANG TERSPESIAL KAMU!*/}
        {/*</h2>*/}
        {/* Graduates Filters and Views */}
        {/*<React.Suspense fallback={null}>*/}
        {/*  <GraduateView graduates={users}/>*/}
        {/*</React.Suspense>*/}
        <h1>COMING SOON</h1>
      </section>
    </main>
  );
};

export default Page;
