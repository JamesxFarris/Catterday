document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
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

// function fetchAPI(){

//     var limit = 9
//     $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
//         headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//         contentType: 'application/json',
//         success: function(result) {
//             console.log(result);
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }
//     });
// }

// document.getElementById('api', fetchAPI){
//     let pop = document.textContent('These Dad Jokes SUCK!!')
//     pop.fetchAPI

// }

