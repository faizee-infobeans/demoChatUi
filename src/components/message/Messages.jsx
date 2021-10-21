import React from "react";
import "./messages.css";

export const Sender = () => {
  return (
    <div class="sender">
      <div class="Sendercontent">
        <p class="msg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit tenetur.
          Lorem ipsum
          <br />
          <span class="time">05:42 PM</span>
        </p>
      </div>
      <p class="reply1">
        <span class="shareicon">
          <i class="fa fa-reply"></i>
        </span>{" "}
        Reply
      </p>
    </div>
  );
};

export const Receiver = () => {
  return (
    <div class="receiver">
      <div class="Receivercontent">
        <p class="msg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit tenetur.
          Lorem ipsum
          <br />
          <span class="time">05:45 PM</span>
        </p>
      </div>
      <div>
        <p class="reply">
          <span class="shareicon">
            <i class="fa fa-reply"></i>
          </span>{" "}
          Reply
        </p>
      </div>
    </div>
  );
};
