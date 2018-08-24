function accum(s) {
  arrayS = Array.from(s);
  let newS = "";
  let sCounter = 0;
  arrayS.forEach(function(letter, index) {
    i = 0;
    newS += letter.toUpperCase();
    while (i < index) {
      newS += letter.toLowerCase();
      i++;
    }
    if (arrayS.length != index + 1) {
      newS += "-";
    }
  });
  return newS;
}
