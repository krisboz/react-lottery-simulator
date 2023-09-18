import "../styles/Ball.css";

const Ball = ({ val, highlighted }) => {
  return (
    <div
      key={val}
      className={`selected-number roll-out ${highlighted ? "highlighted" : ""}`}
    >
      <p className="selected-value">{val}</p>
    </div>
  );
};

export default Ball;
