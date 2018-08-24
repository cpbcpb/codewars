function likes(names) {
  let string = "";
  if (names[0] === undefined) {
    return "no one likes this";
  } else if (names.length === 1) {
    console.log(names[0]);
    return names[0] + " likes this";
  } else if (names.length === 2) {
    console.log("else2");
    string = "";
    names.forEach(function(name, index) {
      if (index + 1 !== names.length) {
        string = string + name + " ";
      } else {
        string = string + "and " + name + " like this";
      }
    });
  } else if (names.length === 3) {
    string = names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    string =
      string +
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this";
  }
  return string;
}
