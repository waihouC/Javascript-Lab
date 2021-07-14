let btn = document.querySelector("#process-btn");
btn.addEventListener('click', function(){
  // extract out the product name
  let t = document.querySelector('#product-name');
  let productName = t.value;
  console.log(productName);
});

// let btn2 = document.querySelector("#swap-btn");
// btn2.addEventListener('click', function(){
//   let r = document.querySelector('#right');
//   let right = r.value;

//   let l = document.querySelector('#left');
//   r.value = l.value;
//   l.value = right;
// });

let btn2 = document.querySelector('#swap-btn');
btn2.addEventListener('click', function(){
  const textbox1 = document.querySelector('#left');
  const textbox2 = document.querySelector('#right');
  const temp = textbox1.value;
  textbox1.value = textbox2.value;
  textbox2.value = temp;
});

let radiobtnblock = document.querySelector("#radio-btn-block");
radiobtnblock.addEventListener('click', function(){
    let radios = document.querySelectorAll('.product-type');
    let selectedProductType = "";
    for (let r of radios) {
      if (r.checked) {
        selectedProductType = r.value;
        console.log(selectedProductType)
        break;
      }
  }
})

let checkboxbtnblock = document.querySelector("#checkbox-btn-block");
checkboxbtnblock.addEventListener('click', function() {
  let selectedSizes=[];
  let checkboxes = document.querySelectorAll('.size');
  for (let c of checkboxes) {
    if (c.checked) {
      selectedSizes.push(c.value);
    }
  }
  console.log(selectedSizes);
})


// dynamic rendering
let product_types = [
  {
      type: 'digital',
      display_name: "Digital"
  },
  {
      type: 'physical',
      display_name: 'Physical'
  },
  {
      type: 'service',
      display_name: "Online service"
  }
]

let productTypeDiv = document.querySelector("#product-types");
for (let p of product_types) {
    let spanElement = document.createElement("span");
    spanElement.innerHTML = `<input type="radio"
                              name="product-type" 
                              class="product-type"
                              value="${p.type}"/>  
                              <span>${p.display_name}</span>`;
    productTypeDiv.appendChild(spanElement);
}
