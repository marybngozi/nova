import React from "react";

export const UserFrame = ({ data }) => {
  return (
    <div className="user">
      <div>
        <div className="user-frame">
          <p>{data.message}</p>
        </div>

        <p className="user-time">{data.date}</p>
      </div>
    </div>
  );
};
