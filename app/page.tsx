import Section from "@/components/layout/Section";
import EventCarousel from "@/components/shared/event/EventCarousel";
import Text from "@/components/shared/ui/Text";

export default async function Home() {
  const vision = {
    vision: `
        We see Jesus inviting us to flourish in community, loving our neighbours with every
        opportunity.
    `,
    year: "2024-2025",
  };

  return (
    // Vision Statement
    <div>
      <Section>
        <Text variant="h1" className="bg-beige leading-tight">
          {vision && vision.vision}
        </Text>
        <Text variant="p" className="self-end italic">
          - ACF Vision {vision && vision.year}
        </Text>
      </Section>

      {/* Some more information */}
      <Section className="bg-black text-white">
        <Text variant="h1">UTSC Asian Christian Fellowship</Text>
        <Text variant="p" className="mb-16">
          We are a student-led Christian campus fellowship at the University of
          Toronto Scarborough. We aim to build fruitful, Christ-centred
          relationships and grow in faith with a desire to serve.
        </Text>

        <h1 className="pb-4 text-xl">View our upcoming events</h1>
        <EventCarousel />
      </Section>
    </div>
  );
}
