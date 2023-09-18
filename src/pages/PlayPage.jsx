import "../styles/PlayPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Ball from "../components/Ball";
import Ticket from "../components/Ticket";
import generateTicket from "../helpers/generateTicket";
import SummarizedStats from "../components/SummarizedStats";
import { Link } from "react-router-dom";
import ReplaceLink from "../routes/ReplaceLink";
import JackpotDisplay from "../components/JackpotDisplay";
import incrementJackpot from "../helpers/incrementJackpot";
import subtractTickets from "../helpers/subtractTickets";
import addWinningsToMoney from "../helpers/addWinnings";
import calcWinnings from "../helpers/calcWinnings";
import { setMoney, updateHighScore } from "../redux/profileSlice";
import checkWinHiScore from "../helpers/checkWinHiScore";

const PlayPage = () => {
  const dispatch = useDispatch();
  const [winningNums, setWinningNums] = useState(generateTicket());
  const profile = useSelector((state) => state.profile);
  const tickets = useSelector((state) => state.profile.tickets);
  const general = useSelector((state) => state.general);
  const [jackpotHit, setJackpotHit] = useState(false);
  const [highlightedTickets, setHighlightedTickets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [renderedNumbers, setRenderedNumbers] = useState([]);
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    let totalWinnings = 0; // Accumulate the winnings
    let NewHighScore = {}; //High score object if any

    profile.tickets.forEach((ticket) => {
      if (highlightedTickets.hasOwnProperty(ticket.id)) {
        const testy = ticket;
        const winnings = calcWinnings(
          general.jackpot,
          highlightedTickets[ticket.id].numbers,
          highlightedTickets[ticket.id].euroNums
        );
        totalWinnings += winnings;
        if (winnings > profile.highScore.winnings) {
          NewHighScore = {
            ticket,
            winnings,
            highlightedNumbers: highlightedTickets[ticket.id],
          };
        } else {
          console.log(profile.money);
        }
      }
    });

    // Update the money value once with the total winnings
    console.log(NewHighScore);
    handleAddWinnings(totalWinnings);
    dispatch(updateHighScore(NewHighScore));
  }, [highlightedTickets]);

  useEffect(() => {
    const renderNumbersDelayed = () => {
      const allNums = [...winningNums.numbers, ...winningNums.euroNums];
      const currentNum = allNums[currentIndex];
      setRenderedNumbers((prevNumbers) => [...prevNumbers, currentNum]);

      if (currentIndex < allNums.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsRendering(false);
      }
    };

    if (isRendering) {
      setTimeout(renderNumbersDelayed, 500);
    } else {
      //Here check results and render changed userTickets
      profile.tickets.map((ticket) => {
        checkResults(ticket);
      });
      if (jackpotHit) {
        console.log("jackpothit");
      } else if (jackpotHit === false) {
        dispatch(incrementJackpot());
      }
    }
  }, [currentIndex, winningNums, isRendering]);

  const handleAddWinnings = (winnings) => {
    dispatch(setMoney(profile.money + parseFloat(winnings)));
  };

  const handleNewNumbers = (randomTicket) => {
    setWinningNums(randomTicket);
    setCurrentIndex(0);
    setRenderedNumbers([]);
    setIsRendering(true);
    dispatch(subtractTickets());
  };

  const checkResults = (ticket) => {
    const commonNumbers = ticket.numbers.filter((number) =>
      winningNums.numbers.includes(number)
    );
    const commonEuroNums = ticket.euroNums.filter((euroNum) =>
      winningNums.euroNums.includes(euroNum)
    );

    const allCommonNumbers = {
      numbers: [...commonNumbers],
      euroNums: [...commonEuroNums],
    };

    if (ticket.id) {
      setHighlightedTickets((prev) => ({
        ...prev,
        [ticket.id]: allCommonNumbers,
      }));
    }

    if (commonNumbers.length === 5 && commonEuroNums.length === 2) {
      console.log("Jackpot");
      setJackpotHit(true);
    }
  };

  return (
    <div className="play-page">
      <div className="top">
        <div className="jackpot-container">
          <JackpotDisplay jackpot={general.jackpot} />
        </div>
      </div>
      <div className="bottom">
        <div className="user-results">
          <div className="style-container">
            <div className="game-controls">
              <h2>Winning Draw</h2>
              <div className="winning-ticket-cont">
                {renderedNumbers.map((number, index) => (
                  <Ball htmlId="winningNum" key={index} val={number} />
                ))}
              </div>
              <button
                onClick={() =>
                  !isRendering ? handleNewNumbers(generateTicket) : null
                }
              >
                Play Again
              </button>
            </div>
          </div>

          <div className="results-grid-container">
            <div className="user-ticket-container">
              <h2>
                User Tickets{" "}
                <ReplaceLink
                  condition={tickets.length > 0}
                  toIfTrue={"/select-tickets"}
                  toIfFalse={"/select-tickets"}
                >
                  edit
                </ReplaceLink>
              </h2>
              <>
                {tickets.map((ticket, index) => (
                  <Ticket
                    key={index}
                    ticket={ticket}
                    highlightedNumbers={highlightedTickets[ticket.id] || []}
                  />
                ))}
              </>
            </div>

            <div className="stat-summary">
              <SummarizedStats
                winningTicket={winningNums}
                isRendering={isRendering}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayPage;
