import React from "react";
import Committee from "@/components/shared/cards/Committee";
import Section from "@/components/layout/Section";
import { CommitteeType } from "@/types";
import Text from "@/components/shared/ui/Text";

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
        <Text variant="h1">Committee Team</Text>
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