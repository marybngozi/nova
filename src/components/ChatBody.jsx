import React, { useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";
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

  const randomResponses = [
    {
      type: "sys",
      name: "Penny",
      message: "Hi",
    },
    {
      type: "sys",
      name: "Penny",
      message: "That's very awesome, we can do that",
    },
    {
      type: "sys",
      name: "Penny",
      message: "We can also make you smile",
    },
    {
      type: "sys",
      name: "Penny",
      message: "That's one of the things that makes life awesome",
    },
    {
      type: "sys",
      name: "Penny",
      message: "You are the best",
    },
  ];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const chatEnd = React.useRef(null);

  const submitForm = (e) => {
    const userMsg = {
      type: "user",
      message: e,
      date: moment().format("ddd, h:mm a"),
    };

    let newChats = [...chats, userMsg];

    setChats(newChats);
    // scroll to the end for the new messages
    chatEnd.current.scrollIntoView({ behavior: "smooth", block: "end" });

    newChats.push(randomResponses[getRandomInt(0, randomResponses.length)]);

    setTimeout(() => {
      setChats(newChats);

      // scroll to the end for the new messages
      chatEnd.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 400);
  };

  return (
    <main>
      <div className="top">
        <h4>Start your conversation</h4>
      </div>

      <div className="chat-area">
        <AnimateGroup play={true}>
          {chats.map((chat, i) => {
            return chat.type === "sys" ? (
              <Animate key={i} play={true} sequenceIndex={i}>
                <SenderFrame name={chat.name} message={chat.message} />
              </Animate>
            ) : chat.type === "user" ? (
              <Animate key={i} play={true} sequenceIndex={i}>
                <UserFrame data={chat} />
              </Animate>
            ) : (
              <Animate key={i} play={true} sequenceIndex={i}>
                <SuggestFrame suggests={chat.actions} />
              </Animate>
            );
          })}
        </AnimateGroup>
        <div ref={chatEnd}></div>
      </div>

      <ChatForm handleSubmit={submitForm} />
    </main>
  );
};
