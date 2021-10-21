import React from "react";
import ChatInput from "./ChatInput.jsx";
import Tabs from "./Tabs.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar"

const Main = ({ hide }) => {
  return (
    <div class="ui">
      <Navbar />
      <Tabs />
      <ChatInput />
      <Footer />
    </div>
  );
};

export default Main;