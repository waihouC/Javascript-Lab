let loadButton = document.querySelector("#load-btn");

loadButton.addEventListener("click", function(){
  // select the parent that we want to add into
  let p = document.getElementById("container");

  // add into the parent using the innerHTML
  p.innerHTML = `
  <h1>Dog Photo</h1>
  <img src="images/puppy.jpg">
  `
})

// Example 1
// let addRandomButton = document.getElementById("add-number-btn");

// addRandomButton.addEventListener("click", function(){
//   // generate a random number btw 1 to 10k
//   let randomNumber = Math.floor(Math.random() * 1000 + 1);
//   // select the container that we want to add into
//   let p = document.getElementById("numbers");
//   // append the new number
//   p.innerHTML = p.innerHTML + `<li>${randomNumber}</li>`;
// })
// **note the ` quote (ES6)**


// Example 2
let addRandomButton = document.getElementById("add-number-btn");

addRandomButton.addEventListener("click", function(){
  // generate a random number btw 1 to 10k
  let randomNumber = Math.floor(Math.random() * 1000 + 1);
  // select the container that we want to add into
  let p = document.getElementById("numbers");
  let newElement = document.createElement("li");
  newElement.innerHTML = randomNumber;
  // append the new number
  p.appendChild(newElement);
})