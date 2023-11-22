import React from "react";
import { FaDiscord } from "react-icons/fa";

const Discord = ({ href }: { href: string }) => {
  return (
    <a className="nav-link responsive-text" href={href} target="_blank">
      <FaDiscord />
    </a>
  );
};

export default Discord;
