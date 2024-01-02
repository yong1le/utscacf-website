import React from "react";
import Committee from "../../components/data/Committee";
import Section from "../../components/data/Section";

import keystaticConfig from "../../../keystatic.config";
import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), keystaticConfig);
const CommitteePage = async () => {
  const committee = await reader.collections.committee.all();

  return (
    <div>
      <Section className="bg-beige">
        <h1 className="responsive-title">Committee Team</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {committee && committee.map((elm, i) => (
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
