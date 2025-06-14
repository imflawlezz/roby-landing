import {Hero} from "@/components/sections/Hero";
import {Header} from "@/components/sections/Header";
import {Partners} from "@/components/sections/Partners";
import {Awards} from "@/components/sections/Awards";
import {Works} from "@/components/sections/Works";

export default function Home() {
  return (
      <>
          <Header />
          <Hero/>
          <Partners/>
          <Awards/>
          <Works/>
      </>
  );
}
