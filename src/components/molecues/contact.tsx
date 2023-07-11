import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start w-full h-content h-min-[150rem] ">
      <div className="flex flex-col w-1/2 h-content min-w-[20rem] mb-[3.625rem] md:mb-0 justify-between">
        <Image
          className="flex"
          src="/assets/logo.svg"
          width={50}
          height={50}
          alt="?"
        />
        <div className="md:flex flex-col hidden h-full pt-14">
          <div className="flex flex-col md:items-start w-fit items-center md:justify-start bg-[#E7E7E7] justify-center rounded-full mb-[1.5rem]">
            <p className="text-[1rem] text-[#141414] font-main px-8 py-2">
              Kup teraz &rarr;
            </p>
          </div>
          <div className="flex flex-col md:items-start w-fit items-center md:justify-start bg-transparent justify-center rounded-full border-[2px]">
            <p className="text-[1rem] text-[#E7E7E7] font-main px-8 py-2 ">
              Zaloguj się &rarr;
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-1/4">
        <p className="text-[2.25rem] ml-4 text-[#E7E7E7] font-semibold font-main">
          KONTAKT
        </p>

        <div className="flex flex-col gap-x-4 my-4 w-full pl-10 text-[1rem] text-[#E7E7E7] main-font">
          <p className="">- 737 135 890</p>
          <p className="">- e.warszawiak@bs-ms.pl</p>
        </div>
      </div>
      <div className="flex flex-col md:w-1/4">
        <p className="text-[2.25rem] ml-4 text-[#E7E7E7] font-semibold font-main">
          Social Media
        </p>

        <div className="flex flex-col gap-x-4 my-4 w-full pl-10 text-[1rem] text-[#E7E7E7] main-font mb-[2rem]">
        
        <a href="https://www.instagram.com/blvckservicems"><p className="">Instagram</p></a>
          <a href="https://www.facebook.com/bsmspl"><p className="">Facebook</p></a>
        </div>
      </div>
      <div className="flex md:hidden flex-col">
        <div className="flex flex-col md:items-start w-fit items-center md:justify-start bg-[#E7E7E7] justify-center rounded-full mb-[1.5rem]">
          <p className="text-[1rem] text-[#141414] font-main px-8 py-2">
            Kup teraz &rarr;
          </p>
        </div>
        <div className="flex flex-col md:items-start w-fit items-center md:justify-start bg-transparent justify-center rounded-full border-[2px]">
          <p className="text-[1rem] text-[#E7E7E7] font-main px-8 py-2 ">
            Zaloguj się &rarr;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
