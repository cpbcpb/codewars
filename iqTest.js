function iqTest(numbers) {
  let numArray = numbers.split(" ");
  let oddCounter = 0;
  let evenCounter = 0;
  let toreturn;
  let odd;
  let even;
  numArray.forEach(function(num) {
    if (num % 2) {
      odd = numArray.indexOf(num) + 1;
      oddCounter++;
    } else {
      even = numArray.indexOf(num) + 1;
      evenCounter++;
    }
    if (evenCounter > 1 && oddCounter > 0) {
      toreturn = odd;
    } else if (oddCounter > 1 && evenCounter > 0) {
      toreturn = even;
    }
  });
  return toreturn;
}
