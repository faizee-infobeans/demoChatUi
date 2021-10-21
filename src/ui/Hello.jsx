import React from "react";
import { Form } from "./Form.jsx";
import { Tab } from "./Tab.jsx";
import { Nav } from "./Nav.jsx";

export const Hello = ({ hide }) => {
  return (
    <div class="ui">
      <nav class="navbar">
        <div class="container-fluid">
          <i class="fa fa-comment fa-stack fa-lg"></i>
          <span class="navbar-text"> <b>Task ID: 123456</b> | Rupinder</span>
          <span onClick={hide} class="fa-stack fa-lg">
            <i class="fa fa-minus"></i>
          </span>
        </div>
      </nav>
      <Tab />
      <Form />
      <Nav />
    </div>
  );
};
