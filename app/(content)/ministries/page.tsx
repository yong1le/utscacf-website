import React from "react";
import Ministry from "@/components/shared/cards//Ministry";
import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";
import { reader } from "@/app/_lib/reader";

const MinistriesPage = async () => {
  const ministries = await reader().collections.ministry.all();

  return (
    <div>
      <Section className="bg-beige">
        <Text variant="h1" className="font-bold">
          Ministries
        </Text>
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
    </div>
  );
};

export default MinistriesPage;
