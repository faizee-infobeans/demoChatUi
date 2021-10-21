import React from "react";
import "./Chatinput.css";

const ChatInput = () => {

  return (
    <div class="input">
      <form class="row">
        <div class="input-group mb-1 inner-addon right-addon">
          <textarea class="form-control input-box " id="exampleFormControlTextarea3" placeholder="Type your message here"></textarea>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
