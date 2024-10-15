import React from "react";
import Ministry from "@/components/shared/cards//Ministry";
import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";

const MinistriesPage = async () => {
  const ministries = [
    {
      name: "Weekly Fellowship Meetings",
      image: null,
      description:
        "The main fellowship meeting for ACF. We meet every Wednesday from 5:00pm-7:00pm. Rooms TBA.",
    },
    {
      name: "Small Groups",
      image: null,
      description:
        "Smaller groups of 4-6 people that meet weekly outside of normal fellowship times.",
    },
    {
      name: "JAW Week",
      image: null,
      description: "TBD",
    },
  ];

  return (
    <div>
      <Section className="bg-beige">
        <Text variant="h1"> Ministries</Text>
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-2 xl:gap-8">
          {ministries &&
            ministries.map((elm, i) => (
              <Ministry
                key={i}
                name={elm.name}
                image={elm.image}
                description={elm.description}
              />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default MinistriesPage;
