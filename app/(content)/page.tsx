import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";
import { reader } from "@/app/_lib/reader";

import Content from "@/components/shared/ui/Content";
import MDXContent from "@/components/shared/mdx/MDXContent";

export default async function Home() {
  const vision = await reader().singletons.vision.read();

  return (
    // Vision Statement
    <div>
      <Section>
        <Text variant="h1" className="bg-beige leading-tight">
          {vision && <MDXContent source={await vision.vision()} />}
        </Text>
        <Text variant="p" className="self-end italic">
          - ACF Vision {vision && vision.year}
        </Text>
      </Section>

      <Section className="bg-black text-white">
        <Content slug="about" />
      </Section>
    </div>
  );
}
