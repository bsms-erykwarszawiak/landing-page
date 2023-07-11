import React from "react";
import Image from "next/image";
const NewsTwo = () => {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      <div>
        <p className="px-8 pt-8 text-[2rem] text-[#FFFFFF] opacity-70 mb-[1rem] font-main">
          10.07.2023
        </p>
      </div>
      <div className="flex flex-col md:flex-row  w-full h-full">
        <div className="flex flex-col  w-full h-full">
          <p className="px-8 text-[2rem] font-semibold text-white mb-[1rem] font-main">
            Wdrążenie mini aplikacji windykacyjnej dla księgowości
          </p>
          <div className="flex bg-white justify-center items-center min-h-36 h-36 w-full md:ml-[2rem] md:w-[90%] border-b-[10px] border-black">
          <Image src="/assets/WindiWega.png" width={500} height={200} alt="Widykacja"  />

          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <p className="px-8 py-4 text-[1rem] text-[#E7E7E7] mb-[1rem] font-main">
            Z Przedstawiamy Wam nasz nowy, intrygujący projekt - aplikację
            windykacyjną dla księgowości. Pełniąc rolę naszego drugiego
            projektu, ta innowacyjna aplikacja jest hołdem dla precyzji i
            profesjonalizmu, jakie związane są z dziedziną księgowości. Krocząc
            w ślad za naszym pierwszym sukcesem, postanowiliśmy podjąć wyzwanie
            stworzenia aplikacji, która przyniesie ogromną wartość dla biznesów
            w potrzebie odzyskania swoich należności. Naszym celem jest
            wyznaczenie nowych standardów w dziedzinie windykacji poprzez
            połączenie najnowocześniejszych technologii z głęboką wiedzą
            księgową.
          </p>
          {/* <div className="flex flex-col md:items-start items-center md:justify-start bg-[#E7E7E7] w-fit justify-center py-1 px-2 rounded-full my-4 mx-8">
            <p className="text-[1rem] text-[#141414] font-main py-2 px-8">
              Czytaj dalej &rarr;
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewsTwo;
