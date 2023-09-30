import "../styles/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import subtractTickets from "../helpers/subtractTickets";
import JackpotDisplay from "../components/JackpotDisplay";
const Home = () => {
  const dispatch = useDispatch();
  //jackpot
  const jackpot = useSelector((state) => state.general.jackpot);
  const profile = useSelector((state) => state.profile);
  //play button

  const subtractHelper = () => {
    dispatch(subtractTickets());
  };
  // ticket count
  return (
    <div className="home-container">
      <section className="jackpot">
        <JackpotDisplay jackpot={jackpot} />
      </section>

      <Link
        onClick={profile.tickets.length === 0 ? null : subtractHelper}
        to={profile.tickets.length === 0 ? "/select-tickets" : "/play"}
      >
        Play
      </Link>
      <p>
        You have {profile.tickets.length} ticket
        {profile.tickets.length > 1 && "s"}
      </p>
    </div>
  );
};

export default Home;
