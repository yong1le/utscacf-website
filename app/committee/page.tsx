import React from "react";
import Profile from "../components/Profile";
import committee from "@/public/data/committee.json";
import FadeIn from "../components/FadeIn";

const Committee = async () => {
  return (
    <div>
      <div className="page-width section bg-beige">
        <h1 className="responsive-title">Committee Team</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {committee.map((elm, i) => (
            <FadeIn key={i} direction="bot">
              <Profile
                name={elm.name}
                roles={elm.roles}
                handles={elm.handles}
                image={elm.image}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
