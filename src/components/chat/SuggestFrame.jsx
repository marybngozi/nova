import React from "react";

export const SuggestFrame = ({ suggests }) => {
  return (
    <div className="suggests">
      <div>
        {suggests.map((suggest, i) => (
          <button className="suggest" key={i}>
            {suggest}
          </button>
        ))}
      </div>
    </div>
  );
};
