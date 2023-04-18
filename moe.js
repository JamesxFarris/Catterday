
function fetchAPI(){
  
  fetch("https://icanhazdadjoke.com/",{
    method: 'GET',
    headers: {
      Accept: "application/json",
    }
    
  }).then(res => {
      return res.json()
    })
    .then(data => 
      document.getElementById('content').textContent = data.joke)
      
    .catch(error => console.log('ERROR'))
    
    
}

document.getElementById('btn').addEventListener('click', fetchAPI);

      

      
      
      
      
      
