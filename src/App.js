import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square/Square";

function App() {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let restartText = "";
  const [squareValues, setSquareValues] = useState(Array(9).fill(""));
  const currentPlayer =
    squareValues.filter((value) => value !== "").length % 2 === 0 ? "X" : "O";
  let status = `C'est à ${currentPlayer} de jouer`;

  const handleClick = (index) => {
    if (
      squareValues[index] === "" &&
      status !== "Le joueur X a gagné" &&
      status !== "Le joueur O a gagné"
    ) {
      const updatedValues = [...squareValues];
      updatedValues[index] = currentPlayer;
      setSquareValues(updatedValues);
    }
  };

  if (
    (squareValues[0] === "X" &&
      squareValues[1] === "X" &&
      squareValues[2] === "X") ||
    (squareValues[3] === "X" &&
      squareValues[4] === "X" &&
      squareValues[5] === "X") ||
    (squareValues[6] === "X" &&
      squareValues[7] === "X" &&
      squareValues[8] === "X") ||
    (squareValues[0] === "X" &&
      squareValues[3] === "X" &&
      squareValues[6] === "X") ||
    (squareValues[1] === "X" &&
      squareValues[4] === "X" &&
      squareValues[7] === "X") ||
    (squareValues[2] === "X" &&
      squareValues[5] === "X" &&
      squareValues[8] === "X") ||
    (squareValues[0] === "X" &&
      squareValues[4] === "X" &&
      squareValues[8] === "X") ||
    (squareValues[2] === "X" &&
      squareValues[4] === "X" &&
      squareValues[6] === "X")
  ) {
    status = "Le joueur X a gagné";
  } else if (
    (squareValues[0] === "O" &&
      squareValues[1] === "O" &&
      squareValues[2] === "O") ||
    (squareValues[3] === "O" &&
      squareValues[4] === "O" &&
      squareValues[5] === "O") ||
    (squareValues[6] === "O" &&
      squareValues[7] === "O" &&
      squareValues[8] === "O") ||
    (squareValues[0] === "O" &&
      squareValues[3] === "O" &&
      squareValues[6] === "O") ||
    (squareValues[1] === "O" &&
      squareValues[4] === "O" &&
      squareValues[7] === "O") ||
    (squareValues[2] === "O" &&
      squareValues[5] === "O" &&
      squareValues[8] === "O") ||
    (squareValues[0] === "O" &&
      squareValues[4] === "O" &&
      squareValues[8] === "O") ||
    (squareValues[2] === "O" &&
      squareValues[4] === "O" &&
      squareValues[6] === "O")
  ) {
    status = "Le joueur O a gagné";
  }

  if (
    squareValues.every((value) => value !== "") ||
    status === "Le joueur X a gagné" ||
    status === "Le joueur O a gagné"
  ) {
    restartText = "Rejouer";
  }
  if (
    squareValues.every((value) => value !== "") &&
    status === `C'est à ${currentPlayer} de jouer`
  ) {
    status = "Match nul";
  }

  const handleRestart = () => {
    setSquareValues(Array(9).fill(""));
  };
  return (
    <div className="App">
      <p onClick={handleRestart} className="restart">
        {restartText}
      </p>
      <p className={currentPlayer === "X" ? "first-player" : "second-player"}>
        {status}
      </p>
      <div className="board">
        {squares.map((e, index) => (
          <Square
            className={
              squareValues[index] === "X" ? "first-player" : "second-player"
            }
            key={index}
            onClick={() => handleClick(index)}
            value={squareValues[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
