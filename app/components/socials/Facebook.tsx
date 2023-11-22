import React from "react";
import { FaFacebook } from "react-icons/fa";

const Instagram = ({ href }: { href: string }) => {
  return (
    <a className="nav-link responsive-text" href={href} target="_blank">
      <FaFacebook />
    </a>
  );
};

export default Instagram;
