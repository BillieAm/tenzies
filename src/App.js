import useTenzies from "./hooks/useTenzies";
import Die from "./components/Die";
import Scores from "./components/Scores";
import Confetti from "react-confetti";

export default function App() {
  const { dice, tenzies, rollsCount, rollDice, holdDice } = useTenzies();

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <Scores rollsCount={rollsCount} />
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
