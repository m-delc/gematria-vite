import React, { useState } from "react";
import "../App.css";

const Input1 = () => {
  const [inputtest, setinputtest] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputtest}
        onChange={(e) => setinputtest(e.target.value)}
      ></input>
      <br></br>
      {inputtest}
    </div>
  );
};

export default Input1;
