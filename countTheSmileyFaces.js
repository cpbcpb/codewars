function countSmileys(arr) {
  smileyCounter = 0;
  arr.forEach(function(face) {
    //does it have eyes
    if (face[0] === ":" || face[0] === ";") {
      //does it have nose
      if (face[1] === "-" || face[1] === "~") {
        //does it have mouth
        if (face[2] === ")" || face[2] === "D") {
          smileyCounter++;
        }
      }
      //no nose is ok
      else {
        //does it have mouth
        if (face[1] === ")" || face[1] === "D") {
          //    console.log("has mouth")
          smileyCounter++;
        }
      }
    }
  });
  //console.log(smileyCounter)
  return smileyCounter;
}
