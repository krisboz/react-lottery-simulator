import "./NumberPicker.css";
import { useState } from "react";
import Ball from "../Ball/Ball";

const NumberPicker = ({ doTheThing, showUserPicked }) => {
  const [numbers, setNumbers] = useState([]);
  const [euroNums, setEuroNums] = useState([]);
  const [finished, setFinished] = useState([]);

  const clickedNumber = (event) => {
    const valid = false;
    const num = parseInt(event.target.textContent);
    const isEuroNum = event.target
      .closest(".nums")
      .classList.contains("euroNums");

    if (isEuroNum) {
      //Želimo euronum i nemamo više od dva odabrana
      if (euroNums.length < 2 && !euroNums.includes(num)) {
        setEuroNums([...euroNums, num]);
        event.target.closest(".num").classList.add("clicked");
      } else if (euroNums.includes(num)) {
        setEuroNums(euroNums.filter((el) => el !== num));
        event.target.closest(".num").classList.remove("clicked");
      }
    } else if (!isEuroNum) {
      if (numbers.length < 5 && !numbers.includes(num)) {
        setNumbers([...numbers, num]);
        event.target.closest(".num").classList.add("clicked");
      } else if (numbers.includes(num)) {
        setNumbers(numbers.filter((el) => el !== num));
        event.target.closest(".num").classList.remove("clicked");
      }
    }
  };

  const genNums = (n) => {
    const template = [];
    for (let i = 1; i < n + 1; i++) {
      template.push(
        <div key={i} onClick={clickedNumber} className="num">
          <span className="num-value">{i}</span>
        </div>
      );
    }

    return template;
  };

  const renderSelectedBall = (val) => {
    return (
      <div key={val} className="selected-number roll-out">
        <p className="selected-value">{val}</p>
      </div>
    );
  };

  const template = (
    <div className="selected-numbers">
      <div className="num-cont">
        {numbers.map((el) => (
          <Ball key={el} val={el} />
        ))}
      </div>
      <div className="euronum-cont">
        {euroNums.map((el) => (
          <Ball key={el} val={el} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="ticket-container">
      {showUserPicked ? null : template}
      <form onSubmit={(event) => doTheThing(event, [numbers, euroNums])}>
        <p>5 out of 50</p>
        <div className="nums">{genNums(50)}</div>
        <p>2 out of 12</p>
        <div className="euroNums nums">{genNums(12)}</div>
        <div className="btn-cont">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NumberPicker;
