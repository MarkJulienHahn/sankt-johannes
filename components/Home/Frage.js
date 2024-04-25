import React, { useState, useEffect } from "react";
import { PortableText } from "next-sanity";

const Frage = ({ frage, accIndex, setAccIndex, i }) => {
  // State to manage the visibility of the answer
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the answer visibility
  const toggleAnswer = () => {
    setAccIndex(i);
  };

  useEffect(() => {
    accIndex == i ? setIsOpen(true) : setIsOpen(false);
  }, [accIndex]);

  console.log(frage);

  return (
    <div className={"frageWrapper"}>
      <h2
        onClick={
          !isOpen
            ? toggleAnswer
            : () => {
                setIsOpen(false), setAccIndex(null);
              }
        }
      >
        {frage.frage}
      </h2>
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 1s ease-out",
        }}
      >
        <PortableText value={frage.antwort} />
        {frage.datei && (
          <div className="download">
            <p>
              {" "}
              <a href={frage.datei?.file.url} target="_blank" rel="noreferrer">
                {`—`} {frage.datei?.title} ({frage.datei?.file.extension}){" "}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frage;
