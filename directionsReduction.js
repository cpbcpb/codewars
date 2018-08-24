function dirReduc1(arr) {
  let windArr = ["NORTH", "SOUTH", "0", "EAST", "WEST"];
  let i = 0;
  while (i < arr.length) {
    arr.forEach(function(element, index) {
      let windIndex = windArr.indexOf(element);
      let left = windArr[windIndex - 1];
      let right = windArr[windIndex + 1];
      if (arr[index + 1] === left && left) {
        arr.splice(index, 2);
      }
      if (arr[index + 1] === right && right) {
        arr.splice(index, 2);
      }
    });
    i++;
  }
  return arr;
}

//better

function dirReduc(arrayOfDirections) {
  i = 0;
  while (i < arrayOfDirections.length) {
    let opposites = {
      NORTH: "SOUTH",
      SOUTH: "NORTH",
      EAST: "WEST",
      WEST: "EAST"
    };
    arrayOfDirections.forEach((oneDirection, index) => {
      if (opposites[oneDirection] == arrayOfDirections[index + 1]) {
        arrayOfDirections.splice(index, 2);
      }
    });
    i++;
  }
  return arrayOfDirections;
}
