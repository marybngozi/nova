import React from "react";
import { ReactComponent as Attach } from "../../images/attach.svg";
import { ReactComponent as Smile } from "../../images/smile.svg";
import { ReactComponent as Send } from "../../images/send.svg";

export const ChatForm = ({ handleSubmit }) => {
  const localHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const textVal = form.querySelector("#text").value;

    if (!textVal.trim()) {
      return;
    }

    // setTimeout(() => {
    form.querySelector("#text").value = "";
    // }, 500);

    handleSubmit(textVal);
  };

  return (
    <form action="" method="post" onSubmit={localHandle}>
      <div>
        <button disabled className="btn-icon" type="button">
          <Attach />
        </button>
        <button disabled className="btn-icon" type="button">
          <Smile />
        </button>
      </div>

      <div className="div-input">
        <input
          autoFocus
          className="input-msg"
          type="text"
          name="text"
          id="text"
          placeholder="Type your message here"
        />
      </div>

      <div>
        <button className="btn-send" type="submit">
          <Send />
        </button>
      </div>
    </form>
  );
};
