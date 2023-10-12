import React from "react";
import Image from "next/image";

const ImageWrapper = ({ image, alt }: { image: string, alt: string }) => {
  return (
    <Image
      src={`/assets/${image}`}
      alt={alt}
      fill={true}
      className="rounded-2xl object-cover"
    />
  );
};

export default ImageWrapper;
