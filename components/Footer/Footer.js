"use client";

import React from "react";
import { PortableText } from "next-sanity";

const Footer = ({ footer }) => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerColumn">
          <h4>{footer.ankuendigung.ueberschrift}</h4>
          <PortableText value={footer.ankuendigung.text} />
        </div>
        <div className="footerColumn">
          <p>{footer.kontakt.ueberschrift}</p>
          <div>
            <a href={`mailto:${footer.kontakt.email}`} className="button">
              Schreiben Sie uns eine Email {`   ->`}
            </a>
          </div>
          <div>
            <a
              href="/files/Partizipation-In-Sankt-Johannes_Poster.pdf"
              download
              className="button secondary"
            >
              Laden Sie das Plakat runter {`   ->`}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
