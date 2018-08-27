function solve(s) {
  let sArray = Array.from(s);
  let alphaArray = [
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
  let maxScore = 0;
  let score = 0;
  sArray.forEach(function(letter) {
    console.log("all", letter);
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      score = 0;
    } else {
      score += alphaArray.indexOf(letter) + 1;
      if (score > maxScore) {
        maxScore = score;
      }
    }
  });

  return maxScore;
}
solve("chruschtschov");

//80

//instructions
// A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

// Good luck!
