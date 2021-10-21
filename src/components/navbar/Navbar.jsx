import React from "react";
import "./Navbar.css";

const Navbar = ({ hide }) => {
  return (
    <nav class="navbar">
        <div class="container-fluid">
          <i class="fa fa-comment fa-stack fa-lg"></i>
          <span class="navbar-text"> <b>Task ID: 123456</b> | Rupinder</span>
          <span onClick={hide} class="fa-stack fa-lg">
            <i class="fa fa-minus"></i>
          </span>
        </div> 
      </nav>
  );
};

export default Navbar;