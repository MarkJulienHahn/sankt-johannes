import React from "react";
import ProgrammRow from "./ProgrammRow";

const Programm = ({ program }) => {
  return (
    <div className="programm__wrapper">
      <h3>Programm</h3>

      {program.map((entry, i) => (
        <ProgrammRow
          key={i}
          time={entry?.time}
          title={entry?.title}
          description={entry?.description}
        />
      ))}
    </div>
  );
};

export default Programm;
