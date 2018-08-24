function anagramCounter(wordsArray) {
  let uniqueWordsSet = new Set(wordsArray);
  let uniqueWordsArray = Array.from(uniqueWordsSet);
  let sortedWordsArray = [];
  let counter = 0;
  for (let i = 0; i < uniqueWordsArray.length; i++) {
    let theWord = uniqueWordsArray[i];
    sortedWordsArray.push(
      Array.from(theWord)
        .sort()
        .toString()
    );
  }
  sortedWordsArray.forEach(function(word, index) {
    matches =
      sortedWordsArray.lastIndexOf(word) -
      sortedWordsArray.indexOf(word, index);
    counter = counter + matches;
  });
  return counter;
}
