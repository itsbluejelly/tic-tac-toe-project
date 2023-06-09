// OBTAINING REQUIRED ELEMENTS
const playerXBtn = document.getElementById("player-x-button");
const playerOBtn = document.getElementById("player-o-button");
const gameStartBtn = document.getElementById("play-game-button");
const showPlayer = document.getElementById("show-player");
const resetBtn = document.getElementById("reset-button");
const gameCells = document.querySelectorAll("#cell");
const gameContainer = document.querySelector(".game-container");
const selectionBox = document.querySelector(".selection-box");

// SETTING IN-GAME VARIABLES
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 3, 6]
];
let gameStart = false;
let chosenPlayer;
let options = ["","","","","","","","",""];

// FUNCTION TO ALTERNATE PLAYER
function changePlayer(){
    if (chosenPlayer === "O"){
        chosenPlayer = "X"
    }else{
        chosenPlayer = "O"
    }

    showPlayer.innerText = `${chosenPlayer} turn`;
    showPlayer.classList.remove("hidden")
}

// FUNCTION WHEN A CELL IS CLICKED
function cellClicked(element){
    element.classList.add("cursor-pointer");
    const cellIndex = element.getAttribute("cellindex");

    if(options[cellIndex] = "" || !gameStart){
        return;
    }

    updateCell(element, cellIndex);
    checkWinner()
}

// FUNCTION WHEN A CELL IS UPDATED
function updateCell(cell, index){
    options[index] = chosenPlayer;
    cell.textContent = chosenPlayer;
}

// FUNCTION TO CHECK WINNER
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winningConditions.length; i++){
        const condition = winningConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        showPlayer.classList.remove("hidden");
        showPlayer.textContent = `${chosenPlayer} wins!`;
        gameStart = false;
    }
    else if(!options.includes("")){
        showPlayer.classList.remove("hidden");
        showPlayer.textContent = `Draw!`;
        gameStart = false;
    }
    else{
        changePlayer();
    }    
}

// FUNCTION IF EITHER PLAYER BUTTON IS CLICKED
playerOBtn.addEventListener("dblclick", () =>{
    chosenPlayer = "O";
    showPlayer.innerText = `YOU ARE PLAYER ${chosenPlayer}`;
    showPlayer.classList.remove("hidden")
})

playerXBtn.addEventListener("dblclick", () =>{
    chosenPlayer = "X";
    showPlayer.innerText = `YOU ARE PLAYER ${chosenPlayer}`;
    showPlayer.classList.remove("hidden")
})

// FUNCTION WHEN START BUTTON IS CLICKED
gameStartBtn.addEventListener("click", () =>{
    gameStart = true;
    showPlayer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    gameContainer.classList.add("flex");
    selectionBox.classList.add("hidden");
    for (let cell of gameCells){
        cell.addEventListener("click", () => cellClicked(cell))
    }
})

// FUNCTION WHEN REXET BUTTON IS CLICKED
resetBtn.addEventListener("click", () =>{
    gameStart = false;
    options = ["","","","","","","","",""];
    chosenPlayer;
    showPlayer.classList.add("hidden");
    gameContainer.classList.add("hidden");
    gameContainer.classList.remove("flex");
    selectionBox.classList.remove("hidden");
    for (let cell of gameCells){
        cell.innerText = ''
    }
})