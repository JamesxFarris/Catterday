function fetchAPI() {
  var limit = 9;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
    headers: { "X-Api-Key": "5TI+HKFoXcZunYlBIFs2dg==RmI4ETgeWKcZvWf1" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

// //- Using a function pointer:
// document.getElementById("api").onclick = fetchAPI;

// fetch({function name(params) {

// }})
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (data) {
//                 console.log(data)
