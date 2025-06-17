import {Hero} from "@/components/sections/Hero";
import {Header} from "@/components/sections/Header";
import {Partners} from "@/components/sections/Partners";
import {Awards} from "@/components/sections/Awards";
import {Works} from "@/components/sections/Works";
import {Brand} from "@/components/sections/Brand";
import {Reviews} from "@/components/sections/Reviews";
import {Skills} from "@/components/sections/Skills";
import {Facts} from "@/components/sections/Facts";
import {Blog} from "@/components/sections/Blog";
import {Contacts} from "@/components/sections/Contacts";
import {Footer} from "@/components/sections/Footer";

export default function Home() {
  return (
      <>
          <Header />
          <Hero/>
          <Partners/>
          <Awards/>
          <Works/>
          <Brand/>
          <Reviews/>
          <Skills/>
          <Facts/>
          <Blog/>
          <Contacts/>
          <Footer/>
      </>
  );
}
