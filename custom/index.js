import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const NavbarSub = () => {
  const navLinks = [
    { name: "Chair", href: "/chair" },
    { name: "Shelf", href: "/product" },
    { name: "Bed", href: "/bed" },
    { name: "Sofa", href: "/sofa" },
    { name: "Coffea Table", href: "/coffea" },
    { name: "Consoles", href: "/consoles" },
  ];
  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <Link href={link.href} key={index}>
            <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
              {link.name}
            </li>
          </Link>
        );
      })}
    </>
  );
};
