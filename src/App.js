import React from "react";
import "./styles.css";
import InputBoxes from "./Components/InputBoxes";

export default function App() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <div className="App">
        <InputBoxes className="p" length={5} onChange={(val) => setValue(val)} perBox={1} />
      </div>
      <h2>{value}</h2>
   
    </>
  );
}