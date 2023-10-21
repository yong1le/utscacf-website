import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    // Vision Statement
    <div>
      <div className="page-width section bg-beige">
        <h1 className="responsive-title leading-tight">
          To live into our mission and identity: Being a <b>light</b> of the
          campus, <b>desiring and sharing God's love to one another</b>.
        </h1>
        <p className="responsive-text self-end italic">
          - ACF Vision 2023-2024
        </p>
      </div>

      {/* Some more information */}
      <div className="page-width section bg-black text-white ">
        <FadeIn direction="bot">
          <h1 className="responsive-title">UTSC Asian Christian Fellowship</h1>
          <p className="responsive-text">
            We are a student-led Christian campus fellowship at the University
            of Toronto Scarborough. We aim to build fruitful, Christ-centred
            relationships and grow in faith with a desire to serve. Please add
            more...
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
