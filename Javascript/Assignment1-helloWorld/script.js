
// Click on change text
// let header = document.getElementById("title");
// header.innerHTML = "Goodbye World";

// let headers = document.getElementsByClassName("title3");
// console.log(headers);

// let tags = document.getElementsByTagName("h1");
// console.log(tags);

// let names = document.getElementsByName("header-name");
// console.log(names);

// need to specify element type for query selector
// let queryHeader = document.querySelector("#title");
// queryHeader.innerHTML = "Query World";

let queryHeaders = document.querySelectorAll(".title3");
for (let h of queryHeaders) {
  //h.innerHTML = "New Query";
  h.style.backgroundColor = "yellow";
}

// add event listener to button click
// document.getElementById("my-button").addEventListener("click", function(){
//   let header = document.getElementById("title");
//   header.innerHTML = "Goodbye World";
// })

// Toggle between hello and goodbye upon click event listener
document.getElementById("my-button").addEventListener("click", function(){
  let header = document.getElementById("title");
  if (header.innerHTML == "Hello World") {
    header.innerHTML = "Goodbye World";
    header.style.color = "green";
    header.style.fontSize = "30px";
  }
  else {
    header.innerHTML = "Hello World";
    header.style.color = "red";
    header.style.fontSize = "20px";
  }
})




// Toggle mouseenter/mouseleave example, setTimeout 
document.getElementById("title").addEventListener("mouseenter", function(){
  let header = document.getElementById("title");
  header.innerHTML = "Mouse entered";
  setTimeout(()=> {header.innerHTML = "Hello World";}, 2000);
})

document.getElementById("title").addEventListener("mouseleave", function(){
  let header = document.getElementById("title");
  header.innerHTML = "Mouse leaved";
})