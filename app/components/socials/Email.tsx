import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Email = ({ href }: { href: string }) => {
  return (
    <a className="nav-link responsive-text" href={`mailto: ${href}`}>
      <FaEnvelope />
    </a>
  );
};

export default Email;
