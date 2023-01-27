const form = document.getElementById("calculator");
const bill = document.getElementById("bill");
const buttons = document.querySelectorAll(".tip__button");
const people = document.getElementById("people");
const reset = document.getElementById("reset");

let buttonCustom = document.getElementById("btn-six");
let resultTip = document.getElementById("result-tip");
let resultTotal = document.getElementById("result-total");

//Verificar arquivos em branco, exibir e ocultar alertas
function checkData() {
  if (bill.value === "") {
    alert("alert--bill", "Can't be zero");
    border(bill);
  } else {
    removeAlert("alert--bill", bill);
  }

  if (people.value === "") {
    alert("alert--people", "Can't be zero");
    border(people);
  } else {
    removeAlert("alert--people", people);
  }
}

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

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  checkData();
});

//Capturar valores: Bill, Tip Amount e Number of People

bill.addEventListener("input", (e) => {
  e.preventDefault();
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

buttonCustom.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(buttonCustom.value);
});

people.addEventListener("input", (e) => {
  e.preventDefault();
});

//Equação

let billValue = bill.value;
let tipButton = document.querySelector(".tip__button.active");
let tipCustom = buttonCustom.value;
let numberOfPeople = people.value;

console.log(tipCustom)

//Imprimir resultado

//Reset
reset.addEventListener("click", (e) => {
  e.preventDefault();

  location.reload();
});
