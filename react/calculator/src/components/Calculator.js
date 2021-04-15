import React, { useState, useEffect } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(firstNumber * secondNumber);
  }, [firstNumber, secondNumber]);
  return (
    <div
      class="container"
      style={{
        marginTop: "200px",
        marginLeft: "600px",
        width: "12%",
        padding: "10px",
      }}
    >
      <h1>Calculator</h1>
      <hr />
      <br />
      <input
        type="text"
        placeholder="Enter First Number"
        value={firstNumber}
        onChange={(e) => {
          if(e.target.value.match(/^[0-9,.]*$/)) {
            setFirstNumber(e.target.value);
          } else setFirstNumber(firstNumber.replace(firstNumber,""));
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Second Number"
        value={secondNumber}
        onChange={(e) => {
            if(e.target.value.match(/^[0-9]*$/)) {
              setSecondNumber(e.target.value);
            } else setSecondNumber("");
          }}
      />
      <br />
      <br />
      <input type="text" placeholder="Result" disabled value={result} />
    </div>
  );
}

export default Calculator;
