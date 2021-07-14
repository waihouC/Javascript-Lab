let choices = {
  'lobster': 200,
  'porkchops': 50,
  'oysters': 250,
  'lambchops': 35,
  'rawfish': 15
}

let mostExpensive = 0;
let mostExpensiveMenu = "";
for (let [key, value] of Object.entries(choices)) {
  if (value > mostExpensive) {
    mostExpensive = value;
    mostExpensiveMenu = key;
  }
}

let menuBlock = document.querySelector("#menu");
menuBlock.addEventListener("click", function() {
  let items = [];
  let totalPrice = 0;
  let checkboxes = document.querySelectorAll(".choice");
  for (let c of checkboxes) {
    if (c.checked) {
      items.push(c.value);
      totalPrice += choices[c.value];

      if (choices[c.value] === mostExpensive) {
        console.log(`You have bought the costly ${mostExpensiveMenu}`);
      }
    }
  }
  console.log(`Total Price: ${items} : ${totalPrice}`);
})