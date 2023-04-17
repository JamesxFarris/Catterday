

document.getElementById("btn").addEventListener("click", jokes);

// function jokes(){
//   fetch({"https://icanhazdadjoke.com/":})
//               .then(function (response) {
//                   return response.json()
//               })
//               .then(function (data) {
//                   console.log(data)
//               })

// }






  async function jokes(){
    let config = {
      headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json()
  document.getElementById("content").innerHTML = b.jokes;

}
console.log(jokes);