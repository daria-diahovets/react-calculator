import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";
import sounds from "./store/sounds";

const buttons: string[] = [
  "C",
  "%",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "=",
  "0",
  ".",
];

const Calculator = () => {
  const [expression, setExpression] = useState<string>("0");

  const appendToDisplay = (input: string) => {
    setExpression((prev) =>
      prev === "Error" || prev === "0" ? input : prev + input,
    );
    sounds.playClick();
  };

  const clearDisplay = () => {
    setExpression("0");
    sounds.playClick();
  };

  const calculate = () => {
    try {
      const result = evaluate(expression);
      setExpression(
        result !== undefined && result !== null ? String(result) : "Error",
      );
    } catch {
      setExpression("Error");
    }
    sounds.playClick();
  };

  return (
    <div className="calculator">
      <input type="text" readOnly value={expression} />
      <div className="calculator-btns">
        {buttons.map((btn, index) => {
          if (btn === "C") {
            return (
              <button key={index} onClick={clearDisplay}>
                {btn}
              </button>
            );
          }
          if (btn === "=") {
            return (
              <button key={index} className="vert-2" onClick={calculate}>
                {btn}
              </button>
            );
          }
          return (
            <button
              className={btn === "0" ? "hor-2" : ""}
              key={index}
              onClick={() => appendToDisplay(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
