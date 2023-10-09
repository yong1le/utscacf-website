import React from "react";
import Instagram from "./handles/Instagram";
import Facebook from "./handles/Facebook"
import Email from "./handles/Email";

const Footer = () => {
  return (
    <footer className="bg-black text-white page-width flex flex-col justify-center  py-10">
      <h3 className="text-2xl">Contact Us</h3>
      <nav className="mb-10 mt-2 flex gap-4">
        <Instagram href="https://www.instagram.com/acf.utsc/"/>
        <Facebook href="https://www.facebook.com/acfutsc"/>
        <Email href="acf.utsc@gmail.com"/>
      </nav>
      <p>Made with React, Next, Tailwind CSS, and ❤️</p>
    </footer>
  );
};

export default Footer;
