import { updateJackpot } from "../redux/generalSlice";

const incrementJackpot = () => (dispatch, getState) => {
  const { jackpot } = getState().general;
  const INCREMENT_BY = 500_000;
  const CAP = 120_000_000;

  if (jackpot < jackpot + INCREMENT_BY && jackpot + INCREMENT_BY <= CAP) {
    const newJackpot = jackpot + INCREMENT_BY;
    const cappedJackpot = Math.min(newJackpot, 120000000);

    dispatch(updateJackpot(cappedJackpot));
  }
};

export default incrementJackpot;
