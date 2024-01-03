"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EventCarousel = ({ children }: { children: React.ReactNode }) => {
  const responsive = {
    single: {
      breakpoint: { min: 0, max: 1024 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    double: {
      breakpoint: { min: 1024, max: 4000 },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
    >
      {children}
    </Carousel>
  );
};

export default EventCarousel;
