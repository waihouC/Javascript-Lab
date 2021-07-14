let loadButton = document.querySelector('#load-btn');
loadButton.addEventListener('click', function(){
    // 1. Select the parent that we want to add into
    let p = document.getElementById('container');

    // 2. Add into the parent using the innerHTML
    p.innerHTML=`
        <h1>Welcome to my Dog's Photo Album</h1>
        <img src="images/puppy.jpg"/>
    `;
})

// let addRandomButton = document.getElementById('add-number-btn');
// addRandomButton.addEventListener('click', function(){
//     // generate a random number between 1 to 100000
//    let randomNumber = Math.floor(Math.random() * 10000 + 1);
//    // 1. select the container that we want add into
//    let p = document.getElementById('numbers');
//    // 2. Append in the new random number
//    p.innerHTML = p.innerHTML + `<li>${randomNumber}</li>`;
// })

let addRandomButton = document.getElementById('add-number-btn');
addRandomButton.addEventListener('click', function(){
    // generate a random number between 1 to 100000
   let randomNumber = Math.floor(Math.random() * 10000 + 1);
   // 1. select the container that we want add into
   let p = document.getElementById('numbers');
   let newElement = document.createElement('li');
   newElement.innerHTML = randomNumber + "";
   // 2. Append in the new random number
   p.appendChild(newElement);
})


