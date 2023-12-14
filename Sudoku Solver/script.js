document.addEventListener("DOMContentLoaded", function () {
    const boardContainer = document.getElementById("sudoku-board");
    const sudokuBoard = generateSudokuBoard();
    renderSudokuBoard(sudokuBoard, boardContainer);
  });
  
  function generateSudokuBoard() {
    // You can replace this with your own Sudoku generation algorithm
    // For simplicity, we'll use a static Sudoku board here
    const board = [
      [5, 3, "", "", 7, "", "", "", ""],
      [6, "", "", 1, 9, 5, "", "", ""],
      ["", 9, 8, "", "", "", "", 6, ""],
      [8, "", "", "", 6, "", "", "", 3],
      [4, "", "", 8, "", 3, "", "", 1],
      [7, "", "", "", 2, "", "", "", 6],
      ["", 6, "", "", "", "", 2, 8, ""],
      ["", "", "", 4, 1, 9, "", "", 5],
      ["", "", "", "", 8, "", "", 7, 9]
    ];
  
    return board;
  }
  
  function renderSudokuBoard(board, container) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if ((i < 3 || i >= 6) && (j < 3 || j >= 6)) {
          cell.classList.add("region");
        }
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.value = board[i][j] === "" ? "" : board[i][j];
        input.disabled = board[i][j] !== "";
        input.addEventListener("input", function (event) {
          handleCellInput(event, i, j, board);
        });
        cell.appendChild(input);
        container.appendChild(cell);
      }
    }
  }
  
  function handleCellInput(event, row, col, board) {
    const inputValue = event.target.value;
    // Validate input (allow only numbers from 1 to 9)
    if (/^[1-9]$/.test(inputValue)) {
      board[row][col] = inputValue;
    } else {
      event.target.value = "";
      board[row][col] = "";
    }
  }
  
  // Add Sudoku-solving algorithms, validation, and more as needed.
  