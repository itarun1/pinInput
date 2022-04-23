import React, { useRef } from "react";
import PropTypes from "prop-types";
import { PinItem } from "./PinItem";
import "./InputBoxes.css";

function InputBoxes({ length, label, perBox, onChange }) {
  const [values, setValues] = React.useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (value, index) => {
    const val = [...values];
    val[index] = value;
    setValues(val);
    if (value.length > 0 && value.length <= perBox && index < length - 1) {
      elements.current[index + 1].focus();
    }
    onChange(val.join(""));
  };

  function handleBackspace(value, index) {
    if (index > 0) {
      elements.current[index - 1].focus();
    }
    const val = [...values];
    val[index] = value;
    setValues(val);
    onChange(val.join(""));
  }

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text/plain");
    setValues(pasted.split("").slice(0, values.length));
  };
  function randomPin() {
    return Math.floor(Math.random() * 9000) + 10000;
  }
  React.useEffect(() => {
    console.log(elements);
  }, []);
  return (
    <div onPaste={handlePaste}>
      <h1>{label} </h1>
      <p>
        Copy <b>{randomPin()}</b> and paste into any input</p>
      {values.map((item, index) => (
        <PinItem
          key={index}
          value={item}
          onPaste={handlePaste}
          ref={(n) => (elements.current[index] = n)}
          onChange={(v) => handleChange(v, index)}
          onBackspace={(v) => handleBackspace(v, index)}
          max={perBox}
        />
      ))}
       <pre>{JSON.stringify(values)}</pre>
    </div>
  );
}

InputBoxes.p= {
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func
};
InputBoxes.defaultProps = {
  label: "Label",
  perBox: 1
};
export default InputBoxes;
