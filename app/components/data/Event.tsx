import { EventType } from "@/types";
import Link from "next/link";
import Img from "../Img";

const Event = ({ name, image, link, description }: EventType) => {
  return (
    <div className="m-3 transition-all hover:scale-105">
      <div className="relative h-[250px] w-full bg-opacity-0 sm:h-[300px] md:h-[400px]">
        <Link href={link} target="_blank">
          <Img src={image || "/"} alt="event Image" />
        </Link>
        <div className="absolute bottom-0 w-full bg-black/70 p-5">
          <p className="text-2xl">{name}</p>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Event;
