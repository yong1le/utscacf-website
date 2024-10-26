import React from "react";
import Ministry from "@/components/shared/cards//Ministry";
import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";
import { reader } from "@/app/_lib/reader";
import Content from "@/components/shared/ui/Content";

const MinistriesPage = async () => {
  const ministries = await reader().collections.ministry.all();

  return (
    <Section className="bg-beige">
      <Content slug="ministry" />
      <div className="grid grid-cols-1 gap-16 xl:grid-cols-2 xl:gap-8">
        {ministries &&
          ministries.map((elm, i) => (
            <Ministry
              key={i}
              name={elm.entry.name}
              image={elm.entry.image}
              description={elm.entry.description}
            />
          ))}
      </div>
    </Section>
  );
};

export default MinistriesPage;
