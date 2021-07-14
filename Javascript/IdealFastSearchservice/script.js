const dayType = {
  weekday: {
    adult: 20,
    children: 10
  },
  weekend: {
    adult: 40,
    children: 20
  }
}

const btnCalc = document.querySelector(".calculate-btn");
btnCalc.addEventListener("click", function() {
  let day = "";
  let radios = document.querySelectorAll(".day");
  for (let r of radios) {
    if (r.checked) {
      day = r.value;
      break;
    }
  }

  const noOfAdults = parseInt(document.querySelector("#adult").value);
  const noOfChildren = parseInt(document.querySelector("#children").value);
  
  const {adult, children} = dayType[day];
  const price = noOfAdults * adult + noOfChildren * children;
  console.log(price);
})