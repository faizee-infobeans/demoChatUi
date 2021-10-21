import React from "react";
import { Info } from "./Info.jsx";

export const Tab = () => {
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            role="tab"
          >
            <i class="fa fa-circle fa-lg fa-stack"></i> Faizee
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
            <Info />
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel">
            <Info />
            <Info />
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel">
            <Info />
            <Info />
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};
