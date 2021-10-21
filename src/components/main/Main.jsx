import React from "react";
import ChatInput from "../chatinput/ChatInput.jsx";
import Tabs from "../tab/Tabs.jsx";
import Footer from "../footer/Footer.jsx";
import Navbar from "../navbar/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div class="main">
      <Navbar />
      <Tabs />
      <ChatInput />
      <Footer />
    </div>
  );
};

export default Main;
