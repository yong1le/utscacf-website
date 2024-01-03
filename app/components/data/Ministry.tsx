import React from "react";
import Img from "../Img";
import { MinistryType } from "@/types";
import { DocumentRenderer } from "@keystatic/core/renderer";

const Ministry = async ({ name, image, description }: MinistryType) => {
  return (
    <div>
      <div className="relative h-[300px] w-[100%] md:h-[400px] xl:h-[300px]">
        <Img src={image || "/acf-logo.svg"} alt={`Image of ${name}`} />
      </div>
      <p className="pt-6 text-2xl">{name}</p>
      <DocumentRenderer document={await description()} />
    </div>
  );
};

export default Ministry;
