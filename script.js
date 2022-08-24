let firsCard = 10;
let secoundCard = 11;
let cards = [firsCard, secoundCard];
let sum = firsCard + secoundCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.getElementById('cards-el')

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
    sumEl.textContent = `Sum: ${sum} `
    if(sum <= 20) {
        message = "Você quer tirar outra carta?"
    } else if (sum === 21) {
        message = "Parabéns, você fez um Blackjack!"
        hasBlackJack = true
    } else {
        message = "Você está fora do jogo"
        isAlive = false
    }

    messageEl.textContent = message
}

const newCard = () => {
    let card = 7;
    sum += card;
    cards.push(card);
    renderGame();
}

