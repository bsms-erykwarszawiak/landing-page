import React from "react";
import NavBarContent from "../molecues/navbarcontent";

function SliderMobile() {
  return (
    <div className={`hidden absolute z-50 top-0 right-0 w-3/4 h-screen bg-black pt-10`}>
        <div className="flex w-full flex-col items-center justify-center">
          <NavBarContent />
        </div>
        <div className="flex w-full items-center justify-center flex-row pt-4">
          <div className="flex flex-row justify-end items-center w-content px-4 h-full border-[1px] border-[#E7E7E7] rounded-full p-3">
            <button
              onClick={() => {
                window.location.href = "https://app.bs-ms.pl/";
              }}
              className={`flex flex-row justify-center items-center rounded-md  w-full`}
            >
              {}
              <h3 className="text-md font-bold text-[#E7E7E7] block">
                Zaloguj się
              </h3>
            </button>
          </div>
        </div>
    </div>
  );
}

export default SliderMobile;
