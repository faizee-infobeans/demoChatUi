import React from "react";

export const Nav = () => {
  return (
    <div class="msg">
      <div class="login">
        <div>
          <i class="fa fa-external-link-square fa-lg fa-stack" id="edit"></i>
          <a href="" class="link">BNAT LOGIN</a>
        </div>
        <div>
          <i class="fa fa-times-circle fa-lg fa-stack" id="edit"></i>
          <i class="fa fa-edit fa-lg fa-stack" id="edit"></i>
        </div>
      </div>

      <div class="login">
        <div>
          <span class="bg"><i class="fa fa-camera fa-lg fa-stack" id="edit"></i></span>
          <span class="bg"><i class="fa fa-paperclip fa-lg fa-stack" id="edit"></i></span>
        </div>
        <div>
          <span class="bg"><i class="fa fa-microphone fa-lg fa-stack" id="edit"></i></span>
        </div>
      </div>
    </div>
  );
};
