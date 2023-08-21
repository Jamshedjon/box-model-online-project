const form = document.getElementById("form");
const box = document.getElementById("box");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let w = document.getElementById("w").value;
  let h = document.getElementById("h").value;
  let bgc = document.getElementById("bgc").value;
  let br = document.getElementById("br").value;
  let brc = document.getElementById("brc").value;
  let b = document.getElementById("b").value;
  box.style = `
  width: ${w}px;
  height:${h}px;
  background-color: ${bgc};
  border:${b}px solid;
  border-radius: ${br}px;
  border-color: ${brc};
  `;
});
