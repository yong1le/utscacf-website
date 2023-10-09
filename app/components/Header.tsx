"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navBar = useRef<HTMLInputElement | null>(null);

  const toggleNavBar = () => {
    if (navBar.current == null) return;
    if (navBar.current.classList.contains("hidden")) {
      navBar.current.classList.remove("hidden");
    } else {
      navBar.current.classList.add("hidden");
    }
  };

  const informationPages = [
    {
      title: "Ministries",
      url: "/ministries",
    },
    {
      title: "Committee",
      url: "/committee",
    },
    {
      title: "Join Us",
      url: "/contact",
    },
  ];

  return (
    <header className="bg-beige flex flex-row flex-wrap justify-between pt-14 pb-4 page-width">
      <div>
        <Link href="/" className="flex flex-row items-end cursor-pointer">
          <Image
            className="pb-1"
            src="/acf-logo.svg"
            alt="ACF Logo"
            width="80"
            height="80"
          />
          <p className=" font-bold text-4xl mx-3">ACF</p>
        </Link>
      </div>

      <button
        className="block self-end md:hidden nav-link pb-1"
        onClick={toggleNavBar}
      >
        <FaBars size={40} />
      </button>
      <nav
        className="pt-10 hidden basis-full md:pt-0 md:basis-auto md:flex md:flex-row md:items-end"
        ref={navBar}
      >
        <ul className="flex flex-col gap-6 md:flex-row">
          {informationPages.map((elm, i) => (
            <li key={i}>
              <Link href={elm.url} className="block nav-link responsive-text">
                {elm.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
