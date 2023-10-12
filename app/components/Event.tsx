import React from "react";
import ImageWrapper from "./ImageWrapper";

const Event = ({ name, image, description }: MeetingEvent) => {
  return (
    <div className="">
      <div className="relative h-[300px] w-[100%]  md:h-[400px] xl:h-[500px]">
        <ImageWrapper image={image} alt={`Image of ${name}`} />
      </div>
      <p className="pt-6 text-2xl">{name}</p>
      {description.map((p, i) => (
        <p key={i} className="text-slate-600">{p}</p>
      ))}
    </div>
  );
};

export default Event;
