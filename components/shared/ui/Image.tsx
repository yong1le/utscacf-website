import React from "react";
import NextImage from "next/image";

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <NextImage
      src={`${src}`}
      alt={alt}
      fill={true}
      className="rounded-2xl object-cover"
    />
  );
};

export default Image;
