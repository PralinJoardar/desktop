import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MainForm({ mainData, setMainData, count, setCount }) {
  const addQuestion = () => {
    const len = mainData.length;
    var optindex = mainData[mainData.length - 1].options.length - 1;

    // console.log(len);
    if (
      mainData[len - 1].questionValue == "" ||
      mainData[len - 1].options[optindex].value == ""
    ) {
      alert("fill form first ");
      count = 0;
    } else {
      setMainData([
        ...mainData,

        {
          questionId: len + 1,
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
    }
  };
  const addOption = (questionIndex) => {
    const len = mainData.length;
    var optlen = mainData[len - 1].options.length;
    if (
      mainData[len - 1].options[optlen - 1].value == "" ||
      mainData[len - 1].options[optlen - 2].value == "" ||
      mainData[len - 1].options[optlen - 3].value == ""
    ) {
      alert("fill previous option");
      count = 0;
    } else {
      const len = mainData[questionIndex].options.length;
      var currentData = [...mainData];
      currentData[questionIndex].options.push({});
      setMainData(currentData);
    }
  };

  function validate() {
    var optlen = mainData[mainData.length - 1].options.length;
    if (
      mainData[mainData.length - 1].questionValue == "" ||
      mainData[mainData.length - 1].options[optlen - 1].value == ""
    ) {
      alert("fill form first ");
      count = 0;
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <form
        onSubmit={validate}
        className="was-validated"
        style={{
          backgroundColor: "#ffe8cc",
          padding: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={addQuestion}
          className="btn btn-primary btn-lg btn-block"
        >
          Add Question
        </button>
        <br />

        <br />
        {mainData.map((questionData, questionIndex) => (
          <div key={questionIndex}>
            <label className="font-weight-bold">Enter your Question</label>
            <br />
            <input
              type="text"
              className="form-control form-control-lg"
              required
              // pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
              onChange={(e) => {
                setMainData(
                  [...mainData],
                  (mainData[questionIndex].questionValue = e.target.value)
                );
                {
                  mainData[questionIndex].questionValue == ""
                    ? alert("please fill")
                    : console.log("filling");
                }
              }}
            />{" "}
            <div class="valid-feedback">Looks good !</div>
            <div class="invalid-feedback">Please Fill !</div>
            {/* {console.log(mainData[questionIndex].questionValue)} */}
            <br />
            <hr style={{ backgroundColor: "#606060" }} />
            <br />
            <button
              onClick={() => {
                addOption(questionIndex);
              }}
              className="btn btn-secondary"
            >
              Add More Option
            </button>
            <br />
            <br />
            {questionData.options.map((optionsData, optionIndex) => (
              <div key={optionIndex}>
                <label className="font-italic">Option: {optionIndex + 1}</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  required
                  // pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
                  onChange={(e) => {
                    setMainData(
                      [...mainData],
                      (questionData.options[optionIndex] = e.target.value)
                    );
                  }}
                />
                <div class="valid-feedback">Looks good !</div>
                <div class="invalid-feedback">please Fill !</div>
                {/* {console.log(questionData.options[optionIndex])} */}
                <br />
                <hr style={{ backgroundColor: "#606060" }} />
                <br />
              </div>
            ))}
          </div>
        ))}
        <button class="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MainForm;
