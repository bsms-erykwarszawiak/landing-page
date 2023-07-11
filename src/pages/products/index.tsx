import Head from "next/head";
import Navbar from "@/components/organisms/navbar";
import MainContentProduct from "@/components/organisms/maincontentproduct";
import FooterBar from "@/components/organisms/footerbar";
import Contact from "@/components/molecues/contact";
import SliderMobile from "@/components/organisms/slidermobile";
import Standard from "@/components/organisms/standard";
import Premium from "@/components/organisms/premium";
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
        <title>Blvck Service & Managment Systems - Product</title>
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
        <div className="flex flex-col m-0 w-screen ">
          <div className="flex items-center justify-center px-8 h-[50rem]">
            <MainContentProduct />
          </div>
          <div className="flex flex-col w-full py-16 px-8">
            <p className=" text-[2rem] font-bold justify-center font-main text-white py-16">Pakiety podstawowe</p>
            <Standard />
          </div>
          <div className="flex flex-col w-full py-16 px-8">
            <p className=" text-[2rem] font-bold justify-center font-main text-white py-16">Pakiety premium</p>
            <Premium />
          </div>
          <div className="flex flex-row w-full border-t-[1px] border-[#404040] bg-black z-50 px-8 py-8">
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
