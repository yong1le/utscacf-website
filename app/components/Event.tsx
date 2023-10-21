import React from "react";
import Img from "./Img";

const Event = ({ name, image, description }: MeetingEvent) => {
  return (
    <div className="">
      <div className="relative h-[300px] w-[100%]  md:h-[400px] xl:h-[500px]">
        <Img src={image} alt={`Image of ${name}`} />
      </div>
      <p className="pt-6 text-2xl">{name}</p>
      {/* {description.map((p, i) => ( */}
        <p className="text-slate-600">{description}</p>
      {/* ))} */}
    </div>
  );
};

export default Event;
