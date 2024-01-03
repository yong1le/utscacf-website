"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Section from "./data/Section";

const Header = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleNavBar = () => {
    setNavBarVisible(!navBarVisible);
  };

  useEffect(() => {
    function handleHideHeader() {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        setHeaderVisible(true);
        return;
      }

      const isScrollingDown = currentScrollPos > prevScrollPos;
      const scrollDelta = Math.abs(currentScrollPos - prevScrollPos);

      if (scrollDelta > 10) {
        setHeaderVisible(!isScrollingDown);
      }
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleHideHeader);

    return () => window.removeEventListener("scroll", handleHideHeader);
  }, [prevScrollPos]);

  const informationPages = [
    {
      title: "Ministries",
      url: "/home/ministries",
    },
    {
      title: "Committee",
      url: "/home/committee",
    },
    {
      title: "Join Us",
      url: "/home/contact",
    },
  ];

  return (
    <Section
      className={`sticky top-0 z-50 w-full !flex-row flex-wrap items-end
      !justify-between bg-beige !pb-5 !pt-10 transition-all duration-700 sm:!min-h-0
      ${!headerVisible && "translate-y-[-200px]"}
      `}
    >
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
      <div className="relative basis-full md:basis-auto">
        <nav
          className={`${
            navBarVisible
              ? "absolute right-0 z-50 mt-10 max-h-screen rounded-xl bg-orange-100 px-5 py-2"
              : "hidden max-h-0"
          }  md:static md:flex md:max-h-screen md:flex-row md:items-end md:bg-beige md:pt-0`}
        >
          <ul className="flex flex-col gap-6 md:flex-row">
            {informationPages.map((elm, i) => (
              <li key={i}>
                <Link
                  href={elm.url}
                  className="nav-link responsive-text block"
                  onClick={() => setNavBarVisible(false)}
                >
                  {elm.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Section>
  );
};

export default Header;
