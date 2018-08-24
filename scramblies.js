function scramble(str1, str2) {
  array1 = str1.split("");
  array2 = str2.split("");

  array1.sort();
  array2.sort();
  let i = 0;
  let startHere = 0;
  //quick false
  while (i < array2.length) {
    if (!array1.includes(array2[i], startHere)) {
      return false;
    } else {
      startHere = 1 + array1.indexOf(array2[i], startHere);
    }
    i++;
  }
  return true;
}
