import Link from "next/link";
import React from "react";

interface NavBarButtonItems {
  active: boolean;
  name: string;
  innerRef: React.RefObject<HTMLDivElement>;
  href: string;
}

const NavBarButton = (props: NavBarButtonItems) => {
  const dropdownRefs = {
    mainButton: React.useRef<HTMLButtonElement>(null),
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-end items-center w-content px-4 h-full p-3"
        ref={props.innerRef}
      >
        <button
          ref={dropdownRefs.mainButton}
          onClick={() => {
            window.location.href = props.href;
          }}
          className={`flex flex-row justify-center items-center rounded-md w-full`}
        >
          {}
          <h3 className="text-md font-bold text-[#E7E7E7] block">
            {props.name}
          </h3>
        </button>
      </div>
    </>
  );
};
export default NavBarButton;
