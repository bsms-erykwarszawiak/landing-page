import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/organisms/navbar";
import TryDemo from "@/components/organisms/main/trydemo";
import SectionTwo from "@/components/organisms/main/sectiontwo";
import SectionThree from "@/components/organisms/main/sectionthree";
import FooterBar from "@/components/organisms/footerbar";
import Contact from "@/components/molecues/contact";
import SliderMobile from "@/components/organisms/slidermobile";
import MainContentNews from "@/components/organisms/news/maincontentnews";
import NewsOne from "@/components/organisms/news/newsone";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { useCallback } from "react";
import NewsTwo from "@/components/organisms/news/newstwo";

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
        <title>Blvck Service & Managment Systems - News</title>
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
            <MainContentNews />
          </div>
          <div className="flex flex-col w-full py-16 z-50">
            <NewsOne />
            <hr className="w-full h-[1px] my-8 bg-[#ADADAD] border-0 "></hr>
            <NewsTwo />
            <hr className="w-full h-[1px] my-8 bg-[#ADADAD] border-0 "></hr>

            <div className="flex flex-col w-full h-full items-center justify-center min-h-[20rem] bg-black z-50">
              <p className="text-[2rem] text-[#E7E7E7] mb-[1rem] font-main opacity-50 max-w-[16.25rem]">
                Wygląda na to że to na tyle narazie
              </p>
              <a href="../">
                <div className="flex flex-col md:items-start items-center md:justify-start bg-[#E7E7E7] w-fit justify-center py-1 px-2 rounded-full my-4 mx-8">
                  <p className="text-[1rem] text-[#141414] font-main py-2 px-8">
                    Strona główna
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row w-full border-t-[1px] border-[#404040] px-8 py-8 bg-black z-50">
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
