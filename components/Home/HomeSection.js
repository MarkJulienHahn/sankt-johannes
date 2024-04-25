import React from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";

const HomeSection = ({ entry, i }) => {
  function isOdd(number) {
    return number % 2 !== 0;
  }

  return (
    <div
      className="twoColumn"
      style={{ flexDirection: isOdd(i) ? "row-reverse" : "row" }}
    >
      <div className="textColumn">
        <h3>{entry.dachzeile}</h3>
        <h1>{entry.ueberschrift}</h1>
        <PortableText value={entry.text} />
      </div>
      <div className="imageColumn">
        <Image
          fill
          style={{ objectFit: "contain" }}
          src={entry.bild.url}
          alt="Descriptive alt text"
        />
      </div>
    </div>
  );
};

export default HomeSection;
