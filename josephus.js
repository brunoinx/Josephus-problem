const inputSoldiers = document.querySelector('.totSoldiers');
const inputJump = document.querySelector('.jumpSize');
const btn = document.querySelector('.btn');

const survivor = document.querySelector('.survivor');
const resultCases = document.querySelector('.resultCases');
const orderDeaths = document.querySelector('.orderDeaths');

btn.addEventListener('click', josephusProblem);

function josephusProblem(event, soldier, k) {
	event.preventDefault();

	soldier = Number(inputSoldiers.value);
	k = Number(inputJump.value);

	let qtdSoldiers = [];
	let deathOrder = [];
	let arrayCases = [];
	
	for (let i = 1; i <= soldier; i++) qtdSoldiers.push(i);

	// Uma condição que só permite iniciar o jogo com 2 pessoas ou mais
	if (qtdSoldiers.length <= 1) {
		survivor.innerHTML =  '<h3>Impossivel jogar com menos de 2 jogadores...</h3>';
	} else {
		while (qtdSoldiers.length !== 1) {
			qtdSoldiers.push(qtdSoldiers.shift());

			for (let i = 1; i <= (k-1) && qtdSoldiers.length !== 1; i++) {
				deathOrder.push(qtdSoldiers.shift());
			}
			
			// retorna um numero específico de mortes, de acordo com o tamanho do salto - 1;
			for (let i = 1; i <= (k-1); i++) {
				let lastDeaths = deathOrder.filter((elem, idx) => idx > 
					deathOrder.length - k
				).join(', ');

				arrayCases.push(lastDeaths);
			}
		}

		resultCases.innerHTML = arrayCases.map((elem, idx) => 
			`<p>Case ${idx+1}: ${elem}</p>`
		).join(' ');

		orderDeaths.innerHTML = `<p>Ordem de mortes: <br/>${[deathOrder.join(', ')]}</p>`;

		survivor.innerHTML = `<h3>O sobrevivente  foi o soldado na posição N°${qtdSoldiers[0]}</h3>`;
	}
}
