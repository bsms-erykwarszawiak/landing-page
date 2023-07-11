import React from "react";
import Image from "next/image";

const EmeraldPackage = () => {
  return (
    <div className="flex w-full min-w-full max-h-max flex-col bg-black border-solid border-2 border-[#4D4D4D] gap-2 items-center justify-start drop-shadow-2xl py-4 min-h-[33rem]">
    <p className="flex text-3xl font-main text-[#E7E7E7] ">Aplikacje mobilne / desktopowe</p>
    <p className="flex text-3xl font-main text-[#E7E7E7]">
      Mobile / PC Aplication
    </p>
    <h3 className={`flex text-1xl mt-10 font-main text-[#E7E7E7]`}>
      Brak dodatkowych usług
    </h3>
    <p className="flex text-sm font-main text-[#E7E7E7]">Autorskie rozwiązanie</p>
    <div className="flex flex-col w-full items-start justify-center">
      <div className="flex flex-row w-full h-content ml-4 my-3">
        <Image src="/assets/check.svg" width={25} height={25} alt="Check" />
        <p className="ml-4 font-main text-[#E7E7E7]">
          Darmowy projekt wizualny
        </p>
      </div>
      <div className="flex flex-row w-full h-content ml-4 my-3">
        <Image src="/assets/check.svg" width={25} height={25} alt="Check" />
        <p className="ml-4 font-main text-[#E7E7E7]">Wgranie na App Store i Google Play</p>
      </div>
      <div className="flex flex-row w-full h-content ml-4 my-3">
        <Image src="/assets/check.svg" width={25} height={25} alt="Check" />
        <p className="ml-4 font-main text-[#E7E7E7]">Wsparcie techniczne i doradztwo informatyczne</p>
      </div>
      <div className="flex flex-row w-full h-content ml-4 my-3">
        <Image src="/assets/check.svg" width={25} height={25} alt="Check" />
        <p className="ml-4 font-main text-[#E7E7E7]">Pełna responsywność aplikacji</p>
      </div>
      <div className="flex flex-row w-full h-content ml-4 my-3">
        <Image src="/assets/check.svg" width={25} height={25} alt="Check" />
        <p className="ml-4 font-main text-[#E7E7E7]">Zabezpieczenia działania OAuth2 / CORS</p>
      </div>
      <div className="flex flex-row w-full h-content ml-4 my-3">
        <Image src="/assets/check.svg" width={25} height={25} alt="Check" />
        <p className="ml-4 font-main text-[#E7E7E7]">Innowacyjne rozwiązania aplikacji dynamicznych</p>
      </div>
    </div>

    <div className="flex flex-col md:w-4/5 items-start md:justify-start justify-center">
      <p className=" rounded-full py-2 px-8 bg-[#E7E7E7] text-black mt-4 font-main">
        <a href="tel:737135890">Zadzwoń teraz &rarr;</a>
      </p>
    </div>
  </div>
  );
}

export default EmeraldPackage;
