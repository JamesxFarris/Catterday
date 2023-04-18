const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7634eefa41msh1843c07eb9053f7p1d55d5jsn6368f2ce6b0a",
    "X-RapidAPI-Host": "playful-usernames.p.rapidapi.com",
  },
};

fetch("https://playful-usernames.p.rapidapi.com/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
