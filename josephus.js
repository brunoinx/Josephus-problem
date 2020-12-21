const inputSoldiers = document.querySelector('.totSoldiers');
const inputJump = document.querySelector('.jumpSize');
const btn = document.querySelector('.btn');
const btnTop = document.querySelector('.btn-group');

const survivor = document.querySelector('.survivor');
const resultCases = document.querySelector('.resultCases');
const orderDeaths = document.querySelector('.orderDeaths');

btn.addEventListener('click', josephusProblem);

btnTop.addEventListener('click', () => {
	const btnScrollTop = window.scrollY;

  window.scrollTo({
    top: -btnScrollTop,
		behavior: "smooth",
  });
});

function scrollToEnd() {
	const btnScrollEnd = document.body.scrollHeight;

  window.scrollTo({
    top: btnScrollEnd,
    behavior: "smooth"
  });
}

function showButtonBackTop() {
	btnTop.classList.add("btn-style");
}

function josephusProblem(event, soldier, k) {
	event.preventDefault();

	soldier = Number(inputSoldiers.value);
	k = Number(inputJump.value);

	let qtdSoldiers = [];
	let deathOrder = [];

	for (let i = 1; i <= soldier; i++) qtdSoldiers.push(i);

	// Uma condição que só permite iniciar o jogo com 2 pessoas ou mais
	if (qtdSoldiers.length <= 1 || k <= 1) {
		resultCases.innerHTML = "";
		orderDeaths.innerHTML = "";
		survivor.innerHTML =  '<h3>Impossivel jogar com menos de 2 pessoas...</h3>';
	} else {
		while (qtdSoldiers.length !== 1) {
			for (let i=1; i < k; i++) {
				qtdSoldiers.push(qtdSoldiers.shift());
			}

			deathOrder.push(qtdSoldiers.shift());
		}

		resultCases.innerHTML = deathOrder.map((elem, idx) => 
			`<p>Case ${idx+1}: ${elem}</p>`
		).join(' ');

		orderDeaths.innerHTML = `<p>Ordem de mortes: <br/>${[deathOrder.join(', ')]}</p>`;

		survivor.innerHTML = `<h3>O sobrevivente  foi o soldado na posição N°${qtdSoldiers[0]}</h3>`;
	}

	scrollToEnd();
}