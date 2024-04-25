"use client"

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
          <a href={`mailto:${footer.kontakt.email}`} className="button">
            Schreiben Sie uns eine Email {`   ->`}
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerRow">
          <a href={"/impressum"}>Impressum, </a>

          <a href={"/"}>Datenschutz</a>
        </div>
        <span>©{new Date().getFullYear()}, Kirchengemeinde St. Johannes</span>
      </div>
    </>
  );
};

export default Footer;
