const p1 = {
  score: document.querySelector(".score-p1"),
  display: document.querySelector(".p1-display"),
};
const p2 = {
  score: document.querySelector(".score-p2"),
  display: document.querySelector(".p2-display"),
};

const p1Choice = window.addEventListener("keypress", (e) => {
  if (e.key === "1") p1["display"].classList.add("rock-p1");
  if (e.key === "2") p1["display"].classList.add("paper-p1");
  if (e.key === "3") p1["display"].classList.add("scissors-p1");
  return e.key;
});

window.addEventListener("keypress", (e) => {
  if (e.key === "0") p2["display"].classList.add("rock-p2");
  if (e.key === "9") p2["display"].classList.add("paper-p2");
  if (e.key === "8") p2["display"].classList.add("scissors-p2");
});

// --------------------- LOGIC --------------------------

console.log(p1Choice);
