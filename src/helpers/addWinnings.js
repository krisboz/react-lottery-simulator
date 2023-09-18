import { setMoney } from "../redux/profileSlice";

const addWinningsToMoney = (money, dispatch, winnings) => {
  const updatedMoney = parseFloat(money) + parseFloat(winnings);
  dispatch(setMoney(updatedMoney.toFixed(2)));
};

export default addWinningsToMoney;
