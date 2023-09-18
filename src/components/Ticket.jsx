import calcWinnings from "../helpers/calcWinnings";
import { useSelector } from "react-redux";
import Ball from "./Ball";

const Ticket = ({ ticket, highlightedNumbers }) => {
  const general = useSelector((state) => state.general);
  console.log(general.jackpot);
  console.log(highlightedNumbers.numbers, highlightedNumbers.euroNums);
  return (
    <div id={ticket.id} className="top-ticket-cont" key={ticket.id}>
      <div className="ticket">
        <div className="numbers">
          {ticket.numbers.map((el) => (
            <Ball
              key={el}
              val={el}
              highlighted={
                highlightedNumbers.numbers
                  ? highlightedNumbers.numbers.includes(el)
                  : null
              }
            />
          ))}
        </div>
        <div className="euroNums">
          {ticket.euroNums.map((el) => (
            <Ball
              key={el}
              val={el}
              highlighted={
                highlightedNumbers.euroNums
                  ? highlightedNumbers.euroNums.includes(el)
                  : null
              }
            />
          ))}
        </div>
      </div>
      <p>
        Winnings:{" "}
        {calcWinnings(
          general.jackpot,
          highlightedNumbers.numbers,
          highlightedNumbers.euroNums
        )}
      </p>
    </div>
  );
};

export default Ticket;
