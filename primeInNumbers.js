// Given a positive number n > 1 find the prime factor decomposition of n.
// The result will be a string with the following form :
//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
// Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
//iteration 2
//should return the prime factors only

//iteration 1
//returns all the factors
function primeFactors(n) {
  let factorPairsArray = [];
  for (let i = 2; i <= n; i++) {
    //check if a factor
    if (n % i === 0) {
      let quotient = n / i;
      let factorPair = {
        factor1: quotient,
        factor2: i
      };
      factorPairsArray.push(factorPair);
    }
  }
  console.log(factorPairsArray);
}

Factors(20);
