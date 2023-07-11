import Head from "next/head";
import Navbar from "@/components/organisms/navbar";
import MainContentPrograms from "@/components/organisms/maincontentprograms";
import FooterBar from "@/components/organisms/footerbar";
import SliderMobile from "@/components/organisms/slidermobile";
import DescProduct from "@/components/organisms/descproduct";
import Contact from "@/components/molecues/contact";
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
        <title>Blvck Service & Managment Systems - Programs</title>
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
          <div className="flex items-center justify-center px-8 h-[50rem] md:px-[4rem]">
            <MainContentPrograms />
          </div>
          <div className="flex flex-row w-full py-16 px-[1.5rem] bg-black z-50 md:px-[4rem]">
            <DescProduct />
          </div>
          <div className="flex flex-col  bg-black z-50 px-8 md:px-[4rem] py-8 border-t-[1px] border-[#404040]">
            <Contact />
          </div>
          <div className="flex flex-col bg-black z-50 px-8 md:px-[4rem] py-8">
            <FooterBar />
          </div>
        </div>
      </main>
      <SliderMobile />
    </>
  );
}
