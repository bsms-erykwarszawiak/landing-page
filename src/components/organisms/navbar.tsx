import React from "react";
import Image from "next/image";
import NavBarLogo from "@/components/atoms/navbarlogo";
import NavBarContent from "@/components/molecues/navbarcontent";
const Navbar = () => {
  return (
    <div className="flex flex-row h-[6rem] w-full justify-center items-center border-b-2 border-b-black sticky top-0 z-50 text-white bg-black pl-2">
      <div className="flex flex-row w-full md:w-1/2 p-4">
        <NavBarLogo />
        <p className="flex md:hidden font-bold w-full text-sm">Blvck Service & Management Systems - Twój partner w zarządzaniu firmą</p>
      </div>
      <div className="hidden md:flex w-1/2 items-end justify-end flex-row md:gap-x-8 pr-3">
        <NavBarContent />
      </div>
      <div className="hidden md:flex w-1/3 items-center justify-center flex-row>">
      <div
        className="flex flex-row justify-end items-center w-content px-4 h-full border-[1px] border-[#E7E7E7] rounded-full p-3"
      >
        <button
          onClick={() => {
            window.location.href = "https://app.bs-ms.pl/";
          }}
          className={`flex flex-row justify-center items-center rounded-md  w-full`}
        >
          {}
          <h3 className="text-md font-bold text-[#E7E7E7] hidden md:block">
            Zaloguj się
          </h3>
        </button>
      </div>
      </div>
      <div className="hidden w-1/2 items-end justify-end flex-row md:gap-x-8 pr-3">
        <Image
          className="hidden justify-end items-end"
          src="/assets/hamburger.svg"
          width={50}
          height={50}
          alt="hambur"
        />
      </div>
    </div>
  );
};

export default Navbar;
