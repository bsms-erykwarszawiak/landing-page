import React from "react";
import NavBarContent from "@/components/molecues/navbarcontent";
import Image from "next/image";

function FooterBar() {
  return (
    <div className="flex flex-col md:w-full border-t-2 border-t-black">      
      <div className="flex flex-row w-content items-center justify-center md:mx-28 text-[#E7E7E7] font-main">
        <p className="text-sm">© Blvck Service & Management Systems 2023</p>
      </div>
    </div>
  );
}

export default FooterBar;
