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
