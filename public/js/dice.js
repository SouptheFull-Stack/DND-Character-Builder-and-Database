const diceSelect = document.getElementById('dice-select');
const addDieButton = document.getElementById('add-die');
const rollAllButton = document.getElementById('roll-all');
const diceList = document.getElementById('dice-list');
const log = document.getElementById('log');

let dice = [];

function renderDice() {
  diceList.innerHTML = '';
  dice.forEach((die) => {
    const dieElement = document.createElement('div');
    dieElement.classList.add('die');
    dieElement.setAttribute('data-id', die.id);
    dieElement.innerHTML = `
          <div class="row g-3 align-items-center mb-1 d-flex justify-content-center align-items-center">
            <div class="col-auto"><button class="btn btn-danger" onclick="removeDie(${die.id})"><i class="fas fa-trash-alt"></i></button></div>
            <div class="col-auto"><span>D${die.sides}</span></div>
            <div class="col-auto"><input type="number" class="modifier form-control" placeholder="Mod"></div>
            <div class="col-auto"><button class="btn btn-dark" onclick="rollDie(${die.id})">Roll</button></div>
	          <div class="col-auto"><span class="result btn btn-light" id="result-${die.id}"></span></div>
          </div>
      `;
    diceList.appendChild(dieElement);
  });
}

addDieButton.addEventListener('click', () => {
  const dieValue = diceSelect.value;
  const die = { sides: parseInt(dieValue), id: Date.now() };
  dice.push(die);
  renderDice();
});

rollAllButton.addEventListener('click', () => {
  log.innerHTML = '';
  dice.forEach((die) => rollDie(die.id));
});

window.removeDie = (id) => {
  dice = dice.filter(d => d.id !== id);
  renderDice();
}

window.rollDie = async (id) => {
  log.innerHTML = '';
  const die = dice.find((d) => d.id === id);
  const response = await fetch(`/roll?sides=${die.sides}`);
  const data = await response.json();
  const result = data.result;
  const dieElement = document.querySelector(`.die[data-id="${id}"]`);
  const modifierInput = dieElement.querySelector('.modifier');
  const modifier = parseInt(modifierInput.value) || 0;
  const finalResult = result + modifier;

  // Update the result span with the roll result
  const resultSpan = dieElement.querySelector(`#result-${id}`);
  resultSpan.textContent = `Result: ${finalResult}`;

  logRoll(`Rolled D${die.sides} with Mod ${modifier} = ${result} + ${modifier} = <str class="finalres">${finalResult}</str>`);
};

function logRoll(message) {
  
  const logEntry = document.createElement('div');
  logEntry.classList.add('pad-it'),
  logEntry.innerHTML = message;
  log.appendChild(logEntry);
}
