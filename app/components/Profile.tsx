import React from "react";
import Facebook from "../components/handles/Facebook";
import Instagram from "./handles/Instagram";
import Email from "./handles/Email";
import ImageWrapper from "./ImageWrapper";

const Profile = ({ name, roles, handles, image }: CommMember) => {
  return (
    <div className="flex flex-col pt-6">
      {/* Image */}
      <div className="relative h-[300px] md:h-[230px] lg:h-[250px]">
        <ImageWrapper image={image} alt={`image of ${name}`} />
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
        {handles.Facebook && <Facebook href={`${handles.Facebook}`} />}
        {handles.Instagram && <Instagram href={`${handles.Instagram}`} />}
        {handles.Email && <Email href={`${handles.Email}`} />}
      </div>
    </div>
  );
};

export default Profile;
