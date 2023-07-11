import React, { useRef } from "react";
import NavBarButton from "@/components/atoms/navbarbutton";

interface navItem {
  name: string;
  href: string;
  enabled: boolean;
}
function NavBarContent() {
  const refs = {
    navBarItem: {
      all: useRef<HTMLDivElement>(null),
    },
  };

  const repairsItems: navItem[] = [
    {
      name: "Aktualności",
      href: "/news",
      enabled: true,
    },
    {
      name: "O programie",
      href: "/program",
      enabled: true,
    },
    {
      name: "Usługi",
      href: "/products",
      enabled: true,
    }
  ];
  return (
    <>
      {repairsItems.map((item, index) => {
        return (
          <NavBarButton
            key={index}
            name={item.name}
            href={item.href}
            innerRef={refs.navBarItem.all}
            active={false}
          />
        );
      })}
    </>
  );
}

export default NavBarContent;
