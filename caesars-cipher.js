function rot13(str) {
  str = str.toLowerCase();
  let alphabets = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let decodedString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      decodedString += alphabets[alphabets.indexOf(str[i]) + 13]
    }
    else {
      decodedString += str[i]
    }
  }

  console.log(decodedString.toUpperCase())
  return decodedString.toUpperCase();
}

rot13("SERR PBQR PNZC");
