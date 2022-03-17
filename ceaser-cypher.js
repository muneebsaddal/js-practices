function rot13(str) {

  let outputStr = ""

  for (let i = 0; i < str.length; i++) {
    var char = str[i];

    if(char.match(/[a-z]/i)) {
      char = String.fromCharCode(((str.charCodeAt(i) - 65 + 13) %26 + 65))
    }

    outputStr += char
  }
  
  return outputStr;
}
console.log(rot13("SERR PBQR PNZC"));
