import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
   
      <div class="footer">
        <div>
          <span class="insertbox">
          <i class="fa fa-link fa-lg fa-stack" id="linkicon"></i>
            <a href="./" class="link p-2">Insert Link</a>
            </span>
          <span class="insertbox"><i class="fa fa-paperclip fa-lg fa-stack" id="edit"></i></span>
        </div>
          <span class="sendbutton"><i class="fa fa-paper-plane fa-lg" id="send"></i></span>
      </div>
   
  );
};

export default Footer;