import React from "react";
import Committee from "@/components/shared/cards/Committee";
import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";
import { reader } from "@/app/_lib/reader";
import Content from "@/components/shared/ui/Content";

const CommitteePage = async () => {
  const committees = await reader().collections.committee.all();

  return (
    <div>
      <Section className="bg-beige">
        <Content slug="committee" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {committees &&
            committees.map((elm, i) => (
              <Committee
                key={i}
                name={elm.entry.name}
                roles={elm.entry.roles}
                handles={elm.entry.handles}
                image={elm.entry.image}
              />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default CommitteePage;
