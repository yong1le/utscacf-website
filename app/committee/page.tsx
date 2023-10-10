import React from "react";
import Profile from "../components/Profile";

const Committee = () => {
  const members = [
    {
      name: "Morgan Huang",
      roles: ["Worship Coordinator"],
      image: "/random.jpg",
      handles: {
        Facebook: "https://www.facebook.com/acfutsc/",
        Instagram: "",
        Email: "",
      },
    },
    {
      name: "Matthew Leung",
      roles: ["Vice Chair", "Small Group Coordinator"],
      image: "/random-2.jpg",
      handles: {
        Facebook: "",
        Instagram: "https://www.instagram.com/acf.utsc/",
        Email: "acf.utsc@gmail.com",
      },
    },
    {
      name: "Joshua Siu",
      roles: ["Secretary", "Treasurer"],
      image: "/random-3.webp",
      handles: {
        Facebook: "https://www.facebook.com/acfutsc/",
        Instagram: "https://www.instagram.com/acf.utsc/",
        Email: "acf.utsc@gmail.com",
      },
    },
    {
      name: "Joanne Lee",
      roles: ["Chair"],
      image: "/random-4.jpg",
      handles: {
        Facebook: "",
        Instagram: "",
        Email: "",
      },
    },
  ];

  return (
    <div>
      <div className="page-width section bg-beige">
        <h1 className="responsive-title">Committee Team</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((elm, i) => (
            <Profile
              key={i}
              name={elm.name}
              roles={elm.roles}
              handles={elm.handles}
              image={elm.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
