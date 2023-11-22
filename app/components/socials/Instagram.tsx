import React from "react";
import { FaInstagram } from "react-icons/fa";

const Instagram = ({ href }: { href: string }) => {
  return (
    <a className="nav-link responsive-text" href={href} target="_blank">
      <FaInstagram />
    </a>
  );
};

export default Instagram;
