"use client";
import React from "react";
import HomeSection from "./HomeSection";
import Nav from "../Nav/Nav";

const Home = ({ home }) => {
  return (
    <div className="pageWrapper ">
      <Nav />
      {home.map((entry, i) => (
        <HomeSection key={i} entry={entry} i={i} />
      ))}
    </div>
  );
};

export default Home;
