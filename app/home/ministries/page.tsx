import React from "react";
import Ministry from "../../components/data/Ministry";
import Section from "../../components/data/Section";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);
const MinistriesPage = async () => {
  const ministries = await reader.collections.ministry.all();

  return (
    <div>
      <Section className="bg-beige">
        <h1 className="responsive-title"> Ministries</h1>
        <div className="grid grid-cols-1 gap-16 xl:gap-8 xl:grid-cols-2">
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
