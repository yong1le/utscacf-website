import React from "react";
import Committee from "@/components/data/Committee";
import Section from "@/components/data/Section";
import { CommitteeType } from "@/types";

const CommitteePage = async () => {
  const committee: CommitteeType[] = [
    {
      name: "Yong Le",
      roles: ["Admin"],
      handles: [
        {
          provider: "facebook",
          href: "www.google.com",
        },
      ],
      image: null,
    },
  ];

  return (
    <div>
      <Section className="bg-beige">
        <h1 className="responsive-title">Committee Team</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {committee &&
            committee.map((elm, i) => (
              <Committee
                key={i}
                name={elm.name}
                roles={elm.roles}
                handles={elm.handles}
                image={elm.image}
              />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default CommitteePage;
