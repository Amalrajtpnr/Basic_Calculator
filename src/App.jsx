import { useState } from "react";
import "./App.css";

function App() {
  const [clickedvalue, setClickedvalue] = useState("");
  const [functionals, setFunctionals] = useState("");
  const [left_hand_side, setLeft_hand_side] = useState("");
  const [equals_to, setEquals_to] = useState("");
  const [final_answer, setFinal_answer] = useState("");
  const [result, setResult] = useState([]);

  const new_result = (final) => {
    setResult(final_answer);
  };

  function score(click) {
    if (result === final_answer) {
      return parseInt(final_answer + functionals);
    }
  }

  function values(digits) {
    if (functionals == "" && left_hand_side == "") {
      setClickedvalue(clickedvalue + digits);
    } else {
      setLeft_hand_side(left_hand_side + digits);
    }
  }

  function summation() {
    if (functionals !== "" && left_hand_side !== "") {
      setEquals_to("=");
    }
  }

  function answer() {
    if (functionals == "+") {
      const number1 = parseFloat(clickedvalue);
      const number2 = parseFloat(left_hand_side);
      setFinal_answer(number1 + number2);
    } else if (functionals == "-") {
      const number1 = parseFloat(clickedvalue);
      const number2 = parseFloat(left_hand_side);
      setFinal_answer(number1 - number2);
    } else if (functionals == "x") {
      const number1 = parseFloat(clickedvalue);
      const number2 = parseFloat(left_hand_side);
      setFinal_answer(number1 * number2);
    } else {
      const number1 = parseFloat(clickedvalue);
      const number2 = parseFloat(left_hand_side);
      setFinal_answer(number1 / number2);
    }
  }

  return (
    <div className="App">
      <div className="main">
        <div className="display">
          {clickedvalue}
          {""}
          {functionals}
          {""}
          {left_hand_side}
          {""}
          {equals_to}
          {""}
          {final_answer}
        </div>
        <div className="operators">
          <div className="division-div">
            <button
              onClick={() => {
                setFunctionals("/");
              }}
              className="division"
            >
              /
            </button>
          </div>
          <div className="addition-div">
            <button
              onClick={() => {
                setFunctionals("+");
              }}
              className="addition"
            >
              +
            </button>
            <button
              onClick={() => {
                setFunctionals("-");
              }}
              className="subtraction"
            >
              -
            </button>
            <button
              onClick={() => {
                summation();
                answer();
              }}
              className="equals"
            >
              =
            </button>
          </div>
          <div className="multiplication-div">
            <button
              onClick={() => {
                setFunctionals("x");
              }}
              className="multiplication"
            >
              x
            </button>
          </div>
        </div>
        <div className="numbers">
          <button
            onClick={() => {
              values("1");
            }}
            className="style"
          >
            1
          </button>
          <button
            onClick={() => {
              values("2");
            }}
            className="style"
          >
            2
          </button>
          <button
            onClick={() => {
              values("3");
            }}
            className="style"
          >
            3
          </button>
          <button
            onClick={() => {
              values("4");
            }}
            className="style"
          >
            4
          </button>
          <button
            onClick={() => {
              values("5");
            }}
            className="style"
          >
            5
          </button>
          <button
            onClick={() => {
              values("6");
            }}
            className="style"
          >
            6
          </button>
          <button
            onClick={() => {
              values("7");
            }}
            className="style"
          >
            7
          </button>
          <button
            onClick={() => {
              values("8");
            }}
            className="style"
          >
            8
          </button>
          <button
            onClick={() => {
              values("9");
            }}
            className="style"
          >
            9
          </button>
          <button
            onClick={() => {
              setClickedvalue("");
              setFunctionals("");
              setLeft_hand_side("");
              setEquals_to("");
              setFinal_answer("");
            }}
            className="style"
          >
            C
          </button>
          <button
            onClick={() => {
              values("0");
            }}
            className="style"
          >
            0
          </button>
          <button
            onClick={() => {
              values(".");
            }}
            className="style"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
