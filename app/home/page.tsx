import { createReader } from "@keystatic/core/reader";
import Section from "../components/data/Section";
import keystaticConfig from "../../keystatic.config";
import { DocumentRenderer } from "@keystatic/core/renderer";
import EventCarousel from "../components/EventCarousel";
import Event from "../components/data/Event";

const reader = createReader(process.cwd(), keystaticConfig);
export default async function Home() {
  const vision = await reader.singletons.vision.read();
  const events = await reader.collections.event.all();

  return (
    // Vision Statement
    <div>
      <Section>
        <h1 className="responsive-title bg-beige leading-tight">
          {vision && <DocumentRenderer document={await vision.vision()} />}
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
        <EventCarousel>
          {events ? (
            events.map((e, i) => (
              <Event
                key={i}
                name={e.entry.name}
                image={e.entry.image}
                link={e.entry.link}
                description={e.entry.description}
              />
            ))
          ) : (
            <></>
          )}
        </EventCarousel>
      </Section>
    </div>
  );
}
