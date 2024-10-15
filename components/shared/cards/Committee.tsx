import React from "react";
import Img from "@/components/shared/ui/Img";
import { CommitteeType } from "@/types";
import SocialIcon from "@/components/shared/buttons/SocialIcon";

const Committee = ({ name, roles, handles, image }: CommitteeType) => {
  return (
    <div className="flex flex-col pt-6">
      {/* Image */}
      <div className="relative h-[380px] md:h-[350px] lg:h-[250px] xl:h-[300px] 2xl:h-[380px]">
        <Img src={image || "/committee.svg"} alt={`image of ${name}`} />
      </div>
      {/* Name */}
      <p className="pt-6 text-xl">{name}</p>
      {/* Roles */}
      <div className="flex flex-row gap-4">
        {roles.map((elm, i) => (
          <p key={i} className="text-slate-600">
            {elm}
          </p>
        ))}
        {/* Handles */}
      </div>
      <div className="flex flex-row gap-4 pt-3">
        {handles.map((elm, i) => (
          <SocialIcon
            key={i}
            provider={elm.provider}
            href={elm.href}
            variant="default"
          />
        ))}
      </div>
    </div>
  );
};

export default Committee;
