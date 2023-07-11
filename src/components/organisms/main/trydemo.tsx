import React from "react";
import Image from "next/image";

function TryDemo() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-full">
      <div className="flex flex-col md:flex-row items-start justify-start md:justify-between h-content bg-black">
        <div className="md:flex md:flex-col md:w-1/2">
          <div className="flex flex-col w-2/3 h-content min-w-[20rem] md:w-full">
            <hr className="w-[10rem] h-1 my-8 bg-gray-200 border-0"></hr>
            <p className="text-[2.25rem] font-bold text-[#E7E7E7] mb-[3rem] font-main">
              Kim jesteśmy ?
            </p>
          </div>
          <div className="flex items-start justify-start w-full h-full mr-8">
            <Image
              className="hidden md:flex"
              src="/assets/bsmsl.svg"
              width={250}
              height={250}
              alt="?"
            />
          </div>
        </div>
        <div className="flex md:flex-col md:w-1/2">
          <div className="flex flex-col h-content md:w-full">
            <p className="text-[1rem] text-[#E7E7E7] mb-[1rem] font-main pt-4">
              Jesteśmy specjalistami w dziedzinie IT i oferujemy szeroką gamę
              usług z tej branży. Nasza oferta obejmuje m.in. projektowanie i
              tworzenie stron internetowych, wdrażanie i utrzymywanie witryn w
              sieci, modernizację już istniejących stron oraz implementację
              narzędzi i rozwiązań IT. Jesteśmy gotowi sprostać każdemu wyzwaniu
              związanemu z technologią. Skontaktuj się z nami, aby poznać naszą
              pełną ofertę.
            </p>
            <p className="hidden md:flex text-[1rem] text-[#E7E7E7] mb-[1rem] font-main">
              <br />
              <br />
              Oto nasze usługi, które świadczymy.
              <br />
              <br />
              <br />
              1. Tworzymy strony, sklepy, aplikacje webowe.
              <br />
              <br />
              2. Posiadamy własny hosting, który udostępniamy klientom.
              <br />
              <br />
              3. Posiadamy duże doświadczenie w językach: PHP, ReactJS, TypeScript, JavaScript, CSS oraz wiele więcej.
              <br />
              <br />
              4. Wsparcie technicze przez cały rok! Otrzymujesz pierwszy rok za darmo!
            </p>
          </div>
        </div>
        <div className="flex md:hidden flex-col md:items-start items-center md:justify-start bg-[#E7E7E7] justify-center py-1 px-2 rounded-full my-8">
          <p className="text-[1rem] text-[#141414] font-main py-2 px-8">
            Czytaj dalej &rarr;
          </p>
        </div>
        <div className="flex md:hidden items-end justify-end w-full h-full ml-8">
          <Image
            className="flex"
            src="/assets/bsms.svg"
            width={250}
            height={250}
            alt="?"
          />
        </div>
      </div>
    </div>
  );
}

export default TryDemo;
