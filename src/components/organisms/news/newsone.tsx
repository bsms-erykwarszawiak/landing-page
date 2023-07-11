import React from "react";
import Image from 'next/image'
const NewsOne = () => {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      <div>
        <p className="px-8 pt-8 text-[2rem] text-[#FFFFFF] opacity-70 mb-[1rem] font-main">
          01.07.2023
        </p>
      </div>
      <div className="flex flex-col md:flex-row  w-full h-full">
        <div className="flex flex-col  w-full h-full">
          <p className="px-8 text-[2rem] font-semibold text-white mb-[1rem] font-main">
            Opublikowanie strony <a href="https://butikowo.shop">butikowo.shop</a>
          </p>
          <div className="flex bg-white justify-center items-center min-h-36 h-36 w-full md:ml-[2rem] md:w-[90%] border-b-[10px] border-black">
            <Image src="/assets/butikowo.png" width={350} height={150} alt="butikowo"  />
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <p className="px-8 py-4 text-[1rem] text-[#E7E7E7] mb-[1rem] font-main">
            Z wielką przyjemnością pragniemy zaprosić Cię do odwiedzenia strony
            internetowej Butikowo.shop, która powstała specjalnie na zlecenie
            naszego klienta. Przedstawiamy Ci wyjątkowe miejsce, w którym pasja
            do mody spotyka się z doskonałością w obszarze stylistyki.
            Butikowo.shop to wirtualny butik, który przenosi Cię w świat
            niepowtarzalnej elegancji i wyrafinowanego stylu. Każdy element
            strony został starannie zaprojektowany, aby zapewnić Ci
            niezapomniane doświadczenie zakupowe. Od pierwszego spojrzenia,
            zachwycająca estetyka i harmonijna kompozycja elementów wzbudzają
            zachwyt.
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

export default NewsOne;
