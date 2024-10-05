import Section from "@/components/data/Section";
import EventCarousel from "@/components/EventCarousel";

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
        <h1 className="responsive-title bg-beige leading-tight">
          {vision && vision.vision}
        </h1>
        <p className="responsive-text self-end italic">
          - ACF Vision {vision && vision.year}
        </p>
      </Section>

      {/* Some more information */}
      <Section className="bg-black text-white">
        <h1 className="responsive-title">UTSC Asian Christian Fellowship</h1>
        <p className="responsive-text mb-16">
          We are a student-led Christian campus fellowship at the University of
          Toronto Scarborough. We aim to build fruitful, Christ-centred
          relationships and grow in faith with a desire to serve.
        </p>

        <h1 className="pb-4 text-xl">View our upcoming events</h1>
        <EventCarousel />
      </Section>
    </div>
  );
}
