const squares = Array.from(document.querySelectorAll(".btn"));
const reset = document.querySelector(".resetBtn");
let currentPlayer = "X";
let board = Array(9).fill("");
console.log(squares);
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWinner(player) {
  for (let i = 0; i < winningCombinations.length; i++) {
    let currentCombo = winningCombinations[i];
    if (
      board[currentCombo[0]] === player &&
      board[currentCombo[1]] === player &&
      board[currentCombo[2]] === player
    ) {
      return true;
    }
  }
  return false;
}

reset.addEventListener("click", () => {
  currentPlayer = "X";
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    board[i] = "";
    console.log(board);
  }
});

squares.forEach((square, index) => {
  square.addEventListener("click", () => {
    if (square.textContent) {
      return;
    } else {
      board[index] = currentPlayer;
      console.log(board);
      square.textContent = currentPlayer;
      if (checkWinner(currentPlayer)) {
        return alert(`${currentPlayer} wins`);
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
