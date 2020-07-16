import React from "react";
import { getLogTextColor } from "./logUtility";
const Logs = ({ logs }) => {
  return (
    <>
      {logs.map(({ type, time }, index) => (
        <div key={index} className="log-position">
          <p>{index + 1}</p>
          <p className={getLogTextColor(type)}>{time}</p>
          <p>{type}</p>
        </div>
      ))}
    </>
  );
};

export default Logs;
