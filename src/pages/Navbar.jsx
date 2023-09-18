import { BsInfoSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import formatCurrency from "../helpers/formatCurrency";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const userTickets = profile.tickets;

  //logo, play btn, stats, profile, money, info
  return (
    <nav>
      <Link to={"/"}>Lotto</Link>
      <div>
        <Link
          to={userTickets.length > 0 ? "/play" : "/select-tickets"}
          className="nav-link"
        >
          Play
        </Link>
        <p>{formatCurrency(profile.money)}</p>

        <Link to={"/information"}>
          <BsInfoSquareFill />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
