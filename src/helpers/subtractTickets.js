import { setMoney } from "../redux/profileSlice";

const subtractTickets = () => (dispatch, getState) => {
  const { money, tickets } = getState().profile;
  const TICKET_COST = 2;
  const accumulatedCost = tickets.length * TICKET_COST;
  const finalMoney = money - accumulatedCost;

  dispatch(setMoney(finalMoney));
};

export default subtractTickets;
