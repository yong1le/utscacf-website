import React from "react";
import Image from "@/components/shared/ui/Image";
import { MinistryType } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";

const Ministry = async ({ name, image, description }: MinistryType) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-[300px] w-[100%] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
        <Image src={image || "/ministry.png"} alt={`Image of ${name}`} />
      </div>
      <div>
        <p className="text-2xl font-bold">{name}</p>
        <MDXRemote source={await description()} />
      </div>
    </div>
  );
};

export default Ministry;
