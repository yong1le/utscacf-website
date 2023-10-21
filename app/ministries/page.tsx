import React from "react";
import Event from "../components/Event";
import events from "@/public/data/ministries.json"
import FadeIn from "../components/FadeIn";

const Ministries = () => {
  return (
    <div>
      <div className="page-width section bg-beige">
        <h1 className="responsive-title"> Ministries</h1>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          {events.map((elm, i) => (
            <FadeIn key={i} direction="bot">
              <Event
                name={elm.name}
                image={elm.image}
                description={elm.description}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ministries;
