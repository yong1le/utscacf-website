import React from "react";
import Section from "@/components/layout/Section";
import { reader } from "@/app/_lib/reader";
import { MDXRemote } from "next-mdx-remote/rsc";

import Committee from "./_components/Committee";
import CommitteeGrid from "./_components/CommitteeGrid";

import { text } from "@/app/_lib/textComponents";

const CommitteePage = async () => {
  const committeePage = await reader().singletons.committee.read();

  return (
    <Section className="">
      {committeePage && (
        <MDXRemote
          source={await committeePage.content()}
          // eslint-disable-next-line
          components={{
            Committee: Committee,
            CommitteeGrid: CommitteeGrid,
            ...text,
          }}
        />
      )}
    </Section>
  );
};

export default CommitteePage;
