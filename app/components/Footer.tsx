import React from "react";
import Instagram from "./socials/Instagram";
import Facebook from "./socials/Facebook";
import Email from "./socials/Email";
import Discord from "./socials/Discord";
import Section from "./data/Section";

const Footer = () => {
  return (
    <Section className="bg-black !py-10 text-white sm:!min-h-0">
      <h3 className="text-2xl">Contact Us</h3>
      <nav className="mb-10 mt-2 flex gap-4">
        <Instagram href="https://www.instagram.com/acf.utsc/" />
        <Facebook href="https://www.facebook.com/acfutsc" />
        <Discord href="https://discord.gg/ECaymHuDRn" />
        <Email href="acf.utsc@gmail.com" />
      </nav>
      <p>Made with React, Next, Tailwind CSS, and ❤️</p>
    </Section>
  );
};

export default Footer;
