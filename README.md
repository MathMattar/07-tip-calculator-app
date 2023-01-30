# Frontend Mentor - Intro component with sign up form

Esta é uma solução para o desafio da [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Os desafios do Mentor de Frontend ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Índice

- [Resumo](#resumo)
  - [Desafio](#desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Processo](#processo)
  - [Construção](#construção)
  - [Aprendizado](#aprendizado)
- [Recursos](#recursos)
- [Autor](#autor)

## Resumo

Calculadora de gorjeta.

### Desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o site, dependendo do tamanha da tela do dispositivo;
- Estados de foco para todos os elementos interativos na página;
- Calcular a gorjeta correta e o custo total da conta por pessoa.

### Screenshot

<p align="center">
    <img width="375px" src="./assets/presentation/mobile.jpg"></img>
</p>

------

<p align="center">
    <img width="768px" src="./assets/presentation/tablet.jpg"></img>
</p>

------

<p align="center">
    <img width="768px" src="./assets/presentation/desktop.jpg"></img>
</p>

### Links

- Site: [Tip Calculator](https://mathmattar.github.io/07-tip-calculator-app/);

## Processo

### Construção

- Marcação semântica HTML5;
- Padrão BEM;
- Propriedades personalizadas CSS;
- Variáveis CSS;
- CSS Pseudo-classes;
- CSS Flexbox;
- CSS Grid;
- JavaScript.

### Aprendizado

Aprimorando minhas habilidades com a metodologia HTML BEM.

```HTML
<fieldset class="tip">
	<legend class="info__label">Select Tip %</legend>

	<div class="tip__grid">
		<button type="button" class="tip__button" id="btn-one" value=".05">5%</button>
		<button type="button" class="tip__button" id="btn-two" value=".10">10%</button>
		<button type="button" class="tip__button" id="btn-three" value=".15">15%</button>
		<button type="button" class="tip__button" id="btn-four" value=".25">25%</button>
		<button type="button" class="tip__button" id="btn-five" value=".5">50%</button>
		<input type="number" class="tip__button--custom" id="btn-six" placeholder="Custom">
	</div>

-----------
    
<section class="calculator--result">
	<section class="container-result">
		<div class="result">
			<div class="text">
				<h1 class="text__title">Tip Amout</h1>
				<p class="text__paragraph">/ person</p>
			</div>
			<div class="result__calculation" id="result-tip">$0.00</div>
		</div>

		<div class="result">
            <div class="text">
				<h1 class="text__title">Total</h1>
				<p class="text__paragraph">/ person</p>
			</div>
			<div class="result__calculation" id="result-total">$0.00</div>
		</div>
	</section>

	<button type="reset" class="calculator__reset --opacity-on" id="reset">Reset</button>
</section>
```

-----

Aprimorando e me adaptando na utilização de váriaveis CSS.

```css
:root {
    /* color */
    --strong-cyan: hsl(172, 67%, 45%);
    --very-dark-cyan: hsl(183, 100%, 15%);
    --dark-grayish-cyan: hsl(186, 14%, 43%);
    --grayish-cyan: hsl(184, 14%, 56%);
    --light-grayish-cyan: hsl(185, 41%, 84%);
    --very-light-grayish-cyan: hsl(189, 41%, 97%);
    --white: hsl(0, 0%, 100%);
    /* font size */
    --size-13: 1.3rem;
    --size-16: 1.6rem;
    --size-18: 1.8rem;
    --size-24: 2.4rem;
    /* width */
    --w-input: 38rem;
    --w-btn-tip: 11.7rem;
    --w-input-mobile: 31.1rem;
    --w-btn-tip-mobile: 14.7rem;
    /* height */
    --w-icon: 1.8rem;
    --h-input-btn: 4.8rem;
    /* padding */
    --p-input: 1.8rem;
    /* border radius */
    --br-input-reset: .6rem;
    --br-btn: .4rem;
}
```

-----

- ``element.addEventListener( "input", (e) => {})``
- ``e.target``
- ``parseFloat()``
- ``element.forEach()``
- Utilizando template strings;
- Novas formas de verificação de dados e divisão de responsabilidades.

```js
//Capturar valores
//conta
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
```

### Recursos

- [BEM: guia definitivo do padrão CSS mais famoso](https://desenvolvimentoparaweb.com/css/bem/)
- [Utilizando propriedades CSS personalizadas (variáveis)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)
- [HTML Element: input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [Event.target](https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target)
- [parseFloat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Recarregar URL](https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload)

## Autor

- Site pessoal - [Mathews Mattar](https://www.linkedin.com/in/mathewsmattar/)

