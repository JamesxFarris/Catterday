document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});

function initThemeSelector() {
  const themeSelect = document.getElementById("theme-select");
  const themeStylesheetLink = document.getElementById("theme-link");
  const currentTheme = localStorage.getItem("theme") || "berry";
  /*const themeName = document.getElementById("theme-select__option");*/

  function activateTheme(themeName) {
    themeStylesheetLink.setAttribute(
      "href",
      `./assets/css/themes/${themeName}.css`
    );
  }

  themeSelect.addEventListener("change", () => {
    activateTheme(themeSelect.value);
    localStorage.setItem("theme", themeSelect.value);
  });

  themeSelect.value = currentTheme;
  activateTheme(currentTheme);
}

initThemeSelector();

// The Cat API PFP generator

// Set API key and random generation
//https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&api_key=live_KULAB6Q6C5nRiOmP6JBL8sUPO1JZVLtX8ATQ7SLsyx1OLOm17OTusE9cTS2FHhJs
const key =
  "live_IuAES9fgyPFKbRIUDyuiknTrTROTwwAvHRLQzFwJZWymlk80RQYtXA0N3sJgAojz";
const API_URL =
  "https://api.thecatapi.com/v1/images/search?api_key=" + key + "&order=RAND";

const catAPIURL =
  "https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&api_key=live_KULAB6Q6C5nRiOmP6JBL8sUPO1JZVLtX8ATQ7SLsyx1OLOm17OTusE9cTS2FHhJs";

function generateCatAPI() {
  fetch(catAPIURL)
    .then(function (response) {
      /*if(response.ok) {
                    return response.json()
                } else {alert('Error' + response.status)}*/
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      generateCatInfo(data);
    });
}

// Image Generation 1-10
function generateCatInfo(data) {
  console.log(data);
  let feedCards = [
    {
      cardnum: 1,
      listnum: 0,
    },
    {
      cardnum: 2,
      listnum: 1,
    },
    {
      cardnum: 3,
      listnum: 2,
    },
    {
      cardnum: 4,
      listnum: 3,
    },
    {
      cardnum: 5,
      listnum: 4,
    },
    {
      cardnum: 6,
      listnum: 5,
    },
    {
      cardnum: 7,
      listnum: 6,
    },
    {
      cardnum: 8,
      listnum: 7,
    },
    {
      cardnum: 9,
      listnum: 8,
    },
    {
      cardnum: 10,
      listnum: 9,
    },
  ];
  let finalCard = feedCards.length;
  let currentCardI = 0;
  for (currentCardI; currentCardI < finalCard; currentCardI++) {
    let currentCardNum = feedCards[currentCardI].cardnum;
    let currentListNum = feedCards[currentCardI].listnum;
    //const generatedPFP = document.querySelectorAll("generated__pfp1");
    let generatedPFP = document.getElementById(
      "generated__pfp" + currentCardNum
    );
    let breedCont = document.getElementById("breedcont" + currentCardNum);
    /*let test = "generated__pfp" + currentCardNum;
    console.log(test);*/
    generatedPFP.setAttribute("src", data[currentListNum].url);

    console.log(data[currentListNum].url);
    breedCont.innerHTML = data[currentListNum].breeds[0].name;
    console.log(data[currentListNum].breeds[0].name);
    // apply image to pfps
    //apply breed type to card
  }
}
generateCatAPI();

// GET AND APPEND CURRENT DATE TO CARDS WITH JS
let today = dayjs().format(" - MMM DD, YYYY");
console.log(today);
let currentDateNodes = document.querySelectorAll(".currentday");
console.log(currentDateNodes);
for (i = 0; i < currentDateNodes.length; i++) {
  currentDateNodes[i].textContent = today;
}

function initProfileSelector() {
  let profileOptions = document.querySelectorAll(".profile-pic__option");
  let profilePictures = document.querySelectorAll(".profile__image");
  let currentPfp = localStorage.getItem("pfpsrc");
  console.log("getitem return: " + currentPfp);
  function activatePFP(pfpsrc) {
    for (
      let profilePicturesI = 0;
      profilePicturesI < profilePictures.length;
      profilePicturesI++
    ) {
      profilePictures[profilePicturesI].setAttribute("src", pfpsrc);
    }
  }
  for (let i = 0; i < profileOptions.length; i++) {
    profileOptions[i].addEventListener("click", function () {
      console.log("test");
      let pfpSrcInput = profileOptions[i].getAttribute("src");
      console.log(pfpSrcInput);
      localStorage.setItem("pfpsrc", pfpSrcInput);
      activatePFP(localStorage.getItem("pfpsrc"));
    });
    activatePFP(currentPfp);
    if (currentPfp === null) {
      activatePFP("https://bulma.io/images/placeholders/96x96.png");
    }
  }
}
initProfileSelector();

function initUsernameSelector() {
  let usernameSaveButton = document.querySelector(".name-save");
  let userPasswordEntryCont = document.querySelector(".name-space");
  let currentUsername = localStorage.getItem("userpassword");
  let usernameInputs = document.querySelectorAll(".profile__usernameinput");
  function activateUsername(usernameval) {
    for (let usernameI = 0; usernameI < usernameInputs.length; usernameI++) {
      usernameInputs[usernameI].textContent = usernameval;
      userPasswordEntryCont.setAttribute("placeholder", usernameval);
    }
  }
  usernameSaveButton.addEventListener("click", function () {
    console.log("user save clicked");
    let userPasswordEntry = $(userPasswordEntryCont).val();
    console.log(userPasswordEntry);
    localStorage.setItem("userpassword", userPasswordEntry);
    activateUsername(localStorage.getItem("userpassword"));
  });
  activateUsername(currentUsername);
  if (currentUsername === null) {
    activateUsername("Customize Profile!");
  }
}
initUsernameSelector();

function initSaveBio() {
  let saveBioButton = document.querySelector(".save-bio");
  let bioCont = document.querySelector(".bio-box__input");
  let currentBio = localStorage.getItem("userbio");
  function activateBio(bioval) {
    bioCont.setAttribute("placeholder", bioval);
  }
  saveBioButton.addEventListener("click", function () {
    console.log("bio clicked");
    let userBioEntry = $(bioCont).val();
    console.log(userBioEntry);
    localStorage.setItem("userbio", userBioEntry);
    activateBio(currentBio);
  });
  activateBio(currentBio);
  if (currentBio === null) {
    activateBio("Save a username and bio!");
  }
}
initSaveBio();
//let currentDates = Array.from(currentDateNodes);
//console.log(currentDates);
//console.log(currentDate);
//currentDates.forEach(textContent = today);

const catUsernames = [
  "@Kitty_Cat39",
  "@Fluffy_Cat32",
  "@Mewcat1000",
  "@Kitten_Hiss09",
  "@Mewman25",
  "@Fluffykitty99",
  "@Catdude01",
  "@Fluffyfluff_08",
  "@Cuddles771",
  "@Meow_Meow1",
  "@Da_Best_Cat2",
  "@The_Cat_Man8",
  "@Cat_on_here556",
  "@Scratchthecat4",
  "@Post_Mewlone",
  "@Litterbug02",
  "@MewCatMew5",
  "@The_Katt_Cat",
  "@Fluffy_Mike66",
  "@Catman_Stan34",
  "@Thisbowlisempty",
  "@Meowsat3amlive",
  "@The_Cat_is_Back",
  "@Thereturnofthekitten",
  "@Cuddlebug33",
  "@CatsWeeklyOffical",
  "@Catsweekly_real42",
  "@Fluff_Stuff899",
  "@Cathy56",
  "@CathleticCo",
  "@TodayinHisstory",
  "@HissingHeather09",
  "@MarlinLeMew77",
  "@John-Catams",
  "@William-Howard-Cat",
  "@Sir-Isaac-Mewton",
  "@Amewlia-Earhart",
  "@Catpurrnicus",
  "@Mewoses",
  "@Cleocatra",
  "@Hisston-Churchill",
  "@Oedipuss",
  "@William-Shakespaw",
  "@Mewlius-Caesar",
  "@Genghis-Kat",
  "@ElonMeowsk",
  "@Marie-Purrie",
  "@Furrdinand-Marcos",
  "@Fluffed_Feline88",
  "@FelineFamilyMan0308",
  "@FredtheFluff10",
  "@Alleycat99",
  "@Ieatplastic",
  "@Fluffypants92",
  "@Not_a_Cat_",
  "@Catsrule22",
  "@TheCCS",
  "@PostsOfTheNCO",
  "@TheCatThatSmilesBack",
  "@KittenLoaf78",
  "@ImFelineFine",
  "@BeachCat56",
  "@aDog???",
  "@CountUrCats123",
  "@Apawllo",
  "@Barack-Obameow",
  "@Bob_Meowley",
  "@Lucifur",
  "@Catrick_Swayze",
  "@Catsy-Cline",
  "@Pawdrey-Hepburn",
  "@Bob",
  "@Tom",
  "@Fuzz_Aldrin",
  "@Ruth_Bader_Ginspurr",
];

let randomIndex = Math.floor(Math.random() * catUsernames.length);
const randomItem = catUsernames[randomIndex];
const randomItemElement = document.getElementById("generatedUsername");

function randomizeUsername() {
  let randomIndex = Math.floor(Math.random() * catUsernames.length);
}
randomItemElement.textContent = randomItem;

function generateCatUsername() {
  let catProfileNodes = document.querySelectorAll(".generatedUsername");
  for (let catUserI = 0; catUserI < catProfileNodes.length; catUserI++) {
    //randomizeUsername();
    catProfileNodes[catUserI].textContent = catUsernames[randomIndex++];
  }
}

generateCatUsername();

function generateDadAPI() {
  let pageNumbers = [];

  for (var i = 0; i <= 75; i++) {
    pageNumbers.push(i);
  }
  var randomPageNumber =
    pageNumbers[Math.floor(Math.random() * pageNumbers.length)];
  console.log(randomPageNumber);
  let randomDadURL =
    "https://icanhazdadjoke.com/search?limit=10&page=" +
    randomPageNumber +
    "&=";

  fetch(randomDadURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      /*if(response.ok) {
                  return response.json()
              } else {alert('Error' + response.status)}*/
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      generateJokeInfo(data);
    });

  /*.then(
      (data) => (document.getElementById("content").textContent = data.joke)
    )*/

  //.catch((error) => console.log("ERROR"));
}
generateDadAPI();
function generateJokeInfo(data) {
  let jokeNodes = document.querySelectorAll(".content-input");
  let jokeListNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (i = 0; i < jokeNodes.length; i++) {
    jokeNodes[i].textContent = data.results[jokeListNum[i]].joke;
  }
}
