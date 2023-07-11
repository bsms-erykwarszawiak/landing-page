import React from "react";

function MainContent() {
  return (
    <div className="flex flex-row  w-full h-full ">
      <div className="flex flex-col md:w-2/4 w-full md:h-full h-full md:justify-start justify-center md:items-start items-center">
        <div className="flex flex-row md:w-content w-full h-content items-center justify-center md:justify-start md:pt-10 text-black">
          <p className="md:text-[4rem] text-[2rem] font-bold justify-center md:justify-start font-main">
            Teraźniejszość to przeszłość, <br /> a przyszłość
            <br /> jest teraz
          </p>
        </div>
        <div className="flex flex-row md:w-content w-full h-content items-center justify-center md:my-20 pt-[1.5rem]">
          <p className="flex w-full text-start pb-10 text-xl md:text-[1.5rem] text-black font-main">
            Jesteśmy liderem w produkcji oprogramowania dla Twojego biznesu!
            Nasze dedykowane rozwiązania pomogą Ci z łatwością zarządzać każdym
            aspektem Twojej firmy. Twój partner w zarządzaniu firmą.
          </p>
        </div>

        <div className="hidden w-full h-content items-start justify-start">
          <button className=" bg-[#E7E7E7] py-2 px-10 text-2xl font-bold text-black rounded-full font-main">
            Zobacz nasz produkt dla serwisów
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
