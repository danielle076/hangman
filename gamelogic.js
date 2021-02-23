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

// FUNCTIE ISGAMEWON

// Kunnen we 1 letter vinden die je niet hebt geraden? return false.
// Kunnen we niet 1 letter vinden die je niet hebt geraden return true.

// Stappenplan
// • Loggen: wat is "word", wat is "guesses"
// • Word -> word.split(""): ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
// • Loopen over de array met de letters van het woord
// • Voor elke letter in het woord
// • Zit deze letter in guesses -> guesses.includes(letter)
// • if in de loop
// • Is guesses true -> we gaan door
// • Is guesses false -> we stoppen: return false
// • Aan het einde van de loop? Aan het einde van de functie return true

function isGameWon(word, guesses) {
  const lettersInWordArray = word.split("");

  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      return false;
    }
  }

  return true;
}

// Korte versie
// function isGameWon(word, guesses) {
//   const letterNotGuessed = word
//       .split("") // // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
//       .find((letter) => !guesses.includes(letter));
//
//   return letterNotGuessed === undefined; // if there is no letter not guessed, we won
// }

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};