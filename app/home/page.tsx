import { createReader } from "@keystatic/core/reader";
import Section from "../components/data/Section";
import keystaticConfig from "../../keystatic.config";
import { DocumentRenderer } from "@keystatic/core/renderer";

const reader = createReader(process.cwd(), keystaticConfig);
export default async function Home() {
  const vision = await reader.singletons.vision.read();

  return (
    // Vision Statement
    <div>
      <Section>
        <h1 className="responsive-title bg-beige leading-tight">
          {vision && <DocumentRenderer document={await vision.vision()} />}
          {/* To live into our mission and identity: Being a <b>light</b> of the */}
          {/* campus, <b>desiring and sharing God's love to one another</b>. */}
        </h1>
        <p className="responsive-text self-end italic">
          - ACF Vision {vision && vision.year}
        </p>
      </Section>

      {/* Some more information */}
      <Section className="bg-black text-white">
        <h1 className="responsive-title">UTSC Asian Christian Fellowship</h1>
        <p className="responsive-text">
          We are a student-led Christian campus fellowship at the University of
          Toronto Scarborough. We aim to build fruitful, Christ-centred
          relationships and grow in faith with a desire to serve. Please add
          more...
        </p>
      </Section>
    </div>
  );
}
