import React from "react";
import ImageWrapper from "../components/ImageWrapper";
import Event from "../components/Event";

// Weekly meetings, small groups
const events = [
  {
    name: "Weekly Meetings",
    image: "weekly-felly.jpg",
    description: [
      `The main fellowship meeting for ACF. We meet every Wednesday from
            5:00pm-7:00pm. Please add more...`,
    ],
  },
  {
    name: "Small Groups",
    image: "small-group.avif",
    description: [
      `Smaller groups of 4-6 people that meet weekly outside of normal
      fellowship times. Please add more...`,
    ],
  },
];

const Ministries = () => {
  return (
    <div>
      <div className="page-width section bg-beige">
        <h1 className="responsive-title"> Ministries</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {events.map((elm, i) => (
            <Event
              key={i}
              name={elm.name}
              image={elm.image}
              description={elm.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ministries;
