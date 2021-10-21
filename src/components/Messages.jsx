import React from 'react';

export const Sender = () => {
  return (
    <div class="name">
    <div class="content">
    <p class="msg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit tenetur.
      Lorem ipsum
      <br />
      <span class="time">05:42 PM</span>
    </p>
  </div>
    <p class="reply"><span class="shareicon"><i class="fa fa-reply"></i></span> Reply</p>
    </div>
  );
};

export const Receiver = () => {
  return (
    <div class="name1">
    <div class="content1">
    <p class="msg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit tenetur.
      Lorem ipsum
      <br />
      <span class="time">05:45 PM</span>
    </p>
  </div>
  <div>
  <p class="reply">
    <span class="shareicon"><i class="fa fa-reply"></i></span> Reply</p>
  </div>
    </div>
  );
};

