import React from "react";

export const LinkResults = ({ results }) => {
  console.log(results);

  return (
    <div className="bg-white w-1/2 h-12">
      <p>{results}</p>
    </div>
  );
};
