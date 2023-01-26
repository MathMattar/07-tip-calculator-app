const form = document.getElementById("calculator");
let bill = document.getElementById("bill");
let tip = document.querySelectorAll(".tip__btn").value;
let tipCustom = document.getElementById("btn-six").value;
let people = document.getElementById("people");

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  checkBill();
  checkPeople();
});

function checkBill() {
  const billValue = bill.value;

  if (billValue === "") {
    alert("alert--bill", "Can't be zero");
    bill.classList.add("alert__border");
  }
}

function checkPeople() {
  const peopleValue = people.value;

  if (peopleValue === "") {
    alert("alert--people", "Can't be zero");
    people.classList.add("alert__border")
  } else {
    alert("alert--people", "")
    people.classList.remove("alert__border")
  }
}

function alert(element, message) {
  let errorAlert = document.getElementById(element);
  errorAlert.innerHTML = message;
}

function errorBorder(element) {
  let input = document.getElementById(element);
}

// function calculator (value, percentage, number){
//     let value = bill.value;
//     let percentage = tip.value;
//     let number = people.value;

//     resultTip = value * (percentage / 100)/ number;
//     resultTotal = resultTip + value;
// }
