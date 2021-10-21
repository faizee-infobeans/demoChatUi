import React from "react";
import ChatInput from "../chatinput/ChatInput.jsx";
import Tabs from "../tab/Tabs.jsx";
import Footer from "../footer/Footer.jsx";
import Navbar from "../navbar/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"></div>
        <div class="col main">
          <Navbar />
          <Tabs />
          <ChatInput />
          <Footer />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Main;
