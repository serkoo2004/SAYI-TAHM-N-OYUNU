document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;
    const attemptsMessage = document.getElementById('attempts-message');
    console.log(attemptsMessage, "attemsMessage");
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const resultMessage = document.getElementById('result-message');
    const restartButton = document.getElementById('restart-button');

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        if(isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultMessage.textContent = 'Lütfen 1 ila 100 arasında bir sayı tahmin et';
            resultMessage.style.color = 'red';
        }else{
            attempts--;
            attemptsMessage.textContent = `kalan hak: ${attempts}`;
            if(userGuess === randomNumber) {
                resultMessage.textContent = 'Tebrikler sayıyı bildiniz';
                resultMessage.style.color = 'green';
                guessButton.style.display = 'none';
                restartButton.style.display = 'block';
            }else if (attempts === 0) {
                resultMessage.textContent = `Hakkınız bitti doğru sayı ${randomNumber} idi`;
                resultMessage.style.color = 'red';
                guessButton.style.display = 'none';
                restartButton.style.display = 'block';
            }else if (guessInput > randomNumber) { 
                resultMessage.textContent = 'sayı daha küçük tekrar dene ';
                resultMessage.style.color = 'orange';
            }else {
                resultMessage.textContent = 'sayı daha büyük tekrar dene';
                resultMessage.style.color = 'orange';
            }
        }

        guessInput.value = '';
    });

    restartButton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 3;
        resultMessage.textContent = '';
        attemptsMessage.textContent = `kalan hak: ${attempts}`;
        guessButton.style.display = 'block';
        restartButton.style.display = 'none';
    });
});
 