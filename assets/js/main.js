const form = document.getElementById("calculator");

//Exibir e ocultar alertas

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

//Capturar valores
//Conta
const bill = document.getElementById("bill");
let billValue = 0;

bill.addEventListener("input", (e) => {
  e.preventDefault();
  activeReset();

  billValue = e.target.value.trim();
  billValue = parseFloat(billValue);

  calculation();
});

//Gorjeta
const buttons = document.querySelectorAll(".tip__button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    tipAmout = parseFloat(e.target.value);

    calculation();
  });
});

//Gorjeta customizada
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

//Número de pessoas
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

//Calculo
let resultTip = document.getElementById("result-tip");
let resultTotal = document.getElementById("result-total");

function calculation() {
  let tipPerPerson;
  let totalPerPerson;

  tipPerPerson = (billValue * tipAmout) / peopleValue;
  totalPerPerson = billValue / peopleValue + tipPerPerson;

  //Imprimir resultado
  resultTip.innerHTML = `$${tipPerPerson.toFixed(2)}`;
  resultTotal.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

//Botão reset
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