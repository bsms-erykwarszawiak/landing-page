import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/organisms/navbar";
import MainContent from "@/components/organisms/main/maincontent";
import TryDemo from "@/components/organisms/main/trydemo";
import SectionTwo from "@/components/organisms/main/sectiontwo";
import SectionThree from "@/components/organisms/main/sectionthree";
import FooterBar from "@/components/organisms/footerbar";
import Contact from "@/components/molecues/contact";
import SliderMobile from "@/components/organisms/slidermobile";
import {Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import { useCallback } from "react";


export default function Home() {
  const loadParticles = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);
const particlesLoaded = useCallback(async (container: any) => {
    await container;
}, []);


  return (
    <>
      <Head>
        <title>Blvck Service & Managment Systems</title>
        <meta
          name="description"
          content="Aplikacja serwisowa, aplikacja dla serwisów, aplikacja dla mechaników, aplikacja dla restauracji, Strona dla ciebie, Strona www, wordpress,"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
                    id="login-particles"
                    url="/assets/particles.json"
                    init={loadParticles}
                    loaded={particlesLoaded}
                />
      <main className="flex flex-col w-screen h-full m-0 overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col m-0 w-screen">
          <div className="flex items-center justify-center px-8 h-[50rem]">
            <MainContent />
          </div>
          <div className="flex flex-row w-full py-16">
            <TryDemo />
          </div>
          <div className="flex flex-row w-full bg-white py-16 px-8">
            <SectionTwo />
          </div>
          <div className="flex flex-row w-full px-8 py-16 bg-black z-50">
            <SectionThree />
          </div>
          <div className="flex flex-row w-full border-t-[1px] bg-black border-[#404040] px-8 py-8 z-50">
            <Contact />
          </div>
          <div className="flex flex-col px-8 py-8 bg-black z-50">
            <FooterBar />
          </div>
        </div>
      </main>
      <SliderMobile />
    </>
  );
}
