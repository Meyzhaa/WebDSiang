document.getElementById("alert").addEventListener("click", function() {
  alert("Website Dalam Perbaikan!");
});

document.getElementById("alert2").addEventListener("click", function() {
  alert("Website Dalam Perbaikan!");
});

const kata = ["ROMANCE", "ACTION", "COMEDY", "HORROR"];
let index = 0;

setInterval(() => {
  const genreElement = document.querySelector(".kedua-text");
  genreElement.textContent = kata[index];
  index = (index + 1) % kata.length;
}, 4000);
