import React from "react";

function SectionTheree() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center w-full  md:mx-20 md:gap-x-80 md:h-full md:my-28 ">
          <div className="flex flex-col items-center md:justify-start justify-center w-full">
      
      <div className="flex flex-col min-w-[20rem] md:flex-row">
      <div className="flex flex-col w-full h-full">
      <p className="text-white text-[2.25rem] font-semibold mb-[2rem] font-main">KONTAKT</p>
      <p className="text-[#E7E7E7] font-normal font-main mb-[2rem]">
      Jeśli masz jakieś pytania, wątpliwości lub chcesz skontaktować się z
          nami w innej sprawie, nie wahaj się i napisz do nas! Nasz zespół z
          przyjemnością odpowie na Twoje wiadomości i pomoże rozwiązać wszelkie
          problemy.
      </p>
      </div>
       <div className="flex w-full h-full flex-col">
       <div className="w-full md:h-full items-center justify-center mb-[2rem]">
          <input
            className="flex w-full md:h-10 items-center justify-center border-[1px] bg-black text-[#E7E7E7] border-[#E7E7E7] pl-6"
            type="text"
            name="search"
            placeholder="Email"
          />
        </div>
        <div className="w-full md:h-full items-center justify-center mb-[2rem]">
          <textarea
            className="flex w-full h-[19.5rem] md:h-24 items-center justify-center resize-none	 border-solid border-[1px] bg-black text-[#E7E7E7] border-white md:pt-2 pl-6"
            placeholder="Wiadomość"
          />
        </div>
        <div className="flex flex-col md:items-start w-fit items-center md:justify-start bg-[#E7E7E7] justify-center rounded-full my-8">
          <p className="text-[1rem] text-[#141414] font-main px-8 py-2">
            Wyślij &rarr;
          </p>
        </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default SectionTheree;
