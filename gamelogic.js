// FUNCTIE DISPLAYWORDSOFAR

// Een string aan elkaar plakken, door over elke letter in het woord heen te loopen.
// Zit die letter er niet in: plak "_ " aan de string.
// Zit die letter er wel in: plak " " aan de string.

// Stappenplan
// • Loggen: wat is "word", wat is "guesses"
// • Javascript "splitten" word.split("") -> ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
// • Maak een output variable (let) met de waarde lege string
// • Een loop maken -> we loopen over ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
// • Elke letter checken: zit de letter in guesses (guess.includes(letter))?
// • If else
// • Zo nee: plak "_ " aan de output variable
// • Zo ja: plak "j " aan de output variable (niet j, maar de letter die we checken)
// • Klaar? -> output string die we hebben gemaakt returnen

function displayWordSoFar(word, guesses) {
  const lettersInWordArray = word.split("");

  let output = "";
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const isLetterGuessed = guesses.includes(letterInWord);

    if (!isLetterGuessed) {
      output = output + "_ ";
    }

    if (isLetterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}

// Korte versie
// function displayWordSoFar(word, guesses) {
//   return word
//       .split("") // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
//       .map((letter) => (guesses.includes(letter) ? `${letter} ` : "_ ")) // ["j ", "a ", "_ ", "a ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "]
//       .join(""); // "j a _ a _ _ _ _ _ _"
// }

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};