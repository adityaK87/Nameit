import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";

const ResultContainer = ({ suggestedNames }) => {
  const suggestedNameJsx = suggestedNames.map((suggestedName, index) => {
    return <NameCard key={index} suggestedName={suggestedName} />;
  });

  return (
    <div className="results-container">
      {/* {suggestedNames.length > 0 && suggestedNames[0]} */}
      {suggestedNameJsx}
    </div>
  );
};

export default ResultContainer;
