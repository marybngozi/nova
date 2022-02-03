import React, { useState } from "react";
import moment from "moment";
import "../styles/ChatBody.css";
import { SenderFrame } from "./chat/SenderFrame";
import { UserFrame } from "./chat/UserFrame";
import { SuggestFrame } from "./chat/SuggestFrame";
import { ChatForm } from "./chat/ChatForm";

export const ChatBody = () => {
  const [chats, setChats] = useState([
    {
      type: "sys",
      name: "Penny",
      message: "Please let me know your name?",
    },
    {
      type: "user",
      message: "Daalu",
      date: "Tue, 6:10am",
    },
    {
      type: "sys",
      name: "Penny",
      message: "Thank You Daaly, what will you like to do today?",
    },
    {
      type: "suggest",
      name: "Penny",
      actions: [
        "View Recipes",
        "Meal Plan",
        "Buy Products",
        "Get Help",
        "FAQs",
      ],
    },
  ]);

  const chatEnd = React.useRef(null);

  const submitForm = (e) => {
    const userMsg = {
      type: "user",
      message: e,
      date: moment().format("ddd, h:mm a"),
    };

    let newChats = [...chats, userMsg];

    setChats(newChats);

    const sysMsg = {
      type: "sys",
      name: "Penny",
      message: "That's very awesome, we can do that",
    };

    newChats.push(sysMsg);

    setTimeout(() => {
      setChats(newChats);

      // scroll to the end for the new messages
      chatEnd.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 300);
  };

  return (
    <main>
      <div className="top">
        <h4>Start your conversation</h4>
      </div>

      <div className="chat-area">
        {chats.map((chat, i) => {
          return chat.type === "sys" ? (
            <SenderFrame key={i} name={chat.name} message={chat.message} />
          ) : chat.type === "user" ? (
            <UserFrame key={i} data={chat} />
          ) : (
            <SuggestFrame key={i} suggests={chat.actions} />
          );
        })}
        <div ref={chatEnd}></div>
      </div>

      <ChatForm handleSubmit={submitForm} />
    </main>
  );
};