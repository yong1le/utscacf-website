import React from "react";
import Image from "next/image";

const Img = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <Image
      src={`/assets/${src}`}
      alt={alt}
      fill={true}
      className="rounded-2xl object-cover"
    />
  );
};

export default Img;
