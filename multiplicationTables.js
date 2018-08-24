function multiplicationTable(row, col) {
  let theTable = [];
  for (i = 0; i < row; i++) {
    anArray = [];
    firstNumb = i + 1;
    for (j = 1; j <= col; j++) {
      anArray.push(firstNumb * j);
    }
    theTable.push(anArray);
  }
  return theTable;
}
