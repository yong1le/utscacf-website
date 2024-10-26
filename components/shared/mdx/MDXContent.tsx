import React from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const MDXContent = async ({
  source,
  components,
}: {
  source: string;
  components?: any;
}) => {
  const { default: Component } = await evaluate(source, runtime);

  return (
    <>{components ? <Component components={components} /> : <Component />}</>
  );
};

export default MDXContent;
