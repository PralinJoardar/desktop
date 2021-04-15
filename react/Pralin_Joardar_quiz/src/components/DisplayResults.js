import React from "react";
import BackBtn from "./BackBtn";

function DisplayResults({ mainData, setCount }) {
  return (
    <div>
      <form
        style={{
          backgroundColor: "#ffe8cc",
          padding: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {mainData.map((result) => (
          <div key={result.questionId}>
            <h3>
              Question {result.questionId} : {result.questionValue}
            </h3>
            <br />
            <p className="font-weight-bold font-italic">Options:</p>
            {result.options.map((value) => (
              <div>
                <input type="radio" name={result.questionId} />
                &nbsp; &nbsp;
                {value}
              </div>
            ))}
            <br />
            <hr style={{ backgroundColor: "#606060" }} />
            <br />
          </div>
        ))}
        <BackBtn setCount={setCount} />
      </form>
      <br />
      <br />
    </div>
  );
}

export default DisplayResults;
