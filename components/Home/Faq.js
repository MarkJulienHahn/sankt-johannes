"use client";

import React, { useState } from "react";
import Frage from "./Frage";

const Faq = ({ faq }) => {
  const [accIndex, setAccIndex] = useState(null);

  return (
    <div className="faqWrapper">
      <h3>FAQs</h3>
      {faq.map((frage, i) => (
        <Frage
          frage={frage}
          key={i}
          i={i}
          accIndex={accIndex}
          setAccIndex={setAccIndex}
        />
      ))}
    </div>
  );
};

export default Faq;
