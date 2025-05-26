const highscores = [
  { name: "KingenAhmed", score: 1090 },
  { name: "AbdullaKlivaren", score: 950 },
  { name: "Mehmet123", score: 890 }
];

window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("highscore-list");

  highscores.forEach(player => {
    const li = document.createElement("li");
    li.textContent = `${player.name}: ${player.score} poäng`;
    list.appendChild(li);
  });
});