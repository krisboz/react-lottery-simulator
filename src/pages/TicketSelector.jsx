import { useState } from "react";
import Ball from "../components/Ball";
import "../styles/TicketSelector.css";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateUserTickets } from "../redux/profileSlice";
import { Link } from "react-router-dom";
import { GiPerspectiveDiceSixFacesRandom as RandomizeIcon } from "react-icons/gi";
import { RiRestartLine } from "react-icons/ri";
import generateTicket from "../helpers/generateTicket";
import subtractTickets from "../helpers/subtractTickets";
const TicketSelector = () => {
  const dispatch = useDispatch();

  const [ticket, setTicket] = useState({
    numbers: [],
    euroNums: [],
  });
  const tickets = useSelector((state) => state.profile.tickets);

  const genNums = (n) => {
    const template = [];
    for (let i = 1; i < n + 1; i++) {
      template.push(
        <div key={i} data-value={i} onClick={handleNumClick} className="num">
          <span className="num-value">{i}</span>
        </div>
      );
    }

    return template;
  };

  const addNumber = (number, type) => {
    setTicket((prevTicket) => ({
      ...prevTicket,
      [type]: [...prevTicket[type], number],
    }));
  };

  const removeNumber = (number, type) => {
    setTicket((prevTicket) => ({
      ...prevTicket,
      [type]: prevTicket[type].filter((num) => num !== number),
    }));
  };

  const resetTicket = (event) => {
    event.preventDefault();
    setTicket({ numbers: [], euroNums: [] });
  };

  //TODO CLEAN UP
  const handleNumClick = (event) => {
    const element = event.target.closest(".num");
    const value = parseInt(element.dataset.value);

    const isEuroNum = event.target
      .closest(".ticket-section")
      .classList.contains("euroNums");

    if (isEuroNum) {
      if (ticket.euroNums.length < 2 && !ticket.euroNums.includes(value)) {
        addNumber(value, "euroNums");
        element.classList.add("clicked");
      } else if (ticket.euroNums.includes(value)) {
        removeNumber(value, "euroNums");
        element.classList.remove("clicked");
      }
    } else {
      if (ticket.numbers.length < 5 && !ticket.numbers.includes(value)) {
        addNumber(value, "numbers");
        element.classList.add("clicked");
      } else if (ticket.numbers.includes(value)) {
        removeNumber(value, "numbers");
        element.classList.remove("clicked");
      }
    }
  };

  const returnTicket = (ticket) => {
    return (
      <div id={ticket.id} className="top-ticket-cont" key={ticket.id}>
        <div className="ticket">
          <div className="numbers">
            {ticket.numbers.map((el) => (
              <Ball key={el} val={el} />
            ))}
          </div>
          <div className="euroNums">
            {ticket.euroNums.map((el) => (
              <Ball key={el} val={el} />
            ))}
          </div>
        </div>
        <div className="btn-cont">
          <button className="del-ticket" onClick={handleTicketDeletion}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    );
  };

  const handleTicketDeletion = (event) => {
    const id = event.target.closest(".top-ticket-cont").id;
    const updatedTickets = tickets.filter((el) => el.id !== parseInt(id));
    dispatch(updateUserTickets(updatedTickets));
  };

  const submitTicket = (event) => {
    event.preventDefault();
    if (ticket.numbers.length === 5 && ticket.euroNums.length === 2) {
      const newTicket = { ...ticket, id: tickets.length + 1 };
      dispatch(updateUserTickets([...tickets, newTicket]));
      setTicket({ numbers: [], euroNums: [] });
      document
        .querySelectorAll(".num")
        .forEach((el) => el.classList.remove("clicked"));
    } else {
      window.alert(
        `You're still missing ${5 - ticket.numbers.length} Numbers and ${
          2 - ticket.euroNums.length
        } Euro Numbers`
      );
    }
  };

  const setRandomTicket = (event) => {
    event.preventDefault();
    setTicket(generateTicket());
  };

  const SubmitTickets = () => {
    dispatch(updateUserTickets(tickets));
    dispatch(subtractTickets());
  };

  return (
    <div className="ticket-picker-container">
      <form className="ticket-form" onSubmit={submitTicket}>
        <div className="curr-selection">
          <div className="curr-numbers">
            {" "}
            {ticket.numbers.map((el) => (
              <Ball key={el} val={el} />
            ))}
          </div>
          <div className="curr-euroNums">
            {ticket.euroNums.map((el) => (
              <Ball key={el} val={el} />
            ))}
          </div>
        </div>
        <p>5 OUT OF 50</p>
        <div className="numbers ticket-section">{genNums(50)}</div>
        <p>2 OUT OF 12</p>
        <div className="euroNums ticket-section">{genNums(12)}</div>
        <div className="controls">
          <button className="helper-control" onClick={resetTicket}>
            <RiRestartLine />
          </button>
          <button type="submit">Submit</button>
          <button className="helper-control" onClick={setRandomTicket}>
            <RandomizeIcon />
          </button>
        </div>
      </form>
      <div className="ticket-list">
        <p>Your Tickets</p>
        <div className="link_wrapper">
          {tickets.length > 0 ? (
            <Link to={"/play"} onClick={SubmitTickets}>
              Play
            </Link>
          ) : (
            <p>Add a ticket to begin</p>
          )}
          <div className="tickets-low-cont">
            {tickets.map((el) => returnTicket(el))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelector;
