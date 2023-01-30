//Receber valores preenchidos pelo usuario
//Bill
const bill = document.getElementById("bill");
let billValue = 0;

bill.addEventListener("input", (e) => {
  e.preventDefault();
  activeReset();

  billValue = e.target.value.trim();
  billValue = parseFloat(billValue);

  calculation();
});

//Tip
const buttons = document.querySelectorAll(".tip__button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    tipAmout = parseFloat(e.target.value);

    calculation();
  });
});

//Custom tip
let buttonCustom = document.getElementById("btn-six");
let buttonCustomValue = 0;

buttonCustom.addEventListener("input", (e) => {
  e.preventDefault();

  buttons.forEach((btn) => btn.classList.remove("active"));

  buttonCustomValue = e.target.value.trim();
  buttonCustomValue = parseFloat(buttonCustomValue);
  tipAmout = buttonCustomValue / 100;

  calculation();
});

//Number of people
const people = document.getElementById("people");

let peopleValue = 1;

people.addEventListener("input", (e) => {
  e.preventDefault();
  activeReset();

  peopleValue = e.target.value.trim();
  peopleValue = parseFloat(peopleValue);

  if (peopleValue === 0 || isNaN(peopleValue)) {
    peopleValue = 1;
    alert("alert--people", "Can't be zero");
    border(people);
  } else {
    removeAlert("alert--people", people);
  }

  calculation();
});

//View and hide alerts

function alert(element, message) {
  let errorAlert = document.getElementById(element);
  errorAlert.innerHTML = message;
}

function border(element) {
  let input = element;
  input.classList.add("alert__border");
}

function removeAlert(alert, element) {
  input = element;
  document.getElementById(alert).innerHTML = "";
  element.classList.remove("alert__border");
}


//Calculations
let resultTip = document.getElementById("result-tip");
let resultTotal = document.getElementById("result-total");

function calculation() {
  let tipPerPerson;
  let totalPerPerson;

  tipPerPerson = (billValue * tipAmout) / peopleValue;
  totalPerPerson = billValue / peopleValue + tipPerPerson;

  //Print results
  resultTip.innerHTML = `$${tipPerPerson.toFixed(2)}`;
  resultTotal.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

//Reset button
const reset = document.getElementById("reset");

function activeReset(){
  if (bill.value.length || people.value.length){
    reset.classList.remove("--opacity-on");
    reset.classList.add("--opacity-off")
  } else {
    reset.classList.add("--opacity-on");
    reset.classList.remove("--opacity-off")
  }
}

reset.addEventListener("click", (e) => {
  e.preventDefault();

  location.reload();
});