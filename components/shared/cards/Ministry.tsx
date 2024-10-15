import React from "react";
import Img from "@/components/shared/ui/Img";
import { MinistryType } from "@/types";

const Ministry = async ({ name, image, description }: MinistryType) => {
  return (
    <div>
      <div className="relative h-[300px] w-[100%] md:h-[400px] xl:h-[300px]">
        <Img src={image || "/ministry.png"} alt={`Image of ${name}`} />
      </div>
      <p className="pt-6 text-2xl">{name}</p>
      <div>{description}</div>
    </div>
  );
};

export default Ministry;
