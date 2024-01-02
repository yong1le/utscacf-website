import React from "react";
import Facebook from "../socials/Facebook";
import Instagram from "../socials/Instagram";
import Email from "../socials/Email";
import Img from "../Img";
import { CommitteeType } from "@/types";

const Committee = ({ name, roles, handles, image }: CommitteeType) => {
  return (
    <div className="flex flex-col pt-6">
      {/* Image */}
      <div className="relative h-[380px] sm:h-[500px] md:h-[350px] lg:h-[250px] xl:h-[300px] 2xl:h-[380px]">
        <Img src={image || "/"} alt={`image of ${name}`} />
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
        {handles.facebook && <Facebook href={`${handles.facebook}`} />}
        {handles.instagram && <Instagram href={`${handles.instagram}`} />}
        {handles.email && <Email href={`${handles.email}`} />}
      </div>
    </div>
  );
};

export default Committee;
