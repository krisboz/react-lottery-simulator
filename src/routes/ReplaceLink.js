import { useNavigate, Link } from "react-router-dom";

//Used to conditionally navigate pages and not append the link onto the existing url
//but replace the existing link

const ReplaceLink = ({ condition, toIfTrue, toIfFalse, replace, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(condition ? toIfTrue : toIfFalse, { replace });
  };

  return (
    <Link to={condition ? toIfTrue : toIfFalse} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ReplaceLink;
