`use strict`;

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
document.querySelector(`.box-for-secret-number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {

    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector(`.message`).textContent = `No Message ⛔`;
    }
    else if (guess === secretNumber) {
        document.querySelector(`.message`).textContent = `Correct Number🎉`;
    }
    else if (guess > secretNumber) {
        

        document.querySelector(`.message`).textContent = `Too High 📈`;
        score--;
        document.querySelector(`.score-change`).textContent = score;
    }
    else if (guess < secretNumber) {
        document.querySelector(`.message`).textContent = `Too Low 📉`;
        score--;
        document.querySelector(`.score-change`).textContent = score;
    }

})