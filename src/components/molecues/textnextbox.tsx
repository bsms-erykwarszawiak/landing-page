import React from "react";

function TextNextBox() {
  return (
    <div className="flex flex-col md:w-2/4 w-full md:h-[40rem] h-full md:justify-start justify-start md:items-start items-center">
      <div className="flex flex-row md:w-content w-full h-content items-center justify-start pt-32 pb-10">
        <p className="md:text-[4rem] text-[3rem] w-full font-bold justify-start ">
          Teraźniejszość to przeszłość, a przyszłość jest teraz
        </p>
      </div>
      <div className="flex flex-row md:w-content w-full h-content items-center justify-center">
        <p className="flex w-full text-start pb-10 text-xl">
          Dzięki naszemu narzędziu możesz łatwo zarządzać projektem, planować
          zadania, monitorować postępy prac i analizować wyniki.
        </p>
      </div>
      <div className="w-full h-content items-start justify-start">
        <button className="bg-blue-700 py-5 px-10">DEMO</button>
      </div>
    </div>
  );
}

export default TextNextBox;
