let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function handleCellClick(index) {
  if (board[index] === "" && !isGameOver()) {
    board[index] = currentPlayer;
    renderBoard();
    if (checkWinner()) {
      document.getElementById("message").innerText = `Player ${currentPlayer} wins!`;
    } else if (isBoardFull()) {
      document.getElementById("message").innerText = "It's a tie!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("message").innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function renderBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function isBoardFull() {
  return !board.includes("");
}

function isGameOver() {
  return checkWinner() || isBoardFull();
}

document.getElementById("message").innerText = `Player ${currentPlayer}'s turn`;
renderBoard();
