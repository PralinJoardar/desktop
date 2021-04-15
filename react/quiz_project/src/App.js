import React, { useState } from "react";
import "./App.css";
import DisplayResults from "./components/DisplayResults";
import MainForm from "./components/MainForm";

function App() {
  const [count, setCount] = useState(0);
  const [mainData, setMainData] = useState([
    {
      questionId: 1,
      questionValue: "",
      options: [
        {
          optionId: 1,
          value: "",
        },
        {
          optionId: 2,
          value: "",
        },
        {
          optionId: 3,
          value: "",
        },
      ],
    },
  ]);
  return (
    <>
      {count == 0 ? (
        <MainForm
          mainData={mainData}
          setMainData={setMainData}
          count={count}
          setCount={setCount}
        />
      ) : (
        <DisplayResults mainData={mainData} count={count} setCount={setCount} />
      )}
    </>
  );
}

export default App;
