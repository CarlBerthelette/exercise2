
const img = document.getElementById('dogsAPI');

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson.message);
   document.getElementById("dogsAPI").src = myJson.message;
 
});


const button = document.getElementById('button-id');

button.addEventListener('click', function () {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson.message);
     document.getElementById("dogsAPI").src = myJson.message;
   
  })
});