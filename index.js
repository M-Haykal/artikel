let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const ticTacToes = (element, index) => {
  element.value = currentPlayer;
  element.disabled = true;
  cells[index] = currentPlayer;
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  result.innerHTML = `Player ${currentPlayer} Turn`;

  for (let i = 0; i < conditions.length; i++) {
    let condition = conditions[i];
    let a = cells[condition[0]];
    let b = cells[condition[1]];
    let c = cells[condition[2]];

    if (a === b && b === c && a !== "") {
      result.innerHTML = `Player ${a} Won `;
      btns.forEach((btn) => (btn.disabled = true));
    }
  }
};

function reset() {
  cells = ["", "", "", "", "", "", "", "", ""];
  btns.forEach((btn) => {
    btn.value = "";
    btn.disabled = false;
  });
  currentPlayer = "X";
  result.innerHTML = "Player X Turn";
}

document.querySelector("#reset").addEventListener("click", reset);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => ticTacToes(btn, i));
});
