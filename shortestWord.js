function findShort(s) {
  sArray = s.split(" ");
  let shortest = s.length;
  for (i = 0; i < sArray.length; i++) {
    if (sArray[i].length < shortest) {
      shortest = sArray[i].length;
    }
  }
  return shortest;
}
