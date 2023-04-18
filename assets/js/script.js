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
  console.log("generate info: " + data);
  for (let i = 0; i < 10; i++) {
    const generatedPFP = document.querySelectorAll("generated__pfp");

    // fetch
    /*fetch(API_URL)
    .then((response) => response.JSON)

    // pull data and change source
    .then((data) => {
      const pfpURL = data[0].url;
      generatedPFP.src = pfpURL;
    });*/

    // apply image to pfps
  }
}
generateCatAPI();
