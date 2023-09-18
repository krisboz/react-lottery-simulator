import { updateHighScore } from "../redux/profileSlice";

const checkWinHiScore = (winnings) => (dispatch, getState) => {
  const highScore = getState().profile.highScore;
  console.log(highScore, winnings);
};

export default checkWinHiScore;
