import React from "react";
import Instagram from "./socials/Instagram";
import Facebook from "./socials/Facebook";
import Email from "./socials/Email";
import Discord from "./socials/Discord";
import Section from "./data/Section";
import Link from "next/link";

import { LuDot } from "react-icons/lu";
import Linktree from "./socials/Linktree";

const Footer = () => {
  return (
    <Section className="bg-black !py-10 text-white sm:!min-h-0">
      <div className="mb-10 flex w-full flex-col items-start justify-around self-center border-b pb-10 text-2xl sm:flex-row sm:items-center sm:gap-2 sm:text-2xl md:text-4xl">
        <p>Faith</p>
        <LuDot className="hidden sm:block" />
        <p>Community</p>
        <LuDot className="hidden sm:block" />
        <p>Transformation</p>
      </div>
      <h3 className="text-2xl">Contact Us</h3>
      <nav className="mb-10 mt-2 flex gap-4">
        <Instagram href="https://www.instagram.com/acf.utsc/" />
        <Facebook href="https://www.facebook.com/acfutsc" />
        <Discord href="https://discord.gg/ECaymHuDRn" />
        <Email href="acf.utsc@gmail.com" />
        <Linktree href="https://linktr.ee/acf.utsc" />
      </nav>
      <p>
        See the source code
        <Link
          target="_blank"
          href="https://github.com/yong1le/utscacf-website"
          className="px-1 underline"
        >
          here
        </Link>
      </p>
    </Section>
  );
};

export default Footer;
