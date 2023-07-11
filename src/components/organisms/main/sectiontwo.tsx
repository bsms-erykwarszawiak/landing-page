import React from "react";
import Image from "next/image";

function SectionTwo() {
  return (
    <div className="flex flex-col justify-start items-start w-full ">
      <hr className="w-[10rem] h-1 my-8 bg-[#141414] border-0"></hr>
      <div className="flex flex-col items-start justify-start w-full h-content h-min-[150rem]">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="flex flex-col md:w-4/5 h-fit min-w-[20rem] md:pt-[2rem]">
            <p className="text-[2rem] md:text-[3rem] font-semibold text-black mb-[1.5rem] font-main">
              Dlaczego warto wybrać nas?
            </p>
          </div>
          <div className="flex flex-col md:w-4/5 h-content mb-[2rem] md:pt-[2rem] md:justify-center">
            <p className="text-[1rem] font-main font-normal">
              Wybierając naszą firmę, otrzymujesz gwarancję perfekcji w każdym
              szczególe. Nasze arcydzieła są owocem najwyższej jakości
              wykonania, staranności w każdym detalu i pasji do doskonałości.
              Jesteśmy mistrzami rzemiosła, którzy nieustannie dążą do
              zapewnienia najwyższej jakości produktów, które spełnią
              oczekiwania nawet najbardziej wymagających klientów.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 w-full">
          <hr className="w-full h-[1px] my-8 bg-[#ADADAD] border-0 md:hidden"></hr>
          <div className="flex flex-col md:pb-10">
            <div className="flex flex-row gap-x-4 mb-[2rem] w-11/12">
              <Image
                src="/assets/guarantee.svg"
                width={50}
                height={50}
                alt="guarantee"
              />
              <p className="text-[1.25rem] font-semibold font-main">
                Gwarancja jakości wykonania
              </p>
            </div>
            <div className="flex w-full">
              <p className="md:hidden text-[1rem] font-main font-normal">
                W naszych rękach tkwi sztuka precyzji, która kształtuje każdy
                element naszych produktów. Każdy kształt, linia i detale są
                starannie dopracowane, by stworzyć arcydzieło, które zachwyca
                zmysły i trwa wieczność.
              </p>
              <p className="hidden md:flex text-[1rem] font-main font-normal md:w-1/2">
                W naszych rękach tkwi sztuka precyzji, która kształtuje każdy
                element naszych produktów. Każdy kształt, linia i detale są
                starannie dopracowane, by stworzyć arcydzieło, które zachwyca
                zmysły i trwa wieczność. Nasza pasja do doskonałości towarzyszy
                nam na każdym etapie tworzenia, od koncepcji do finalnego
                wcielenia.
              </p>
            </div>
            <div className="flex md:hidden flex-col md:w-4/5 items-start md:justify-start justify-center">
              <p className=" rounded-full py-2 px-8 bg-black text-[#E7E7E7] mt-4 font-main">
                Czytaj Dalej &rarr;
              </p>
            </div>
          </div>
          <hr className="w-full h-[1px] my-8 bg-[#ADADAD] border-0 md:hidden"></hr>
          <div className="flex flex-col md:pb-10">
            <div className="flex flex-row gap-x-4 mb-[2rem] w-11/12">
              <Image
                src="/assets/glassfile.svg"
                width={50}
                height={50}
                alt="glassfile"
              />
              <p className="text-[1.25rem] font-semibold font-main">
                Niezawodna naprawa błedów
              </p>
            </div>
            <div className="flex w-full">
              <p className="md:hidden text-[1rem] font-main font-normal">
                Jeśli dotarłeś do nas z obawami związanymi z niedoskonałościami
                wykonania przez inną firmę, to właśnie tutaj znajdziesz
                rozwiązanie.
              </p>
              <p className="hidden md:flex text-[1rem] font-main font-normal md:w-1/2">
                Jeśli dotarłeś do nas z obawami związanymi z niedoskonałościami
                wykonania przez inną firmę, to właśnie tutaj znajdziesz
                rozwiązanie. Nasze umiejętności oraz zaangażowanie pozwalają nam
                na przeprowadzenie niezbędnych poprawek z niebywałą precyzją i
                profesjonalizmem.
              </p>
            </div>
            <div className="flex md:hidden flex-col md:w-4/5 items-start md:justify-start justify-center">
              <p className=" rounded-full py-2 px-8 bg-black text-[#E7E7E7] mt-4 font-main">
                Czytaj Dalej &rarr;
              </p>
            </div>
          </div>
          <hr className="w-full h-[1px] my-8 bg-[#ADADAD] border-0 md:hidden"></hr>
          <div className="flex flex-col md:pb-10">
            <div className="flex flex-row gap-x-4 mb-[2rem] w-11/12">
              <Image
                src="/assets/chart.svg"
                width={50}
                height={50}
                alt="chart"
              />
              <p className="text-[1.25rem] font-semibold font-main">
                Poprawa pozycjonowania (SEO)
              </p>
            </div>
            <div className="flex w-full">
              <p className="md:hidden text-[1rem] font-main">
                W dzisiejszej erze cyfrowej, w której konkurencja jest zacięta,
                właściwe pozycjonowanie Twojej strony internetowej jest
                nieodzownym elementem osiągnięcia sukcesu. Doskonale zdajemy
                sobie sprawę, jak istotne jest to dla wzrostu Twojego biznesu
                online.
              </p>
              <p className="hidden md:flex text-[1rem] font-main font-normal md:w-1/2">
                W dzisiejszej erze cyfrowej, w której konkurencja jest zacięta,
                właściwe pozycjonowanie Twojej strony internetowej jest
                nieodzownym elementem osiągnięcia sukcesu. Doskonale zdajemy
                sobie sprawę, jak istotne jest to dla wzrostu Twojego biznesu
                online. Dlatego oferujemy Ci nasze niezrównane umiejętności w
                dziedzinie optymalizacji SEO, które przekształcą Twoją stronę w
                wirtualnego lidera.
              </p>
            </div>
            <div className="flex md:hidden flex-col md:w-4/5 items-start md:justify-start justify-center">
              <p className=" rounded-full py-2 px-8 bg-black text-[#E7E7E7] mt-4 font-main">
                Czytaj Dalej &rarr;
              </p>
            </div>
          </div>
          <hr className="w-full h-[1px] my-8 bg-[#ADADAD] border-0 md:hidden"></hr>
          <div className="flex flex-col md:pb-10">
            <div className="flex flex-row gap-x-4 mb-[2rem] w-11/12">
              <Image
                src="/assets/danger.svg"
                width={50}
                height={50}
                alt="danger"
              />
              <p className="text-[1.25rem] font-semibold font-main">
                Zabezpieczenia stron i aplikacji
              </p>
            </div>
            <div className="flex w-full">
              <p className="md:hidden text-[1rem] font-main">
                W erze cyfrowej, pełnej niebezpieczeństw i ataków, nie ma
                miejsca na kompromisy w kwestii bezpieczeństwa. Nasze
                niezrównane umiejętności i doświadczenie pozwalają nam stworzyć
                twierdzę, która chroni Twoją stronę lub aplikację przed każdym
                potencjalnym zagrożeniem.
              </p>
              <p className="hidden md:flex text-[1rem] font-main font-normal md:w-1/2">
                W erze cyfrowej, pełnej niebezpieczeństw i ataków, nie ma
                miejsca na kompromisy w kwestii bezpieczeństwa. Nasze
                niezrównane umiejętności i doświadczenie pozwalają nam stworzyć
                twierdzę, która chroni Twoją stronę lub aplikację przed każdym
                potencjalnym zagrożeniem. W każdym naszym działaniu kładziemy
                nacisk na najwyższy poziom ochrony. Analizujemy potencjalne luki
                w zabezpieczeniach, badamy możliwe ataki i tworzymy strategiczne
                plany obronne, które gwarantują nienaruszalność Twojej witryny
                lub aplikacji,
              </p>
            </div>
            <div className="flex md:hidden flex-col md:w-4/5 items-start md:justify-start justify-center">
              <p className=" rounded-full py-2 px-8 bg-black text-[#E7E7E7] mt-4 font-main">
                Czytaj Dalej &rarr;
              </p>
            </div>
          </div>
        </div>

        {/* <Image className='flex md:hidden' src="/assets/try.svg" width={300} height={100} alt="?" /> */}
      </div>
    </div>
  );
}

export default SectionTwo;
