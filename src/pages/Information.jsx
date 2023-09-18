import Collapsible from "react-collapsible";

const Information = () => {
  /**
   * How it's played
   * Basic info
   * This game is a direct copy of the EuroJackpot system
   * Every player picks 5 regular numbers from 1 to 50
   * and 2 Euro Numbers from 1 to 12
   * They are then compared to the winning draw and based
   * on the number of correct numbers the players' winnings are
   * calculated. Detailed table of percentages used to calculate winnings
   * is under the statistics collapsible.
   *
   * Game details
   * For the player each ticket costs 2€ just like in the real world and
   * is subtracted from the players budget based on the number of tickets the person has.
   * Also for every round the game simulates 250_000 random tickets that represent other
   * players. The App can simulate more people but to ensure reasonable waiting times
   * for most users it's capped to 250000
   *
   * Every round the jackpot is not claimed it gets incremented by 500_000 up until the cap of
   * 120_000_000, if the jackpot is claimed its value goes down to 20_000_000
   *
   * Winnings calulation scheme
   *
   *  Jackpot incrementation, what happens when a jackpot is won
   *
   */

  const returnTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Combinations</th>
            <th>Percentages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 + 1</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>2 + 2</td>
            <td>15%</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="information-container">
      <h1>Information</h1>
      <Collapsible trigger="Basic info">
        <p>
          This game is a direct copy of the EuroJackpot system Every player
          picks 5 regular numbers from 1 to 50 and 2 Euro Numbers from 1 to 12
        </p>
        <p>
          They are then compared to the winning draw and based on the number of
          correct numbers the players' winnings are *calculated.
        </p>
        <p>
          Detailed table of percentages used to calculate winnings is under the
          <b> Winnings Calculation Scheme</b> collapsible.
        </p>
      </Collapsible>

      <Collapsible trigger="Game Details">
        <p>
          Each ticket costs 2€ just like in the real Euro Jackpot and is
          subtracted from the players budget based on the number of tickets the
          person has.
        </p>
        <p>
          For every round the game simulates 250.000 random tickets that
          represent other players. The App can simulate more people but to
          ensure reasonable waiting times for most users it's capped to 250.000
        </p>
        <p>
          Every round the jackpot is not claimed it gets incremented by 500.000
          up until the cap of 120.000.000, if the jackpot is claimed its value
          goes down to 20.000.000
        </p>
      </Collapsible>

      <Collapsible trigger={"Winnings Calculation Scheme"}>
        <p>The Jackpot is calculated using the table below</p>
        <p>Each of the possible combinations with at least 3 correct numbers</p>
        <p>
          gets assigned a percentage that represents the percentage of the
          current jackpot aka winnings
        </p>
        {returnTable()}
      </Collapsible>
    </div>
  );
};

export default Information;
