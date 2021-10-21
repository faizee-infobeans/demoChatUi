import React from "react";
import { Sender, Receiver} from "./Messages.jsx";

const Tabs = () => {
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item active" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            role="tab"
          >
            <i class="fa fa-circle fa-lg fa-stack"></i> Rupinder
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            role="tab"
          >
            <i class="fa fa-user-circle fa-lg fa-stack"></i> Parent
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            role="tab"
          >
            <i class="fa fa-users fa-lg fa-stack"></i> Group
          </button>
        </li>
      </ul>

      <div class="xyz">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel">
            <Sender />
            <Receiver />
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel">
            <Sender />
            <Receiver />
            <Sender />
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel">
            <Sender />
            <Receiver />
            <Sender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
