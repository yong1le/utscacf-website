import Image from "next/image";
import React from "react";
import Facebook from "../components/handles/Facebook";
import Instagram from "./handles/Instagram";
import Email from "./handles/Email";

const Profile = ({
  name,
  roles,
  handles,
  image,
}: {
  name: string;
  roles: Array<string>;
  handles: { Facebook: string; Instagram: string; Email: string };
  image: string;
}) => {
  return (
    <div className="flex flex-col pt-6">
      <div className="h-[400px] md:h-[230px] lg:h-[250px] relative">
        <Image
          src={image}
          alt={`Picture of ${name}`}
          layout="full"
          fill={true}
          className="rounded-2xl object-cover"
        />
      </div>
      <p className="pt-6 text-xl">{name}</p>
      <div className="flex flex-row gap-4">
        {roles.map((elm, i) => (
          <p key={i} className="text-slate-600">
            {elm}
          </p>
        ))}
      </div>
      <div className="pt-3 flex flex-row gap-4">
        {handles.Facebook && <Facebook href={`${handles.Facebook}`} />}
        {handles.Instagram && <Instagram href={`${handles.Instagram}`} />}
        {handles.Email && <Email href={`${handles.Email}`} />}
      </div>
    </div>
  );
};

export default Profile;
