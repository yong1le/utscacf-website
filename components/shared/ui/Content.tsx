import { reader } from "@/app/_lib/reader";
import Text from "@/components/shared/ui/Text";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

const Content = async ({ slug }: { slug: string }) => {
  const content = await reader().collections.content.read(slug);

  return (
    <div>
      <Text variant="h1" className="font-bold">
        {content?.title}
      </Text>

      <Text variant="p">
        {content && <MDXRemote source={await content.content()} />}
      </Text>
    </div>
  );
};

export default Content;
