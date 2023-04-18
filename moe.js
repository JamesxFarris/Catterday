// Dad joke api
var api = "https://icanhazdadjoke.com/";

async function jokes() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("api").addEventListener("click", jokes);
  document.getElementById("content").innerHTML = b.jokes;
}
console.log(jokes);
