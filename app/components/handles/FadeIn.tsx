"use client";
import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right" | "top" | "bot";
}) => {
  const [visible, setVisible] = useState(false);
  const fadeElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (fadeElement.current) {
        const bounds = fadeElement.current.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (bounds.top <= viewHeight * 0.85) {
          setVisible(true);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let translation;
  switch (direction) {
    case "left":
      translation = "-translate-x-40";
      break;
    case "right":
      translation = "translate-x-40";
      break;
    case "top":
      translation = "-translate-y-40";
      break;
    case "bot":
      translation = "translate-y-40";
      break;
  }

  return (
    <div
      ref={fadeElement}
      className={`transition-all duration-700 ease-in-out ${
        visible ? "opacity-100" : translation + " opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
