import "react-simple-keyboard/build/css/index.css";

import React, { useRef, useState, ChangeEvent } from "react";
import KeyboardWrapper from "./KeyboardWrapper";

const App = () => {
  const [input, setInput] = useState("");

  const keyboardRef = useRef<any>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.current.setInput(input);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      {/* <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      /> */}
      <KeyboardWrapper keyboardRef={keyboardRef} onChange={setInput} />
    </div>
  );
};

export default App;
