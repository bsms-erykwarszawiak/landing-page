import React from "react";
import GoldPackage from "@/components/molecues/goldpackage";
import SilverPackage from "@/components/molecues/silverpackage";

const Standard = () => {
  return (
    <div className="flex items-center justify-center w-full">
    
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-8 w-full md:w-1/2 items-center justify-between">
            <SilverPackage />
            <GoldPackage />
        </div>
    </div>
  );
}

export default Standard;
