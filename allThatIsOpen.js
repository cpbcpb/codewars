function isBalanced(s, caps) {
  let capsArray = [];
  let openArray = [];
  let closeArray = [];
  let openToWatch = [];
  let index;
  for (i = 0; i < caps.length; i++) {
    capsArray.push(caps.charAt(i));
  }
  for (i = 0; i < caps.length; i = i + 2) {
    openArray.push(caps.charAt(i));
    closeArray.push(caps.charAt(i + 1));
  }
  for (h = 0; h < s.length; h++) {
    if (openArray.includes(s.charAt(h))) {
      if (closeArray.includes(s.charAt(h))) {
        if (openToWatch[0] === s.charAt(h)) {
          openToWatch.splice(0, 1);
        } else {
          console.log("removing it");
          openToWatch.unshift(s.charAt(h));
        }
      } else {
        console.log("removing it");
        openToWatch.unshift(s.charAt(h));
      }
    } else if (closeArray.includes(s.charAt(h))) {
      index = closeArray.indexOf(s.charAt(h));
      if (openToWatch[0] === openArray[index]) {
        openToWatch.splice(0, 1);
      } else {
        return false;
      }
    }
  }
  return !openToWatch[0];
}
