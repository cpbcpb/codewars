function solution(string) {
  array1 = string.split("");
  for (i = 0; i < array1.length; i++) {
    if (array1[i].toUpperCase() === array1[i]) {
      letter = array1[i];
      spaceLocation = i;
      array1.splice(spaceLocation, 0, " ");
      i++;
    }
  }
  string2 = array1.join("");
  return string2;
}
