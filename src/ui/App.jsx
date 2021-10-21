import React, { useState } from "react";
import { Hello } from "./Hello.jsx";

const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => { setShow(true); }}>Show ui</button>
      {show && ( <Hello hide={() => { setShow(false); }}/> )}
    </div>
  );
};

export default Main;
