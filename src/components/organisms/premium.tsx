import React from "react";
import RubyPackage from "@/components/molecues/rubypackage";
import EmeraldPackage from "@/components/molecues/emeraldpackage";
import DiamondPackage from "@/components/molecues/diamondpackage";

const Premium = () => {
  return (
    <div className="flex items-center justify-center w-full">
    
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 grid-cols-1 gap-8 w-full md:w-3/4 items-center justify-between">
            <RubyPackage />
            <EmeraldPackage />
            <DiamondPackage />
        </div>
    </div>
  );
}

export default Premium;
