"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    setNavBar(!navBar);
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
    <header className="page-width flex flex-row flex-wrap justify-between bg-beige pb-4 pt-14">
      <div>
        <Link href="/" className="flex cursor-pointer flex-row items-end">
          <Image
            className="h-auto max-w-full pb-1"
            src="/acf-logo.svg"
            alt="ACF Logo"
            width="80"
            height="80"
          />
          <p className=" mx-3 text-4xl font-bold">ACF</p>
        </Link>
      </div>

      <button
        className="nav-link block self-end pb-1 md:hidden"
        onClick={toggleNavBar}
      >
        <FaBars size={40} />
      </button>
      <nav
        className={`${
          navBar ? "max-h-screen" : "invisible max-h-0 opacity-0"
        } basis-full pt-10 transition-all md:visible md:static md:flex md:max-h-screen md:basis-auto md:translate-y-0 md:flex-row md:items-end md:pt-0 md:opacity-100`}
      >
        <ul className="flex flex-col gap-6 md:flex-row">
          {informationPages.map((elm, i) => (
            <li key={i}>
              <Link href={elm.url} className="nav-link responsive-text block">
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
