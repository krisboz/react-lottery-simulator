import Collapsible from "react-collapsible";
import "../styles/Information.css";

const Information = () => {
  const returnTable = () => {
    return (
      <table className="perc-table">
        <thead>
          <tr>
            <th>Combinations</th>
            <th>Percentages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 + 2</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>5 + 1</td>
            <td>2.8%</td>
          </tr>
          <tr>
            <td>5 + 0</td>
            <td>0.53%</td>
          </tr>
          <tr>
            <td>4 + 2</td>
            <td>0.016%</td>
          </tr>
          <tr>
            <td>4 + 1</td>
            <td>0.0009%</td>
          </tr>

          <tr>
            <td>3 + 2</td>
            <td>0.00046%</td>
          </tr>
          <tr>
            <td>4 + 0</td>
            <td>0.00032%</td>
          </tr>
          <tr>
            <td>2 + 2</td>
            <td>0.00074%</td>
          </tr>

          <tr>
            <td>3 + 1</td>
            <td> 0.000057%</td>
          </tr>
          <tr>
            <td>3 + 0</td>
            <td>0.000049%</td>
          </tr>
          <tr>
            <td>1 + 2</td>
            <td>0.000037%</td>
          </tr>
          <tr>
            <td>2 + 1</td>
            <td>0.000029%</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="information-container">
      <h1>Information</h1>
      <Collapsible trigger={`Basic info`}>
        {" "}
        <p className="info-content">
          This game is a direct copy of the EuroJackpot system. Every player
          picks 5 <i>Numbers</i> from 1 to 50 and 2 <i>Euro Numbers</i> from 1
          to 12.
        </p>
        <p className="info-content">
          They are then compared to the winning draw and based on the number of
          correct numbers the players' winnings are calculated.
        </p>
        <p className="info-content">
          Detailed table of percentages used to calculate the winnings is under
          the
          <b> Winnings Calculation Scheme</b> collapsible.
        </p>
      </Collapsible>

      <Collapsible trigger="Game Details">
        <p className="info-content">
          Each ticket costs 2€ just like in real life and is subtracted from the
          players budget based on the number of tickets the person has.
        </p>
        <p className="info-content">
          For every round the game simulates 250.000 random tickets that
          represent other players. The App can simulate more people but to
          ensure reasonable waiting times for most users it's capped to 250.000
        </p>
        <p className="info-content">
          Every round the jackpot is not claimed it gets incremented by
          €500.000,00 up until the cap of €120.000.000,00, if the jackpot is
          claimed its value goes down to €20.000.000,00
        </p>
      </Collapsible>

      <Collapsible
        trigger={"Winnings Calculation Scheme"}
        className="table-container"
      >
        <p className="info-content">
          The Jackpot is calculated using the table below.
        </p>
        <p className="info-content">
          It was difficult to find official information on how they calculate
          winnings, so I took an already played Eurojackpot draw and calculated
          the winning percentages from that.
        </p>

        <p className="info-content">
          It's important to note that in real life the percentages vary based on
          total players, total money won, and a myriad of other factors but for
          the purposes of this app I believe it to be sufficient.
        </p>
        {returnTable()}
      </Collapsible>
    </div>
  );
};

export default Information;
