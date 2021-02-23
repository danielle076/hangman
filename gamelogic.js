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

// FUNCTIE ISGAMELOST

// Fouten tellen:
// 7 fout (of meer?) -> return true.
// Minder dan 7 fout -> return false.

// Stappenplan
// • Counter aanmaken -> start bij 0
// • for loop over guesses, voor elke guess
// • Zit deze guess (letter) in het woord word.includes(guess)
// • if
// • Als true (we doen niets)
// • Als false -> counter met 1 verhogen
// • Aan het eind van de functie een if statement maken
// • if
// • Count is 7 -> return true
// • Count is minder dan 7 -> return false

function isGameLost(word, guesses) {
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1;
    }
  }

  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
}

// Korte versie
// function isGameLost(word, guesses) {
//   const MAX_MISTAKE_COUNT = 7;
//   return countMistakes(word, guesses) >= MAX_MISTAKE_COUNT;
// }

// FUNCTIE COUNTMISTAKES

function countMistakes(word, guesses) {
  return guesses.filter((guess) => !word.includes(guess)).length;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countMistakes: countMistakes,
};