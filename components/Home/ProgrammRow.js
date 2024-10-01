import React from "react";

const ProgrammRow = ({ time, title, description }) => {
  console.log(time);
  return (
    <div className="programm__row">
      <div className={`programm__row--header ${time ? '' : 'center'}`}>
        {time != undefined && <p>{time}</p>}
        <p>{title}</p>
      </div>
      <p className="programm__row--description">{description}</p>
    </div>
  );
};

export default ProgrammRow;
