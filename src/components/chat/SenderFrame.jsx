import React from "react";
import person from "../../images/person.png"; // using hard-coded image

export const SenderFrame = ({ name, message }) => {
  return (
    <div className="sender">
      <div className="img-div">
        <img src={person} alt={name} />
      </div>

      <div>
        <p className="send-name">{name}</p>
        <div className="sender-frame">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
