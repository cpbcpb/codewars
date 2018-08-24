function alphabetPosition(text) {
  let lowercaseString = text.toLowerCase();
  alphaArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let stringArray = lowercaseString.split("");
  let numberString = "";
  stringArray.forEach(function(character, index) {
    if (alphaArray.includes(character)) {
      if (numberString !== "") {
        numberString += " ";
      }
      numberString += alphaArray.indexOf(character) + 1;
    }
  });
  return numberString;
}
