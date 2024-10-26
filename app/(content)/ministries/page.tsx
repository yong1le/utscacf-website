import React from "react";
import Ministry from "./_components/Ministry";
import Section from "@/components/layout/Section";
import { reader } from "@/app/_lib/reader";
import { MDXRemote } from "next-mdx-remote/rsc";
import MinistryGrid from "./_components/MinistryGrid";
import { text } from "@/app/_lib/textComponents";

const MinistriesPage = async () => {
  const ministryPage = await reader().singletons.ministry.read();

  return (
    <Section>
      {ministryPage && (
        <MDXRemote
          source={await ministryPage.content()}
          components={{
            Ministry: Ministry,
            MinistryGrid: MinistryGrid,
            ...text,
          }}
        />
      )}
    </Section>
  );
};

export default MinistriesPage;
