const playButton = document.getElementById("play");
const UI = document.getElementById("UI");
const score = document.getElementById("score");
const gameContainer = document.getElementById("game-container");
const gameArea = document.getElementById("game-area");
const player = document.getElementById("player");
const obstacal = document.getElementById("obstacal");
let gameMode = false;

gameContainer.style.display = "none";
playButton.addEventListener("click", () => {
  UI.style.display = "none";
  gameContainer.style.display = "flex";
  gameMode = true;
});

document.addEventListener("keydown", (e) => {
  if (!gameMode && e.key == "Enter") {
    UI.style.display = "none";
    gameContainer.style.display = "flex";
    gameMode = true;
  }
});

let x = 0;
let y = 0;
document.addEventListener("keydown", (e) => {
  if (gameMode && e.key === "ArrowUp") {
    y = y - 5;
    player.style.transform = `translate(${x}px,${y}px)`;
  } else if (gameMode && e.key == "ArrowRight") {
    x = x + 5;
    player.style.transform = `translate(${x}px,${y}px)`;
  } else if (gameMode && e.key == "ArrowDown") {
    y = y + 5;
    player.style.transform = `translate(${x}px,${y}px)`;
  } else if (gameMode && e.key == "ArrowLeft") {
    x = x - 5;
    player.style.transform = `translate(${x}px,${y}px)`;
  }
});

setInterval(() => {
  x = x + 2;
  player.style.transform = `translate(${x}px,${y}px)`;
}, 25);

function translateObstacal(item) {
  setTimeout(() => {
    item.style.transform = "translateX(-110vw)";
  }, 15);
}
setInterval(() => {
  let hurdle = document.createElement("div");
  let hurdleId = document.createAttribute("id");
  hurdleId.value = "obstacal";
  hurdle.setAttributeNode(hurdleId);
  gameArea.append(hurdle);
  translateObstacal(hurdle);
}, 2500);
